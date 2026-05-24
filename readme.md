# SpoonerBoy Ghost Theme v2.0

A custom Ghost theme for SpoonerBoy.com featuring homelab documentation, guides, and self-hosted content.

## Features

✅ Fully responsive dark/light theme switcher  
✅ Complete guide system with Pi-hole, Ubuntu Server, and Proxmox  
✅ Custom navigation with guides section  
✅ Optimized for homelab content  
✅ Template system for pages and guides  
✅ Open source and Ghost 5.0+ compatible  

## Installation

1. Clone or download this theme
2. Upload to Ghost Admin → Settings → Theme → Upload theme
3. Activate the theme
4. Create pages with appropriate slugs:
   - `/about/` (uses `page-about.hbs`)
   - `/guides/` (uses `guides.hbs`)
   - `/guides/pihole-docker/` (uses `page-guide-pihole-docker.hbs`)
   - `/guides/ubuntu-server/` (uses `page-guide-ubuntu-server.hbs`)
   - `/guides/proxmox/` (uses `page-guide-proxmox.hbs`)
   - `/lab/`, `/projects/`, `/spoonercraft/`, `/community/`

## File Structure

```
spoonerboy-theme/
├── default.hbs                      # Main layout template
├── index.hbs                        # Homepage
├── page.hbs                         # Generic page template
├── post.hbs                         # Blog post template
├── guides.hbs                       # Guides landing page
├── page-guide-*.hbs                 # Individual guide templates
├── page-*.hbs                       # Custom page templates
├── package.json                     # Theme metadata
└── README.md                        # This file
```

## Customization

Edit navigation links in `default.hbs` line 53-62 to customize the navbar.

## License

MIT

## Author

Delbert (SpoonerBoy) - delbert@spoonerboy.com