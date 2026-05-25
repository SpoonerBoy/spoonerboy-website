---
title: Minecraft Server on Ubuntu + AMP
slug: minecraft-server
template: page-minecraft-server
custom_excerpt: Set up a Fabric Minecraft server on Ubuntu using CubeCoders AMP — install, configure, mod, and manage the same way SpoonerCraft runs at The Grays.
tags: minecraft, guides, amp, ubuntu
---

<!--
  HOW TO USE THIS FILE
  =====================
  1. Ghost Admin → Pages → New page
  2. Title: Minecraft Server on Ubuntu + AMP
  3. Slug: minecraft-server
  4. Template: page-minecraft-server
  5. Paste markdown body below into Ghost Admin
-->

## Overview

SpoonerCraft runs on an **HP ProDesk G4** with **Ubuntu 24.04 LTS** and **CubeCoders AMP** (Application Management Panel). AMP gives you a web UI for starting/stopping the server, managing mods, scheduling restarts, and handling backups — without memorizing Java commands.

This guide walks through the same stack from scratch.

---

## What you need

- A machine on your network (old PC, mini PC, or dedicated server)
- **Ubuntu Server 24.04 LTS** installed ([Ubuntu Server Setup](/ubuntu-server/) guide)
- Static IP or DHCP reservation on your router
- AMP license from [cubecoders.com](https://cubecoders.com/AMP) (free trial available)
- Minecraft server JAR or Fabric installer for your target version

---

## Step 1 — Prepare Ubuntu Server

1. Install Ubuntu Server 24.04 LTS on your hardware
2. Update packages:

```bash
sudo apt update && sudo apt upgrade -y
```

3. Install dependencies AMP and Minecraft commonly need:

```bash
sudo apt install -y curl wget unzip openjdk-21-jre-headless
```

4. Set a hostname (optional but helpful):

```bash
sudo hostnamectl set-hostname mc-server
```

5. Ensure the machine has a **static IP** on your LAN (UniFi DHCP reservation or netplan config)

---

## Step 2 — Install AMP (CubeCoders)

1. Download the AMP installer for Linux from the CubeCoders website
2. Run the installer as root:

```bash
sudo bash AMP_*.sh
```

3. Follow the prompts:
   - Accept the license
   - Choose install directory (default `/home/amp` is fine)
   - Set the AMP web panel port (default `8080`)
   - Create an admin username and password

4. Start AMP:

```bash
sudo systemctl start ampinstmgr
sudo systemctl enable ampinstmgr
```

5. Open the AMP web panel: `http://YOUR-SERVER-IP:8080`

---

## Step 3 — Create a Minecraft instance in AMP

1. Log in to the AMP web panel
2. Click **Create Instance**
3. Select **Minecraft Java** (or **Generic** if using Fabric manually)
4. Configure:
   - **Instance name:** `SpoonerCraft` (or your server name)
   - **Port:** `25565` (default Minecraft)
   - **Memory:** At least 4 GB for a modded server (8 GB recommended)
   - **Server type:** Fabric (for modded) or Vanilla/Paper as needed

5. For **Fabric**:
   - Download the Fabric server installer from [fabricmc.net](https://fabricmc.net/use/server/)
   - Upload to the instance directory via AMP file manager, or SSH in
   - Run the installer to generate the Fabric server JAR
   - Set the startup command in AMP to use the Fabric JAR

6. Start the instance and verify it shows **Running** in AMP

---

## Step 4 — First launch and EULA

1. Start the server once — it will generate files and stop (EULA not accepted)
2. Open the server console in AMP
3. Edit `eula.txt` in the instance files and set:

```
eula=true
```

4. Restart the server from AMP
5. Connect locally: `YOUR-SERVER-IP:25565` from Minecraft

---

## Step 5 — Install server-side mods

1. Stop the server in AMP
2. Upload mod `.jar` files to the `mods/` folder in the instance directory
3. Required for Fabric: **Fabric API** must be in `mods/`
4. Start the server — check the console for mod load errors

**SpoonerCraft server mods** (reference): Armored Elytra, Beehave, Chunky, Lithium, Simple Discord Link, Spark, and others — see the [SpoonerCraft mod list](/spoonercraft/).

---

## Step 6 — Expose to the internet (optional)

To let friends connect from outside your network:

1. Set up a **Cloudflare Tunnel** with a TCP route for Minecraft — see [Cloudflare Tunnels & DNS Records](/cloudflare-tunnels-dns-records/)
2. Point a subdomain like `playmc.yourdomain.com` to the tunnel
3. Players connect to `playmc.yourdomain.com` — no port forwarding needed

---

## Step 7 — AMP daily management

| Task | How in AMP |
|------|------------|
| Restart server | Instance → Stop → Start, or Schedule restart |
| View console | Instance → Console tab |
| Backup world | Instance → Backups → Create backup |
| Update mods | Stop server → upload to `mods/` → Start |
| Change RAM | Instance → Configuration → JVM flags / memory limit |
| Schedule tasks | Instance → Schedules (auto-restart, backups) |

---

## Troubleshooting

**Server won't start**
- Check AMP console for Java errors
- Verify enough RAM is allocated (modded needs 4 GB+)
- Confirm Fabric API is installed for Fabric mods

**Can't connect from another PC on LAN**
- Check Ubuntu firewall: `sudo ufw allow 25565/tcp`
- Verify AMP instance is bound to `0.0.0.0` not `127.0.0.1`

**Mods crashing on load**
- Match Minecraft version across all mods and Fabric loader
- Remove mods one at a time to find conflicts

**High CPU/RAM**
- Use **Spark** mod to profile (installed on SpoonerCraft)
- Reduce view distance in `server.properties`
- Allocate more RAM in AMP if hardware allows

---

## Related guides

- [Ubuntu Server Setup](/ubuntu-server/) — base OS install
- [Cloudflare Tunnels & DNS](/cloudflare-tunnels-dns-records/) — expose server without open ports
- [SpoonerCraft](/spoonercraft/) — the live community server
- [SpoonerPack Mods](/mc-mods/) — client modpack for players
- [Homelab.Documented](https://homelabdocumented.com) — full infrastructure reference
