---
title: Server Setup Guides
slug: guides
template: page-guides
custom_excerpt: Guides for players and server admins — host Minecraft at home, manage with AMP, expose your server safely, and share modpacks with your community.
---

<!--
  HOW TO USE THIS FILE
  =====================
  spoonerboy.com/guides/ = server & gaming guides ONLY.
  Homelab infrastructure guides (Pi-hole, Proxmox, UniFi) → homelabdocumented.com

  Paste sections below as HTML cards in Ghost Admin → Pages → Guides.
-->


<!-- ═══════════════════════════════════════════════
     SECTION: SERVER GUIDES  (HTML card)
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-section-label sb-reveal">For server owners</div>
  <div class="sb-line-reveal sb-reveal sb-reveal-d1"><span><h2 class="sb-section-title">Host your own game server.</h2></span></div>
  <p class="sb-section-sub sb-reveal sb-reveal-d2">Step-by-step guides for running Minecraft at home — the same workflow used for SpoonerCraft.</p>
  <div class="sb-cards sb-stagger sb-reveal sb-reveal-d3">

    <a href="/minecraft-server/" class="sb-card sb-card-link">
      <div class="sb-card-icon gr">⛏️</div>
      <div class="sb-card-title">Minecraft Server on Ubuntu + AMP</div>
      <div class="sb-card-desc">Install Ubuntu Server, set up CubeCoders AMP, and deploy a Fabric Minecraft instance. Manage backups, mods, and restarts from a web panel.</div>
      <div class="sb-card-meta" style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">
        <span class="sb-badge">Minecraft</span>
        <span class="sb-badge">AMP</span>
        <span class="sb-badge">Ubuntu</span>
      </div>
      <div style="margin-top:12px;color:var(--muted);font-size:13px">Read guide →</div>
    </a>

    <a href="/cloudflare-tunnels-dns-records/" class="sb-card sb-card-link">
      <div class="sb-card-icon te">☁️</div>
      <div class="sb-card-title">Cloudflare Tunnels &amp; DNS Records</div>
      <div class="sb-card-desc">Expose playmc.spoonerboy.com and your website with zero open router ports. TCP routes for Minecraft, HTTP for web services.</div>
      <div class="sb-card-meta" style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">
        <span class="sb-badge">Cloudflare</span>
        <span class="sb-badge">DNS</span>
        <span class="sb-badge">Networking</span>
      </div>
      <div style="margin-top:12px;color:var(--muted);font-size:13px">Read guide →</div>
    </a>

    <a href="/ubuntu-server/" class="sb-card sb-card-link">
      <div class="sb-card-icon or">🐧</div>
      <div class="sb-card-title">Ubuntu Server Setup</div>
      <div class="sb-card-desc">Fresh Ubuntu install and hardening — the base OS for your game server before AMP.</div>
      <div class="sb-card-meta" style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">
        <span class="sb-badge">Linux</span>
        <span class="sb-badge">Server</span>
      </div>
      <div style="margin-top:12px;color:var(--muted);font-size:13px">Read guide →</div>
    </a>

  </div>
</div>


<!-- ═══════════════════════════════════════════════
     SECTION: PLAYER GUIDES  (HTML card)
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-section-label sb-reveal">For players</div>
  <div class="sb-line-reveal sb-reveal sb-reveal-d1"><span><h2 class="sb-section-title">Join and play.</h2></span></div>
  <div class="sb-cards sb-stagger sb-reveal sb-reveal-d2">

    <a href="/mc-mods/" class="sb-card sb-card-link">
      <div class="sb-card-icon bl">📦</div>
      <div class="sb-card-title">SpoonerPack Mods &amp; Downloads</div>
      <div class="sb-card-desc">Download the modpack, resource packs, shaders, and step-by-step install guide for SpoonerCraft.</div>
      <div style="margin-top:12px;color:var(--muted);font-size:13px">Get mods →</div>
    </a>

    <a href="/spoonercraft/" class="sb-card sb-card-link">
      <div class="sb-card-icon gr">🎮</div>
      <div class="sb-card-title">SpoonerCraft Server Page</div>
      <div class="sb-card-desc">Server rules, mod list, whitelist application, and live player count.</div>
      <div style="margin-top:12px;color:var(--muted);font-size:13px">View server →</div>
    </a>

  </div>
</div>


<!-- ═══════════════════════════════════════════════
     SECTION: HOMELAB DOCS LINK  (HTML card)
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-cards sb-stagger">
    <a href="https://homelabdocumented.com" class="sb-card sb-card-link" target="_blank" rel="noopener">
      <div class="sb-card-icon te">📚</div>
      <div class="sb-card-title">Homelab.Documented</div>
      <div class="sb-card-desc">Pi-hole, Proxmox, UniFi, Docker stacks, and full infrastructure runbooks — moved here from spoonerboy.com.</div>
      <div style="margin-top:12px;color:var(--teal);font-size:13px">homelabdocumented.com ↗</div>
    </a>
  </div>
</div>
