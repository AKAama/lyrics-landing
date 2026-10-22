# lyrics-landing

Source for the promo page of [lyrics-display](https://github.com/AKAama/lyrics-display) (a macOS menu bar lyrics app), served at https://lyrics.ismyh.cn/.

This source was rebuilt from the production bundle (`assets/index-CICnlmup.js` / `assets/index-CUwwI-pF.css`) after the original was lost. The rendered page matches the live site pixel for pixel, except for three deliberate text fixes (see "Differences" below).

## Stack
Vite 7, React 19, TypeScript, `animal-island-ui` (global stylesheet only: Nunito and Noto Sans SC fonts plus design tokens).
The live bundle contained no `animal-island-ui` React components. The whole page is plain JSX styled by `src/styles/app.css`, which is the app CSS copied verbatim from the bundle.

## Layout (in order)
`src/components/`: Nav → Hero → Features (3 alternating rows) → Privacy → Reviews (carousel) → Faq (accordion) → Install (brew CTA) → Footer.
All copy is in `src/content.ts` (reviews, FAQ, links, brew command) or inline in the components.

## Develop
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + build to dist/
npm run preview    # serve dist on :4173
```

## Deploy
The live site is static files served by nginx from `/var/www/lyrics-display` on 47.96.83.175. Build with `base: './'`, so asset URLs are relative.
```bash
npm run build
rsync -avz --delete -e "ssh -i ~/.ssh/id_ed25519_aliyun47" dist/ root@47.96.83.175:/var/www/lyrics-display/
# no nginx reload needed for static file changes
```
Before you use `--delete`, back up the current directory on the server.

## Differences from the lost build
- Fixed literal backslashes that rendered on the live page: "We\'ll show the lyrics." became "We'll", and "isn\'t perfect" became "isn't".
- Restored the missing "©" in the footer: " 2026 AKAama · MIT License" became "© 2026 AKAama · MIT License".
- `animal-island-ui` is now ^2.3.0. The old build used an earlier release whose CSS also referenced footer-sea, footer-tree, critterpedia and similar images. Copies of those images are in `src/assets/animal-island-legacy/` for reference. The page never displayed them.
