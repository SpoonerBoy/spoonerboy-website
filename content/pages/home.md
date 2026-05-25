# Homepage Reference

The homepage (`index.hbs`) is **theme-controlled** — not editable from Ghost Admin. Use this file as the copy reference when updating the template.

---

## Positioning

**Creator + server owner** — personal brand around gaming, SpoonerCraft, modpacks, server updates, and community.

Homelab/infrastructure is de-emphasized to a single "Powered by Homelab.Documented" strip at the bottom.

---

## Section order (gaming-first)

| # | Section | Source |
|---|---------|--------|
| 1 | Hero — Spoonerboy.com + gaming stats | `index.hbs` |
| 2 | SpoonerCraft — IP, player count, mod highlights | `index.hbs` |
| 3 | What's new — posts tagged `minecraft` or `server-update` | `index.hbs` + Ghost posts |
| 4 | Community — Minecraft Reddit teaser | `index.hbs` + `main.js` |
| 5 | Server setup guides teaser | `index.hbs` |
| 6 | Powered by Homelab.Documented | `index.hbs` |

---

## Hero copy

| Field | Text |
|-------|------|
| Eyebrow | Ohio · Minecraft · Community |
| Title | Spoonerboy.com |
| Subtitle | Creator, server owner, and community builder. SpoonerCraft SMP, modpacks, server updates, and guides for running your own game server at home. |
| Primary CTA | Join SpoonerCraft → `/spoonercraft/` |
| Secondary CTAs | Get the modpack → `/mc-mods/` · Server guides → `/guides/` |

## Stats row

| Stat | Source |
|------|--------|
| Players online | Live API (`data-mc-count="online"`) |
| Max players | Live API |
| Server status | Live API |
| Fabric 26.1.2 | Static |

---

## What's new feed

Tag any Ghost **post** with:
- `minecraft` — guides, mod spotlights, general gaming content
- `server-update` — modpack changes, whitelist news, season announcements

Up to 3 posts appear on the homepage automatically.

---

## Reddit teaser subreddits

Configured in `assets/js/main.js` → `loadRedditTeaser()`:
- r/Minecraft
- r/fabricmc
- r/admincraft

---

## When to edit

| Change | Edit |
|--------|------|
| Hero copy, section order, guide cards | `index.hbs` |
| Reddit subs on homepage | `assets/js/main.js` |
| Gaming blog posts | Ghost Admin → Posts + tags |
| SpoonerCraft details | `/spoonercraft/` page |
