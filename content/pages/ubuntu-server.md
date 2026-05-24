---
title: Ubuntu Server Setup
slug: ubuntu-server
template: page-ubuntu-server
custom_excerpt: From fresh install to production-ready. Security hardening, essentials, and Docker for your homelab foundation.
tags: Linux, Ubuntu, Foundations
---

## What You'll Do

This guide takes you from a fresh Ubuntu Server install to a hardened, Docker-ready system. Perfect for running homelab services on bare metal, a VM, or a Raspberry Pi.

### Prerequisites:

- Ubuntu Server 24.04 LTS (or 22.04 LTS)
- SSH access to your server
- sudo privileges or root access
- A static IP address (recommended)

---

## Part 1: Initial Setup

### Step 1: Connect via SSH

```bash
ssh ubuntu@<server-ip>
```

### Step 2: Update the system

```bash
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y
```

### Step 3: Set hostname

```bash
sudo hostnamectl set-hostname homelab-server
sudo nano /etc/hosts
```

Change `127.0.1.1 ubuntu` to `127.0.1.1 homelab-server`, then verify:

```bash
hostname
```

### Step 4: Configure a static IP

Check your network interface name:

```bash
ip link show
```

Edit Netplan config:

```bash
sudo nano /etc/netplan/00-installer-config.yaml
```

Set static IP:

```yaml
network:
  version: 2
  ethernets:
    eth0:
      dhcp4: no
      addresses:
        - 192.168.1.100/24
      gateway4: 192.168.1.1
      nameservers:
        addresses: [1.1.1.1, 8.8.8.8]
```

Apply:

```bash
sudo netplan apply
ip addr show
```

---

## Part 2: Security Hardening

### Step 1: Harden SSH

```bash
sudo nano /etc/ssh/sshd_config
```

Recommended settings:

```
Port 2222
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
PermitEmptyPasswords no
MaxAuthTries 3
MaxSessions 5
```

```bash
sudo systemctl restart ssh
```

### Step 2: Set up UFW firewall

```bash
sudo ufw enable
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw allow 2222/tcp
sudo ufw status
```

### Step 3: Install Fail2Ban

```bash
sudo apt install -y fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

---

## Part 3: Essential Tools

```bash
sudo apt install -y \
  curl wget git htop tmux vim \
  net-tools dnsutils telnet nmap iotop nethogs
```

---

## Part 4: Install Docker & Docker Compose

### Step 1: Install Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### Step 2: Add your user to the Docker group

```bash
sudo usermod -aG docker $USER
newgrp docker
docker ps
```

### Step 3: Install Docker Compose

```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

### Step 4: Enable Docker on boot

```bash
sudo systemctl enable docker
```

Your server is now hardened and Docker-ready. From here you can deploy services using Portainer, run Docker Compose stacks, or set up a Cloudflare Tunnel to expose services publicly without opening any ports on your router.
