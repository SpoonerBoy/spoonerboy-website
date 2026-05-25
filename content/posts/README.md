# SpoonerBoy — Post Content

Each `.md` file here is a source copy for a Ghost **post** (not a page).

---

## Per-post intro text at the top

Every post shows a **title**, **tags**, and **intro subtitle** in the hero area at the top. Set the intro in Ghost Admin:

1. **Posts → [your post] → Settings (gear icon)**
2. **Excerpt** — this is the subtitle under the title (Ghost calls it `custom_excerpt` in the theme)
3. Click **Update**

If Excerpt is blank, the theme auto-pulls the first ~45 words from the post body.

**Important:** The post **Title** field (top of editor) fills the big H1. The **Excerpt** field fills the subtitle. Both are separate from the body content.

**Example for Cloudflare Tunnels post:**

| Field | Value |
|-------|-------|
| Title | Cloudflare Tunnels & DNS Records |
| Excerpt | Expose self-hosted services to the internet with zero open router ports. This guide covers Cloudflare Tunnels, DNS records, and routing traffic to Ghost, Minecraft, and other homelab services. |

---

## Workflow: publishing a post

1. Edit the `.md` file here locally for reference.
2. Go to **Ghost Admin → Posts → New post**.
3. Set **Title** and **Excerpt** (intro text).
4. Add **tags** (e.g. `homelab`, `cloudflare`, `guides`).
5. Paste the markdown body into the editor.
6. Click **Publish**.

---

## Post reference

| File | Suggested title | Tags | Notes |
|------|----------------|------|-------|
| `cloudflare-tunnels.md` | Cloudflare Tunnels & DNS Records | homelab, cloudflare, guides | Full guide — paste body into Ghost Admin |

---

## Tips

- Use **Excerpt** for the intro blurb at the top — don't repeat it as the first paragraph unless you want it twice.
- Tag posts `minecraft` or `server-update` to show them in the homepage **What's new** feed.
- Tag posts `lab-update` to show them in the **Currently Working On** feed on `/homelab/`.
- Feature image is optional — set in post settings for a hero background image.
