---
title: Proxmox Hypervisor
slug: proxmox
template: page-proxmox
custom_excerpt: Enterprise-grade virtualization for your homelab. VMs, containers, and clustering on open-source Proxmox VE.
tags: Virtualization, KVM, Infrastructure
---

## What is Proxmox?

Proxmox VE is an open-source virtualization platform combining KVM (for full VMs) and LXC (for lightweight containers). Think VMware or Hyper-V, but free and community-driven.

### You'll learn to:

- Install Proxmox on bare metal
- Create virtual machines and LXC containers
- Configure storage and networking
- Manage multiple nodes in a cluster
- Set up backups and high availability

---

## Part 1: Installation

### Step 1: Download Proxmox ISO

Get the latest ISO from [proxmox.com/downloads](https://www.proxmox.com/en/downloads)

Create a bootable USB:

```bash
# Linux
sudo dd if=proxmox-ve_*.iso of=/dev/sdX bs=1M

# macOS
sudo dd if=proxmox-ve_*.iso of=/dev/diskX bs=1m
```

### Step 2: Boot and install

1. Insert USB and boot from it
2. Select **Install Proxmox VE**
3. Accept the EULA and select target disk
4. Configure location, timezone, and root password
5. Set a static IP for the management interface
6. Complete installation and reboot

### Step 3: Access the web interface

Open your browser to: `https://<proxmox-ip>:8006`

Log in as: `root@pam`

---

## Part 2: Initial Configuration

### Step 1: Update Proxmox

```bash
ssh root@<proxmox-ip>
apt update && apt full-upgrade -y
reboot
```

### Step 2: Disable enterprise repository (no subscription)

```bash
nano /etc/apt/sources.list.d/pve-enterprise.list
# Comment out the enterprise line with #

# Add the no-subscription repo instead:
echo "deb http://download.proxmox.com/debian/pve bookworm pve-no-subscription" >> /etc/apt/sources.list
apt update
```

### Step 3: Create an admin user

Via web UI: **Datacenter → Permissions → Users → Add**

---

## Part 3: Create Your First VM

1. Upload ISO: select your node → local storage → ISO Images → Upload
2. Click **Create VM** (top right)
3. Configure: Name, OS ISO, CPU (2–4 cores), Memory (4–8 GB), Disk (20–50 GB)
4. Set Network to `vmbr0` (default bridge)
5. Start the VM and complete OS installation via console

---

## Part 4: Create an LXC Container

1. Download a template: local storage → CT Templates → Templates
2. Click **Create CT**
3. Configure: hostname, password, template, storage, CPU, memory
4. Start the container — it boots in seconds

LXC containers are great for lightweight services like Pi-hole, Home Assistant, or databases where you don't need full VM isolation.

---

## Part 5: Backups

**Datacenter → Backup → Add schedule**

- Select VMs/containers to back up
- Choose local storage or NFS/CIFS share
- Set retention policy (e.g. keep last 3)
- Proxmox will run backups automatically on schedule
