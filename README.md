# IntakeAI Landing Page

Premium static landing page for **IntakeAI**, a done-for-you AI patient reactivation service for naturopathic clinics in Ontario/GTA.

## Run locally

Option 1:
```bash
python3 -m http.server 3000
```

Option 2:
```bash
npx serve .
```

Then open `http://localhost:3000`.

## File structure

- `index.html` — full landing page structure and conversion copy
- `styles.css` — color system, layout, responsive UI, and component styling
- `script.js` — mobile nav toggle, ROI calculator logic, and reveal interactions
- `AGENTS.md` — rules and workflow guidance for future agents
- `README.md` — project guide and deployment notes

## Edit CTA links

All CTA buttons currently point to:
`https://cal.com/suthashan/15min`

To change CTA destination, search and replace this URL in `index.html`.

## Deployment

### Netlify
1. Create a new site from this repository.
2. Build command: _none_. Publish directory: repository root.
3. Deploy.

### Vercel
1. Import project.
2. Framework preset: **Other**.
3. Build command: _none_. Output directory: `.`
4. Deploy.

### GitHub Pages
1. Push repo to GitHub.
2. In **Settings → Pages**, deploy from `main` branch root.
3. Wait for Pages URL to go live.

## Manual pre-launch checklist

- Confirm every CTA links to your live calendar.
- Replace placeholder contact email if needed.
- Verify mobile nav, FAQ, and calculator behavior on real devices.
- Run a final copy review for legal/compliance comfort.
- Confirm no fake testimonials/logos/case studies were added.
- Validate contrast and keyboard navigation.
- Record a 2-minute Loom walkthrough for outreach.
