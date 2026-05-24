---
title: About
slug: about
template: page-about
custom_excerpt: Homelab tinkerer, self-hosting enthusiast, and Minecraft server admin running everything from a Raspberry Pi in my house.
---

<!--
  HOW TO USE THIS FILE
  =====================
  1. Open Ghost Admin → Pages → About
  2. Each section below is a separate Ghost content block.
     - Use an HTML card for sections that contain sb-card / sb-spec-list HTML.
     - Use a Divider card between major sections.
  3. The page hero (title, subtitle) is controlled by the theme template — edit page-about.hbs or the custom_excerpt frontmatter above.
-->


<!-- ═══════════════════════════════════════════════
     SECTION: WHO I AM  (paste as HTML card)
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-section-label sb-reveal">Who I am</div>
  <div class="sb-line-reveal sb-reveal sb-reveal-d1"><span><h2 class="sb-section-title">Welcome to SpoonerBoy.com</h2></span></div>
  <div class="sb-cards sb-stagger sb-reveal sb-reveal-d2">
    <div class="sb-card">
      <div class="sb-card-icon gr">🖥</div>
      <div class="sb-card-title">The Grays</div>
      <div class="sb-card-desc">My homelab — a self-hosted setup built on a pair of Raspberry Pis, UniFi networking, and way too many Docker containers. This site is self-hosted on Ghost, managed through Portainer, and tunneled out via Cloudflare.</div>
    </div>
    <div class="sb-card">
      <div class="sb-card-icon or">⛏</div>
      <div class="sb-card-title">SpoonerCraft</div>
      <div class="sb-card-desc">I run a whitelisted Fabric SMP Minecraft server called SpoonerCraft. It lives on an HP ProDesk running Ubuntu, managed with AMP Panel, accessible at playmc.spoonerboy.com.</div>
    </div>
    <div class="sb-card">
      <div class="sb-card-icon bl">✍️</div>
      <div class="sb-card-title">What I write about</div>
      <div class="sb-card-desc">Homelab builds, self-hosting guides, networking deep dives, and the occasional "here's what went wrong and how I fixed it" post. I document things the way I wish someone had when I was starting out.</div>
    </div>
  </div>
</div>


<!-- ═══════════════════════════════════════════════
     SECTION: THE FULL STACK  (paste as HTML card)
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-section-label sb-reveal">What I run</div>
  <div class="sb-line-reveal sb-reveal sb-reveal-d1"><span><h2 class="sb-section-title">The full stack.</h2></span></div>
  <div class="sb-cards sb-reveal sb-reveal-d2">
    <div class="sb-card">
      <div class="sb-card-label">Infrastructure</div>
      <ul class="sb-spec-list">
        <li class="sb-spec-item"><strong>Homelab</strong> The Grays — Raspberry Pi cluster</li>
        <li class="sb-spec-item"><strong>Networking</strong> Full UniFi stack with VLANs</li>
        <li class="sb-spec-item"><strong>Containers</strong> Docker managed via Portainer Stacks</li>
        <li class="sb-spec-item"><strong>Tunnel</strong> Cloudflare — zero open ports</li>
        <li class="sb-spec-item"><strong>Remote</strong> Tailscale with subnet routing</li>
        <li class="sb-spec-item"><strong>DNS</strong> Pi-hole v6 network-wide filtering</li>
      </ul>
    </div>
    <div class="sb-card">
      <div class="sb-card-label">Services</div>
      <div class="sb-service-grid">
        <div class="sb-service">Ghost 5</div>
        <div class="sb-service">Home Assistant</div>
        <div class="sb-service">Portainer</div>
        <div class="sb-service">Uptime Kuma</div>
        <div class="sb-service">n8n</div>
        <div class="sb-service">Pi-hole v6</div>
        <div class="sb-service">Nginx Proxy Manager</div>
        <div class="sb-service">Homepage Dashboard</div>
        <div class="sb-service">AMP Panel</div>
        <div class="sb-service">Tailscale</div>
      </div>
    </div>
  </div>
</div>


<!-- ═══════════════════════════════════════════════
     SECTION: FIND ME / LINKS  (paste as HTML card)
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-section-label sb-reveal">Find me</div>
  <div class="sb-line-reveal sb-reveal sb-reveal-d1"><span><h2 class="sb-section-title">Links.</h2></span></div>
  <div class="sb-cards sb-stagger sb-reveal sb-reveal-d2">
    <div class="sb-card">
      <div class="sb-card-icon pu">🐙</div>
      <div class="sb-card-title">GitHub</div>
      <div class="sb-card-desc">All my configs, Portainer stacks, and homelab code. Including the AMP S3 backup guide.</div>
      <div style="margin-top:16px"><a class="sb-btn sb-btn-ghost" href="https://github.com/SpoonerBoy" target="_blank" rel="noopener" style="font-size:13px;padding:8px 18px">github.com/SpoonerBoy →</a></div>
    </div>
    <div class="sb-card">
      <div class="sb-card-icon or">⛏</div>
      <div class="sb-card-title">SpoonerCraft</div>
      <div class="sb-card-desc">My whitelisted Fabric SMP. Always looking for good people to join the community.</div>
      <div style="margin-top:16px"><a class="sb-btn sb-btn-ghost" href="/spoonercraft/" style="font-size:13px;padding:8px 18px">View server page →</a></div>
    </div>
    <div class="sb-card">
      <div class="sb-card-icon gr">📡</div>
      <div class="sb-card-title">RSS Feed</div>
      <div class="sb-card-desc">Subscribe to the blog via RSS and get new posts delivered straight to your reader.</div>
      <div style="margin-top:16px"><a class="sb-btn sb-btn-ghost" href="/rss/" style="font-size:13px;padding:8px 18px">Subscribe via RSS →</a></div>
    </div>
  </div>
  <div style="margin-top:24px;padding:20px 24px;background:var(--s1);border:0.5px solid var(--b1);border-radius:12px;font-size:14px;color:var(--muted)" class="sb-reveal sb-reveal-d3">
    This whole site is self-hosted on a Raspberry Pi sitting in my house. If it's down, I probably unplugged something. 🙂
  </div>
</div>
