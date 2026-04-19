# Global Grounds Coffee

Speculative website for Global Grounds Coffee in La Crosse, Wisconsin. A locally-owned coffee and tea house on State Street, founded 2010, now owned by Thippi Luangpraseuth (since April 2021, when she merged her Dim Sum Tea Shop into the coffee shop).

Built by [NeonFrame Web Design](https://neonframewebdesign.com).

## Live

Deployed via GitHub Pages: https://neonframewebdev.github.io/global-grounds-coffee/

## Stack

Pure HTML / CSS / JS. No build step. Deploys directly to GitHub Pages.

## Local development

```bash
python3 -m http.server 8765
# visit http://localhost:8765/
```

## Tests

```bash
./tests/check.sh
```

Checks asset path integrity, internal anchors, alt text, required meta, nav consistency, image headers, CSS/JS syntax, and enforces a no-em-dashes or en-dashes rule across all source files.

## Brand system

Palette derived directly from their real storefront signage and interior photos (the cursive "global" is on the sign and on every mug):

- Primary: `#5B4638` (warm chocolate brown, the sign background)
- Secondary: `#EADECA` (cream, the cursive lettering and mug body)
- Accent: `#B95839` (warm terracotta, the brick below the sign)
- Supporting: `#6F7D48` (plant green, their hanging plants)

Typography:

- Display: Playfair Display (serif that echoes the script wordmark)
- Body: Inter
- Script accent: Yellowtail (for "global" in the wordmark and the tagline)
- Mono: IBM Plex Mono (eyebrows)

## Asset sources

Every image is from a real, public Global Grounds Coffee property. No stock, no AI. See [IMAGE_CREDITS.md](./IMAGE_CREDITS.md).
