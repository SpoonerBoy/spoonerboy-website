# SpoonerBoy — Post Content

Each `.md` file here is a source copy for a Ghost **post** (not a page).

---

## Per-post intro text at the top

Every post shows a subtitle under the title in the hero area. Set it per post in Ghost Admin:

1. **Posts → [your post] → Settings (gear icon)**
2. Fill in **Excerpt** (this is Ghost's *custom excerpt* field)
3. Click **Update**

That text appears under the post title on `post.hbs`. If you leave Excerpt blank, Ghost auto-generates one from the first paragraph of the post body.

**Example for Cloudflare Tunnels post:**

> Expose self-hosted services to the internet with zero open router ports. This guide covers Cloudflare Tunnels, DNS records, and routing traffic to Ghost, Minecraft, and other homelab services.

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
- Tag posts `lab-update` to show them in the **Currently Working On** feed on `/homelab/`.
- Feature image is optional — set in post settings for a hero background image.
