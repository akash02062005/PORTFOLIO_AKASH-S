# Akash S — AI Neural Universe Portfolio

An immersive 3D portfolio built with React, Vite, React Three Fiber and Framer Motion.
Features a live neural-network background, a floating "AI guide" avatar, a clickable
project galaxy, achievement holograms, a voice introduction, and a built-in offline AI
assistant that answers recruiter questions about Akash — no API key, no backend.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

Build for production:

```bash
npm run build
npm run preview
```

## Add your photo (important)

The About section shows a placeholder until you add your headshot. Drop your image at:

```
public/akash-photo.jpg
```

(If it's a PNG, save it as `public/akash-photo.png` and update the `photo` path in
`src/data/profile.js`.) The site picks it up automatically.

## Add your certificates (optional)

1. Put certificate images/PDFs in `public/certs/`.
2. In `src/data/profile.js`, add a `link` to any item in the `certifications` array.
3. The credential cards in `src/components/sections/Research.jsx` can then link out.

## Editing content

Everything is data-driven — edit text in one place:

- `src/data/profile.js` — bio, projects, skills, experience, achievements, education,
  certifications, social + coding profiles.
- `src/data/knowledge.js` — the answers the built-in AI assistant gives.

## Deploy to Vercel (free)

1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: **Vite** (auto-detected). Build: `npm run build`, output: `dist`.
4. Deploy. A `vercel.json` is already included.

You can also deploy straight from the CLI:

```bash
npm i -g vercel
vercel
```

## Tech stack

React 18 · Vite 5 · React Three Fiber · @react-three/drei · Three.js ·
Framer Motion · Tailwind CSS · lucide-react.

## Structure

```
src/
  data/         profile + AI knowledge base
  components/
    three/      NeuralBackground, AvatarGuide, ProjectPlanet
    sections/   Hero, About, Projects, Hackathons, Skills, Research, Contact
    ui/         SectionTitle, AIAssistant
    Navbar, Loader, CustomCursor
  App.jsx, main.jsx, index.css
```
