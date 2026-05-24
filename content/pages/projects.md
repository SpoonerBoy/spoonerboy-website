---
title: Projects & Repos
slug: projects
template: page-projects
custom_excerpt: Everything I've built, documented, and open-sourced. Configs, guides, and homelab tooling.
---

<!--
  HOW TO USE THIS FILE
  =====================
  - The page hero and live GitHub repo grid are in page-projects.hbs (no changes needed there).
  - The featured/pinned projects below appear ABOVE the live GitHub grid.
  - Paste as an HTML card in Ghost Admin → Pages → Projects.
  - Add or remove sb-card blocks to feature different projects.
-->


<!-- ═══════════════════════════════════════════════
     SECTION: FEATURED PROJECTS  (HTML card)
     ═══════════════════════════════════════════════ -->
<div class="sb-section">
  <div class="sb-section-label sb-reveal">Featured</div>
  <div class="sb-line-reveal sb-reveal sb-reveal-d1"><span><h2 class="sb-section-title">Pinned projects.</h2></span></div>
  <p class="sb-section-sub sb-reveal sb-reveal-d2">Guides and configs I've published for the homelab community.</p>
  <div class="sb-cards sb-stagger sb-reveal sb-reveal-d3">

    <div class="sb-card">
      <div class="sb-card-icon gr">📦</div>
      <div class="sb-card-title">AMP S3 Backup Guide</div>
      <div class="sb-card-desc">A complete guide to setting up automated S3 backups for your AMP-managed Minecraft server using AWS IAM and Cloud Backups.</div>
      <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap">
        <span class="sb-badge teal">Guide</span>
        <span class="sb-badge blue">Minecraft</span>
        <span class="sb-badge">AWS S3</span>
      </div>
      <div style="margin-top:16px"><a class="sb-btn sb-btn-ghost" href="https://github.com/SpoonerBoy" target="_blank" rel="noopener" style="font-size:13px;padding:8px 18px">View on GitHub →</a></div>
    </div>

    <div class="sb-card">
      <div class="sb-card-icon bl">🏠</div>
      <div class="sb-card-title">Homepage Config</div>
      <div class="sb-card-desc">My Homepage Dashboard configuration including service widgets, custom CSS, and environment variable setup for Portainer Stacks.</div>
      <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap">
        <span class="sb-badge teal">Config</span>
        <span class="sb-badge blue">Homelab</span>
        <span class="sb-badge">Docker</span>
      </div>
      <div style="margin-top:16px"><a class="sb-btn sb-btn-ghost" href="https://github.com/SpoonerBoy/homepage-config" target="_blank" rel="noopener" style="font-size:13px;padding:8px 18px">View on GitHub →</a></div>
    </div>

  </div>
</div>
