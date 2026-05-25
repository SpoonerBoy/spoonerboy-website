# SpoonerBoy — Page Content

Each `.md` file here is the source of truth for a Ghost Admin **page**.

**Site reference:** see `content/SITE-REF.md` for full URL map, nav, and content strategy.

**Homepage:** theme-controlled — see `content/pages/home.md` for copy reference.

---

## Gaming-first content split

| Site | Content type |
|------|--------------|
| **spoonerboy.com** | SpoonerCraft, modpacks, server guides, gaming posts |
| **homelabdocumented.com** | Pi-hole, Proxmox, UniFi, infrastructure runbooks |

---

## Page reference

| File | Ghost slug | Template | Notes |
|------|-----------|----------|-------|
| `home.md` | *(theme only)* | `index.hbs` | Homepage copy reference — not a Ghost page |
| `spoonercraft.md` | `/spoonercraft/` | page-spoonercraft | Mod list, rules, apply — hero in template |
| `mc-mods.md` | `/mc-mods/` | page-mc-mods | Downloads in template; install guide in Admin |
| `guides.md` | `/guides/` | page-guides | **Server setup guides** — gaming/admin focus |
| `minecraft-server.md` | `/minecraft-server/` | page-minecraft-server | Ubuntu + AMP guide — paste markdown in Admin |
| `community.md` | `/community/` | page-community | Reddit feeds in template |
| `about.md` | `/about/` | page-about | Creator bio |
| `homelab.md` | `/homelab/` | page-homelab | Lab overview — de-emphasized; link to homelabdocumented.com |
| `projects.md` | `/projects/` | page-projects | GitHub grid in template |
| `lab.md` | `/lab/` | page-lab | **Legacy** — content merged into homelab.md |

### Legacy guide pages (link from homelabdocumented.com, not homepage)

| File | Slug | Template |
|------|------|----------|
| `pihole-docker.md` | `/pihole-docker/` | page-pihole-docker |
| `ubuntu-server.md` | `/ubuntu-server/` | page-ubuntu-server |
| `proxmox.md` | `/proxmox/` | page-proxmox |

### Blog posts

See `content/posts/README.md` — posts use Ghost **Posts**, not Pages.

---

## Homepage "What's new" tags

Tag posts with `minecraft` or `server-update` to appear on the homepage feed.

---

## Workflow

1. Edit the `.md` file locally
2. Ghost Admin → Pages → paste HTML cards or markdown
3. Upload theme zip when templates (`index.hbs`, etc.) change
