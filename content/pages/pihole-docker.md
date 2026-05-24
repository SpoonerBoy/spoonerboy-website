---
title: Pi-hole in Docker
slug: pihole-docker
template: page-pihole-docker
custom_excerpt: Network-wide DNS filtering, ad blocking, and privacy protection for your entire homelab. Running in Docker with persistent config.
tags: DNS, Docker, Guide
---

## What is Pi-hole?

Pi-hole is a DNS sinkhole that protects devices on your network by blocking ads, trackers, and malware at the DNS level. Instead of blocking ads in your browser, Pi-hole blocks them before they reach your devices.

### What you'll need:

- A Linux system (Ubuntu, Raspberry Pi OS, Debian)
- Docker and Docker Compose installed
- A static IP address for your Pi-hole host
- Access to your router's DNS settings

---

## Part 1: Installation on Ubuntu/Debian

### Step 1: Install Docker

Update your system and install Docker:

```bash
# Update packages
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add your user to the docker group
sudo usermod -aG docker $USER
newgrp docker

# Verify
docker --version
```

Install Docker Compose:

```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

### Step 2: Create the Docker Compose file

Create a directory for your Pi-hole config:

```bash
mkdir -p ~/docker/pihole
cd ~/docker/pihole
```

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  pihole:
    image: pihole/pihole:latest
    container_name: pihole
    restart: unless-stopped
    network_mode: host
    environment:
      TZ: 'America/Chicago'
      WEBPASSWORD: 'your_secure_password_here'
      DNS1: '1.1.1.1'
      DNS2: '8.8.8.8'
      DNSMASQ_LISTENING: 'local'
    volumes:
      - './etc-pihole:/etc/pihole'
      - './etc-dnsmasq.d:/etc/dnsmasq.d'
      - '/etc/localtime:/etc/localtime:ro'
    cap_add:
      - NET_ADMIN
    ports:
      - "53:53/tcp"
      - "53:53/udp"
      - "80:80/tcp"
      - "443:443/tcp"
```

### Step 3: Start Pi-hole

```bash
cd ~/docker/pihole
docker-compose up -d
docker-compose logs -f pihole
```

Wait for: `dnsmasq: listening on 127.0.0.1#53`

### Step 4: Access the dashboard

```bash
hostname -I
```

Open: `http://<your-ip>/admin/` and log in with your password.

---

## Part 2: Raspberry Pi Installation

### Step 1: Assign a static IP

```bash
sudo nano /etc/dhcpcd.conf
```

Add at the end:

```
interface eth0
static ip_address=192.168.1.50/24
static routers=192.168.1.1
static domain_name_servers=8.8.8.8 8.8.4.4
```

```bash
sudo systemctl restart dhcpcd
```

### Step 2: Install Docker on Raspberry Pi

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker pi
```

### Step 3: Deploy Pi-hole

```bash
mkdir -p ~/docker/pihole
cd ~/docker/pihole
# Create docker-compose.yml as above, then:
docker-compose up -d
```

---

## Part 3: Configure Your Network

**Option A: Router-level DNS (recommended)**

1. Log into your router admin panel
2. Find DNS settings (under WAN or DHCP)
3. Set Primary DNS to your Pi-hole IP (e.g. `192.168.1.50`)
4. Set Secondary DNS to `1.1.1.1` as fallback
5. Save and reboot the router

### Verify it's working

```bash
nslookup google.com <pi-hole-ip>
```

Then check your Pi-hole dashboard Query Log to see blocked queries.

---

## Part 4: Maintenance

### Add custom blocklists

1. Go to Pi-hole admin → Adlists
2. Popular lists: `https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts`
3. Click **Update Gravity** to apply

### Update Pi-hole

```bash
cd ~/docker/pihole
docker-compose pull
docker-compose up -d
```
