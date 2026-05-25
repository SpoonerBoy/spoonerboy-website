---
title: Homelab Documented
slug: homelab
template: page-homelab
custom_excerpt: A living record of everything in the lab. Full documentation, configs, and runbooks at homelabdocumented.com.
---

<!--
  HOW TO USE THIS FILE
  =====================
  The hero, stat row, active projects list, and lab-update feed are in page-homelab.hbs.

  Paste the INTRO (markdown) and HARDWARE sections (HTML cards) below into Ghost Admin
  → Pages → Homelab.

  Stat numbers (2 Pis, 0 ports, etc.) are in page-homelab.hbs — edit there when hardware changes.
-->


<!-- ═══════════════════════════════════════════════
     INTRO  (Markdown card)
     ═══════════════════════════════════════════════ -->

Everything in the homelab gets documented — configs, gotchas, update notes, and full setup guides. Whether it's a fresh Pi-hole install, Cloudflare Tunnel routing, or rebuilding Proxmox from scratch, it's written down.

The full reference site lives at [homelabdocumented.com](https://homelabdocumented.com). This page is the quick overview of what's running at The Grays.


<!-- ═══════════════════════════════════════════════
     SECTION: RASPBERRY PI 4 (primary)  (HTML card)
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-section-label sb-reveal">Primary node</div>
  <div class="sb-line-reveal sb-reveal sb-reveal-d1"><span><h2 class="sb-section-title">Raspberry Pi 4</h2></span></div>
  <div class="sb-cards sb-stagger sb-reveal sb-reveal-d2">
    <div class="sb-card">
      <div class="sb-card-label">Hardware</div>
      <ul class="sb-spec-list">
        <li class="sb-spec-item"><strong>Model</strong> Raspberry Pi 4</li>
        <li class="sb-spec-item"><strong>OS</strong> Raspberry Pi OS</li>
        <li class="sb-spec-item"><strong>Network</strong> Wired ethernet, static IP</li>
        <li class="sb-spec-item"><strong>Role</strong> Primary services host</li>
        <li class="sb-spec-item"><strong>Management</strong> Portainer Stacks</li>
      </ul>
    </div>
    <div class="sb-card">
      <div class="sb-card-label">Services running</div>
      <div class="sb-service-grid">
        <div class="sb-service">Ghost 5</div>
        <div class="sb-service">MySQL 8.0</div>
        <div class="sb-service">n8n</div>
        <div class="sb-service">Homepage</div>
        <div class="sb-service">Portainer</div>
        <div class="sb-service">Uptime Kuma</div>
        <div class="sb-service">Home Assistant</div>
        <div class="sb-service">Nginx Proxy Manager</div>
      </div>
    </div>
  </div>
</div>


<!-- ═══════════════════════════════════════════════
     SECTION: DNS PI  (HTML card)
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-section-label sb-reveal">DNS node</div>
  <div class="sb-line-reveal sb-reveal sb-reveal-d1"><span><h2 class="sb-section-title">Raspberry Pi — DNS</h2></span></div>
  <div class="sb-cards sb-stagger sb-reveal sb-reveal-d2">
    <div class="sb-card">
      <div class="sb-card-label">Hardware</div>
      <ul class="sb-spec-list">
        <li class="sb-spec-item"><strong>Model</strong> Raspberry Pi</li>
        <li class="sb-spec-item"><strong>OS</strong> Raspberry Pi OS</li>
        <li class="sb-spec-item"><strong>Network</strong> Wired ethernet, static IP</li>
        <li class="sb-spec-item"><strong>Role</strong> Network-wide DNS filtering</li>
      </ul>
    </div>
    <div class="sb-card">
      <div class="sb-card-label">Services running</div>
      <div class="sb-service-grid">
        <div class="sb-service">Pi-hole v6</div>
      </div>
    </div>
  </div>
</div>


<!-- ═══════════════════════════════════════════════
     SECTION: HP PRODESK (game server)  (HTML card)
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-section-label sb-reveal">Game server</div>
  <div class="sb-line-reveal sb-reveal sb-reveal-d1"><span><h2 class="sb-section-title">HP ProDesk G4 400 SFF</h2></span></div>
  <div class="sb-cards sb-stagger sb-reveal sb-reveal-d2">
    <div class="sb-card">
      <div class="sb-card-label">Hardware</div>
      <ul class="sb-spec-list">
        <li class="sb-spec-item"><strong>Model</strong> HP ProDesk G4 400 SFF</li>
        <li class="sb-spec-item"><strong>OS</strong> Ubuntu 24.04 LTS</li>
        <li class="sb-spec-item"><strong>CPU</strong> Intel Core i5</li>
        <li class="sb-spec-item"><strong>RAM</strong> 16 GB</li>
        <li class="sb-spec-item"><strong>Storage</strong> 512 GB SSD</li>
        <li class="sb-spec-item"><strong>Role</strong> Minecraft + Cloudflare tunnel host</li>
      </ul>
    </div>
    <div class="sb-card">
      <div class="sb-card-label">Services running</div>
      <div class="sb-service-grid">
        <div class="sb-service">SpoonerCraft</div>
        <div class="sb-service">AMP Panel</div>
        <div class="sb-service">Webmin</div>
        <div class="sb-service">Cloudflare Tunnel</div>
      </div>
    </div>
  </div>
</div>


<!-- ═══════════════════════════════════════════════
     SECTION: UNIFI NETWORKING  (HTML card)
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-section-label sb-reveal">Networking</div>
  <div class="sb-line-reveal sb-reveal sb-reveal-d1"><span><h2 class="sb-section-title">UniFi Stack.</h2></span></div>
  <div class="sb-cards sb-stagger sb-reveal sb-reveal-d2">
    <div class="sb-card">
      <div class="sb-card-label">Hardware</div>
      <ul class="sb-spec-list">
        <li class="sb-spec-item"><strong>Router</strong> UniFi Dream Machine</li>
        <li class="sb-spec-item"><strong>Switches</strong> UniFi managed switches</li>
        <li class="sb-spec-item"><strong>Access Points</strong> UniFi APs</li>
        <li class="sb-spec-item"><strong>Subnets</strong> Main LAN + server VLAN</li>
      </ul>
    </div>
    <div class="sb-card">
      <div class="sb-card-label">Access &amp; Security</div>
      <ul class="sb-spec-list">
        <li class="sb-spec-item"><strong>Remote access</strong> Tailscale subnet routing</li>
        <li class="sb-spec-item"><strong>Public exposure</strong> Cloudflare Tunnel only</li>
        <li class="sb-spec-item"><strong>Open ports</strong> Zero — tunnel handles everything</li>
        <li class="sb-spec-item"><strong>SSL</strong> Wildcard cert via Cloudflare DNS</li>
        <li class="sb-spec-item"><strong>DNS filtering</strong> Pi-hole v6 network-wide</li>
      </ul>
    </div>
  </div>
</div>
