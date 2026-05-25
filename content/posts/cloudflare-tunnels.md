---
title: Cloudflare Tunnels & DNS Records
slug: cloudflare-tunnels-dns-records
tags: homelab, cloudflare, guides, dns
custom_excerpt: Expose self-hosted services to the internet with zero open router ports. This guide covers Cloudflare Tunnels, DNS records, and routing traffic to Ghost, Minecraft, and other homelab services.
---

<!--
  HOW TO USE THIS FILE
  =====================
  1. Ghost Admin → Posts → New post
  2. Title: Cloudflare Tunnels & DNS Records
  3. Excerpt: paste custom_excerpt above (shows under title on post page)
  4. Tags: homelab, cloudflare, guides, dns
  5. Paste the GUIDE BODY below as markdown into the editor
  6. Publish
-->

## Why Cloudflare Tunnels?

Opening ports on your home router is a bad time. Cloudflare Tunnels (`cloudflared`) creates an outbound connection from your homelab to Cloudflare — no port forwarding, no exposed WAN IP, wildcard SSL included.

This is how spoonerboy.com, playmc.spoonerboy.com, and other services are exposed from The Grays with **zero open ports**.

---

## What you need

- A domain added to Cloudflare (e.g. `spoonerboy.com`)
- A machine on your LAN to run `cloudflared` (I use an HP ProDesk with Ubuntu 24.04)
- Cloudflare Zero Trust account (free tier works)
- Local services running with known internal IPs/ports (Ghost on `:2368`, Minecraft on `:25565`, etc.)

---

## Step 1 — Add your domain to Cloudflare

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. **Add a site** → enter your domain
3. Cloudflare scans existing DNS records — review and continue
4. Update your domain registrar's nameservers to the two Cloudflare nameservers shown
5. Wait for status to show **Active**

Once active, all DNS for that domain is managed in Cloudflare.

---

## Step 2 — Create a tunnel

1. Go to **Zero Trust** → **Networks** → **Tunnels**
2. Click **Create a tunnel**
3. Name it something clear (e.g. `homelab-tunnel`)
4. Choose **Cloudflared** as the connector
5. Copy the install command — it looks like:

```bash
sudo cloudflared service install eyJhIjoi...
```

6. Run that command on your tunnel host (Ubuntu server)

Verify the tunnel shows **Healthy** in the Cloudflare dashboard.

---

## Step 3 — Route traffic (Public Hostnames)

Still in the tunnel config, go to **Public Hostname** and add entries for each service:

| Subdomain | Service | Internal URL |
|-----------|---------|--------------|
| `@` or `www` | Ghost (this site) | `http://192.168.x.x:2368` |
| `playmc` | Minecraft server | `tcp://192.168.x.x:25565` |
| `home` | Homepage dashboard | `http://192.168.x.x:3000` |

**Notes:**
- Use `http://` for web services — Cloudflare handles HTTPS at the edge
- Minecraft requires a **TCP** route, not HTTP
- Each hostname gets an automatic CNAME pointing to your tunnel UUID

---

## Step 4 — DNS records in Cloudflare

When you add Public Hostnames through the tunnel UI, Cloudflare creates CNAME records automatically. Verify under **DNS → Records**:

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| CNAME | `spoonerboy.com` | `<tunnel-id>.cfargotunnel.com` | Proxied (orange cloud) |
| CNAME | `playmc` | `<tunnel-id>.cfargotunnel.com` | Proxied |
| CNAME | `www` | `<tunnel-id>.cfargotunnel.com` | Proxied |

**Keep the proxy enabled (orange cloud)** for web traffic — DDoS protection and SSL included.

You generally do **not** need A records pointing to your home IP or port forwarding on your router.

---

## Step 5 — SSL / HTTPS settings

Under **SSL/TLS → Overview**, set encryption mode to **Full** or **Full (strict)**.

- **Full** — Cloudflare encrypts to your origin even if the origin uses a self-signed cert
- **Full (strict)** — Origin must have a valid cert

For most homelab tunnel setups, **Full** is fine since traffic stays on your LAN between cloudflared and the service.

---

## Step 6 — Install cloudflared on Ubuntu

```bash
sudo mkdir -p /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-main.gpg > /dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared jammy main" | sudo tee /etc/apt/sources.list.d/cloudflared.list

sudo apt update
sudo apt install cloudflared
```

Run the `cloudflared service install <token>` command from the Zero Trust dashboard, then check:

```bash
sudo systemctl status cloudflared
```

---

## Example config (config.yml reference)

Cloudflared stores config at `/etc/cloudflared/config.yml`. When managed through Zero Trust, this is auto-generated:

```yaml
tunnel: <your-tunnel-uuid>
credentials-file: /etc/cloudflared/<uuid>.json

ingress:
  - hostname: spoonerboy.com
    service: http://192.168.1.50:2368
  - hostname: www.spoonerboy.com
    service: http://192.168.1.50:2368
  - hostname: playmc.spoonerboy.com
    service: tcp://192.168.1.60:25565
  - service: http_status:404
```

The last `http_status:404` catch-all is required.

---

## Troubleshooting

**Tunnel shows unhealthy**
- Check `sudo systemctl status cloudflared` on the host
- Verify the machine has internet access
- Re-run the install token if credentials expired

**Site loads but shows 502 Bad Gateway**
- Confirm the internal IP:port is correct and the service is running
- Test locally: `curl http://192.168.x.x:2368` from the tunnel host

**DNS not resolving**
- Confirm nameservers at your registrar point to Cloudflare
- Check CNAME records exist and are proxied

**Minecraft connection fails**
- Ensure the route type is **TCP**, not HTTP
- Verify `playmc.spoonerboy.com` CNAME points to the tunnel

---

## My setup at The Grays

| Service | Host | Tunnel route |
|---------|------|--------------|
| spoonerboy.com (Ghost) | Raspberry Pi 4 | HTTP → `:2368` |
| playmc.spoonerboy.com | HP ProDesk | TCP → `:25565` |
| Internal dashboards | Various | HTTP → local ports |

All public traffic enters through Cloudflare. The UniFi router has **zero** port forwards.

---

## Related guides

- [Pi-hole in Docker](/pihole-docker/)
- [Ubuntu Server Setup](/ubuntu-server/)
- [Homelab overview](/homelab/)
