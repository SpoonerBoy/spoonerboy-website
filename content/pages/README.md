# SpoonerBoy — Page Content

Each `.md` file here is the source of truth for a Ghost Admin page.

---

## How it works

The theme templates (`page-*.hbs`) are now **thin shells** — they only contain:
- The page hero/header (pulled from Ghost Admin page title + excerpt)
- Live/dynamic widgets (Minecraft stats, Reddit feed, GitHub repos)

All editable body content lives in these `.md` files and in **Ghost Admin**.

---

## Workflow: editing a page

1. Open the `.md` file here to read/edit the content locally.
2. Go to **Ghost Admin → Pages → [page name]**.
3. Use the Koenig editor to paste/update the content:
   - **Plain text / headings / lists** → use a Markdown card or type directly.
   - **Card grids, spec lists, mod grid** (sections marked `HTML card`) → use an **HTML card** and paste the HTML block.
4. Click **Update** in Ghost Admin. Changes go live immediately — no theme redeploy needed.

---

## Page reference

| File | Ghost slug | Template | Notes |
|------|-----------|----------|-------|
| `about.md` | `/about/` | page-about | 3 HTML card sections |
| `lab.md` | `/lab/` | page-lab | 4 HTML card sections; stat numbers in template |
| `guides.md` | `/guides/` | page-guides | 2 HTML card sections; add cards for new guides |
| `spoonercraft.md` | `/spoonercraft/` | page-spoonercraft | 3 HTML card sections; hero + MC stats in template |
| `projects.md` | `/projects/` | page-projects | 1 HTML card; live GitHub grid in template |
| `community.md` | `/community/` | page-community | Leave body blank; live Reddit feed in template |
| `github.md` | `/github/` | page-github | Redirect page; leave body blank |
| `pihole-docker.md` | `/pihole-docker/` | page-pihole-docker | Full markdown guide — paste directly into Ghost |
| `ubuntu-server.md` | `/ubuntu-server/` | page-ubuntu-server | Full markdown guide — paste directly into Ghost |
| `proxmox.md` | `/proxmox/` | page-proxmox | Full markdown guide — paste directly into Ghost |

---

## Tips

- **Guide pages** (pihole-docker, ubuntu-server, proxmox): paste the markdown body directly into Ghost Admin's editor. Ghost renders markdown natively.
- **Layout pages** (about, lab, guides, spoonercraft, projects): each section marked `(HTML card)` in the `.md` file should be pasted into a separate HTML card block in Ghost Admin.
- **Page title / excerpt**: set these in Ghost Admin under **Page settings → Meta** (or the page title field). The `.md` frontmatter is just documentation.
- **Stat numbers on Lab page** (2 Pis, 0 open ports, 12+ services): these are hardcoded in `page-lab.hbs` — edit that file when your hardware changes.
