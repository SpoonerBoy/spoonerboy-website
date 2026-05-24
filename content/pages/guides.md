---
title: Guides & Documentation
slug: guides
template: page-guides
custom_excerpt: Deep dives into self-hosting, networking, and homelab infrastructure. Follow along or adapt to your setup.
---

<!--
  HOW TO USE THIS FILE
  =====================
  Paste the sections below as HTML cards in Ghost Admin → Pages → Guides.
  Add or remove guide cards as you publish new guides.
-->


<!-- ═══════════════════════════════════════════════
     SECTION: FEATURED GUIDES  (HTML card)
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-section-label sb-reveal">Featured guides</div>
  <div class="sb-line-reveal sb-reveal sb-reveal-d1"><span><h2 class="sb-section-title">Get started with the essentials.</h2></span></div>
  <p class="sb-section-sub sb-reveal sb-reveal-d2">From DNS filtering to containerization — pick a guide and learn by doing.</p>
  <div class="sb-cards sb-stagger sb-reveal sb-reveal-d3">

    <a href="/pihole-docker/" class="sb-card sb-card-link">
      <div class="sb-card-icon bl">🕳️</div>
      <div class="sb-card-title">Pi-hole in Docker</div>
      <div class="sb-card-desc">Set up network-wide DNS filtering with Pi-hole running in a Docker container. Block ads and malware across your entire network.</div>
      <div class="sb-card-meta" style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">
        <span class="sb-badge">DNS</span>
        <span class="sb-badge">Docker</span>
      </div>
      <div style="margin-top:12px;color:var(--muted);font-size:13px">Learn more →</div>
    </a>

    <a href="/ubuntu-server/" class="sb-card sb-card-link">
      <div class="sb-card-icon or">🐧</div>
      <div class="sb-card-title">Ubuntu Server Setup</div>
      <div class="sb-card-desc">Fresh Ubuntu Server installation, hardening, and core utilities. Build a solid foundation for Docker and services.</div>
      <div class="sb-card-meta" style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">
        <span class="sb-badge">Linux</span>
        <span class="sb-badge">Ubuntu</span>
      </div>
      <div style="margin-top:12px;color:var(--muted);font-size:13px">Learn more →</div>
    </a>

    <a href="/proxmox/" class="sb-card sb-card-link">
      <div class="sb-card-icon gr">🖥️</div>
      <div class="sb-card-title">Proxmox Hypervisor</div>
      <div class="sb-card-desc">Install and configure Proxmox VE for virtualization. Create VMs and LXC containers, manage storage, and set up clustering.</div>
      <div class="sb-card-meta" style="margin-top:12px;display:flex;gap:6px;flex-wrap:wrap">
        <span class="sb-badge">Virtualization</span>
        <span class="sb-badge">Infrastructure</span>
      </div>
      <div style="margin-top:12px;color:var(--muted);font-size:13px">Learn more →</div>
    </a>

  </div>
</div>


<!-- ═══════════════════════════════════════════════
     SECTION: COMING SOON  (HTML card)
     Update or remove cards as guides are published.
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-section-label sb-reveal">Coming soon</div>
  <div class="sb-line-reveal sb-reveal sb-reveal-d1"><span><h2 class="sb-section-title">More guides in progress.</h2></span></div>
  <p class="sb-section-sub sb-reveal sb-reveal-d2">Topics planned: Cloudflare Tunnels, UniFi networking, Home Assistant, Tailscale, and more.</p>
  <div class="sb-cards sb-reveal sb-reveal-d2">
    <div class="sb-card" style="opacity:0.6;pointer-events:none">
      <div class="sb-card-icon te">☁️</div>
      <div class="sb-card-title">Cloudflare Tunnels</div>
      <div class="sb-card-desc">Expose services securely without opening ports. Zero trust access and automatic SSL.</div>
      <div style="margin-top:12px"><span class="sb-badge">Coming soon</span></div>
    </div>
    <div class="sb-card" style="opacity:0.6;pointer-events:none">
      <div class="sb-card-icon pu">🌐</div>
      <div class="sb-card-title">UniFi Networking</div>
      <div class="sb-card-desc">Full UniFi stack setup with VLANs, AP configuration, and network segmentation.</div>
      <div style="margin-top:12px"><span class="sb-badge">Coming soon</span></div>
    </div>
    <div class="sb-card" style="opacity:0.6;pointer-events:none">
      <div class="sb-card-icon bl">🏠</div>
      <div class="sb-card-title">Home Assistant</div>
      <div class="sb-card-desc">Home automation, device integrations, and automation rules. Control your house from Docker.</div>
      <div style="margin-top:12px"><span class="sb-badge">Coming soon</span></div>
    </div>
  </div>
</div>


<!-- ═══════════════════════════════════════════════
     LINK CARD: Homelab Documented  (HTML card)
     Paste this as a separate HTML card at the end.
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-cards sb-stagger">

    <a href="/homelab/" class="sb-card sb-card-link">
      <div class="sb-card-icon or">🗂️</div>
      <div class="sb-card-title">All Active Projects</div>
      <div class="sb-card-desc">Every service running in the lab with status indicators, descriptions, and guide links.</div>
      <div style="margin-top:12px;color:var(--orange);font-size:13px">View projects →</div>
    </a>

    <a href="https://homelabdocumented.com" class="sb-card sb-card-link" target="_blank" rel="noopener">
      <div class="sb-card-icon te">📚</div>
      <div class="sb-card-title">Homelab Documented</div>
      <div class="sb-card-desc">The full reference site — runbooks, network diagrams, configs, and setup notes for the entire lab.</div>
      <div style="margin-top:12px;color:var(--teal);font-size:13px">homelabdocumented.com ↗</div>
    </a>

  </div>
</div>
