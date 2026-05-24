# Homelab Documented

> **Ghost Admin Setup:**
> 1. Go to **Pages → New page**
> 2. Set the **Page URL (slug)** to `homelab` — this activates the `page-homelab.hbs` template automatically
> 3. Set **Title** to `Homelab Documented` (or leave blank — the template has a fallback)
> 4. Set **Excerpt** to your preferred subtitle, or leave blank for the default
> 5. Paste the content below into the page body editor
> 6. Click **Publish**
> 7. The page will be live at `spoonerboy.com/homelab/`

---

## Page body content (paste into Ghost Admin editor)

This section appears between the hero and the Active Projects list. Keep it short — 1–3 paragraphs max.

---

**Suggested intro (paste this into Ghost Admin):**

Everything in the homelab gets documented — configs, gotchas, update notes, and full setup guides. Whether it's a fresh Pi-hole install or rebuilding Proxmox from scratch, it's written down.

The full reference site lives at [homelabdocumented.com](https://homelabdocumented.com), built with the same philosophy: if it runs in the lab, it gets documented.

---

## "Currently Working On" feed — how it works

The **Currently Working On** section at the bottom of this page is powered by Ghost's post system. It automatically shows any published post tagged with `lab-update`.

**To add a lab update:**

1. Go to **Posts → New post** in Ghost Admin
2. Write your update — what you're building, what broke, what you fixed
3. Add the tag `lab-update` to the post
4. Publish it

It will appear instantly in the feed on this page. No theme changes needed.

**Suggested content for lab updates:**
- Short notes on what you're currently setting up
- Progress updates on longer projects (e.g., "Working on Cloudflare Tunnel setup")
- Troubleshooting notes ("Pi-hole container kept crashing — fixed with...")
- New service announcements ("Added Uptime Kuma for monitoring")

---

## Adding new projects to the Active Projects list

The project cards are hardcoded in `page-homelab.hbs`. To add a new project:

1. Open `page-homelab.hbs` in the theme files
2. Copy an existing `<a class="sb-hl-project">` block
3. Update the icon, name, description, tags, and href
4. Set the status badge class:
   - `sb-hl-status-live` → green "● Running"
   - `sb-hl-status-wip` → orange "● In Progress"
   - `sb-hl-status-planned` → gray "Planned"
   - `sb-hl-status-external` → blue "↗ Visit"
5. Rebuild and upload the theme zip

---

## Navigation

To add this page to your site navigation:

1. Ghost Admin → **Settings → Navigation**
2. Add label: `Homelab` or `Docs`
3. Add URL: `/homelab/`
4. Save

---

## Page Settings (Ghost Admin)

| Field      | Value                                                                 |
|------------|-----------------------------------------------------------------------|
| Title      | Homelab Documented                                                    |
| Slug       | `homelab`                                                             |
| Excerpt    | A living record of everything in the lab. Full docs at homelabdocumented.com. |
| Tags       | (optional — not displayed on this template)                          |
| Template   | Auto-selected via slug match (`page-homelab.hbs`)                    |
