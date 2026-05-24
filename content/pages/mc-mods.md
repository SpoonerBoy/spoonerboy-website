---
title: Spoonerpack Mods and Resource Packs
slug: mc-mods
template: page-mc-mods
custom_excerpt: Download the SpoonerPack modpack, resource packs, and shader packs, then connect to playmc.spoonerboy.com.
---

<!--
  HOW TO USE THIS FILE
  =====================
  1. Ghost Admin → Pages → New page (or edit existing)
  2. Title: Spoonerpack Mods and Resource Packs
  3. URL slug: mc-mods
  4. Template: page-mc-mods

  Downloads are built into page-mc-mods.hbs and served from assets/spoonerpack/.
  To update mods or resource packs: replace files in assets/spoonerpack/, rebuild, re-upload theme.

  Paste only the SETUP GUIDE below into Ghost Admin as a Markdown card.

  COPY BUTTON: Markdown backticks cannot render the Copy button. In step 7,
  keep the HTML <div class="sb-ip-box"> block — Ghost Markdown cards allow
  inline HTML. Or paste that block into a separate HTML card instead.
-->


<!-- ═══════════════════════════════════════════════
     SECTION: SETUP GUIDE  (Markdown card)
     ═══════════════════════════════════════════════ -->

## How to Join the Server with Mods

If you want to play with mods, please follow these steps carefully!

### 1. Install Fabric

- Download the Fabric Installer from: https://fabricmc.net/use/installer/
- Click **Download for Windows** and run the installer.
- Select **Minecraft Version 26.1.2** and choose the latest loader version.
- Leave the install location as the default and make sure "Create profile" is checked.
- Click **Install**.

### 2. Add the Mods

- Download **SpoonerPack Mods** from the cards at the top of this page.
- Press `Win + R`, type `%appdata%\.minecraft`, and hit Enter.
- Open the `mods` folder. (If it doesn't exist, create a new folder and name it exactly `mods`).
- Extract/place all the downloaded mod `.jar` files from the zip into this folder.
- This pack includes **Sodium** and **Iris** — both are required if you want to use shaders.

### 3. Add Resource Packs (Optional)

- Download **Fresh Animations** and **Round Trees** from the Resource Packs section.
- Place the `.zip` files into your `resourcepacks` folder (do not extract).
- In-game: **Options → Resource Packs** → move them to the right side and enable them.
- Put **Fresh Animations** above **Round Trees** if using both.

### 4. Add Shaders (Optional)

- Download **Complementary Reimagined** from the Shader Packs section.
- Place the `.zip` file into your `shaderpacks` folder (do not extract).
- Launch Minecraft with the **fabric-loader-26.1.2** profile first so Iris and Sodium are loaded.
- In-game: **Options → Video Settings → Shader Packs** → select **Complementary Reimagined** → click **Apply**.
- If you don't see Shader Packs, make sure both **Iris** and **Sodium** are installed in your `mods` folder.

### 5. Optimized Settings

These settings give a good balance of visuals and performance on most PCs:

**Sodium (Options → Video Settings):**
- Render Distance: **12–16 chunks** (lower if FPS drops)
- Simulation Distance: **8–10 chunks**
- Entity Distance: **80–100%**
- Graphics: **Fast** or **Fancy** — Fancy works fine with Sodium on most systems

**Iris / Complementary Reimagined (Options → Video Settings → Shader Packs → gear icon):**
- Open the **Shader Pack Settings** for Complementary Reimagined
- Set **Performance Profile** to **Performance** or **Medium** for weaker PCs
- Set **Shadow Quality** to **Medium** or **Low** if needed
- Turn **Volumetric Fog** off if FPS is still low
- Use **Medium** or **High** profile if you have a dedicated GPU and want better visuals

**General tips:**
- Close other heavy apps while playing with shaders enabled
- Lower render distance before turning down shader quality — it helps the most
- Shaders are optional — the server works fine without them

### 6. Launch the Game

- Open your Minecraft Launcher.
- Click the drop-down menu next to the "Play" button (bottom left) and select the **fabric-loader-26.1.2** profile.
- Click **Play**.

### 7. Connect to the Server

- Click **Multiplayer**, then **Add Server**.
- **Server Name:** SpoonerCraft (or whatever you prefer)
- **Server Address:**

<!-- HTML — paste this block in Ghost Admin (Markdown cards support inline HTML) -->
<div class="sb-ip-box">
  <code>playmc.spoonerboy.com</code>
  <button type="button" class="sb-copy-btn" data-copy="playmc.spoonerboy.com">Copy</button>
</div>

- Join the server and have fun!
