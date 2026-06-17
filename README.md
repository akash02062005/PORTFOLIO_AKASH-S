# Akash S — AI Neural Universe Portfolio

![Portfolio Preview](./public/favicon.svg)

An immersive, **3D** and **AI-powered** personal portfolio built with **React**, **Vite**, **React Three Fiber**, and **Framer Motion**. It serves as an interactive experience, featuring a live neural-network background, floating 3D avatars, an interactive project galaxy, and a built-in offline AI assistant tailored for recruiters and technical visitors.

---

## 🚀 Features

- **🧠 Live Neural-Network Background:** Dynamic, interactive particle fields that respond to cursor movements, simulating a neural network.
- **🤖 AI Guide Avatar:** A floating 3D companion that guides visitors through the portfolio experience.
- **💬 Offline AI Assistant:** A built-in, lightning-fast "AI Assistant" that answers recruiter questions about Akash's skills, projects, and availability — purely on the client side, requiring zero API keys or backend servers.
- **🌌 Project Galaxy:** Clickable 3D "planets" representing major projects, offering a unique spatial navigation experience.
- **🏆 Achievement Holograms:** Animated 3D cards and components showcasing hackathon wins (e.g., 1st Place at Hackwise 2.0), certifications, and academic excellence.
- **⚡ High Performance:** Optimized WebGL rendering and data-driven React components ensure smooth 60fps animations.

---

## 🛠️ Tech Stack

- **Core:** React 18, Vite 5
- **3D Rendering:** React Three Fiber, Three.js, `@react-three/drei`
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS, PostCSS
- **Icons:** Lucide React

---

## 📁 Project Structure

The entire portfolio is highly modular and **data-driven**, making it extremely easy to update without touching complex UI code.

```text
src/
├── data/
│   ├── profile.js        # Centralized data: Bio, Skills, Projects, Experience, Resumes
│   ├── knowledge.js      # Knowledge base for the built-in offline AI Assistant
│   ├── certificates.js   # Certification links and metadata
│   ├── events.js         # Hackathons, Workshops, Coding events
│   └── talks.js          # Presentations and speaking engagements
├── components/
│   ├── three/            # 3D Components (NeuralBackground, AvatarGuide, ProjectPlanet, etc.)
│   ├── sections/         # UI Sections (Hero, About, Projects, Hackathons, Skills, Research, Contact)
│   ├── ui/               # Reusable UI elements (AIAssistant, Buttons, TiltCard, SectionTitle)
│   ├── Navbar.jsx        # Navigation bar
│   ├── Loader.jsx        # Initial loading screen
│   └── CustomCursor.jsx  # Interactive mouse cursor
├── App.jsx               # Main Layout and Routing
├── main.jsx              # React Entry Point
└── index.css             # Global Styles (Tailwind)
```

---

## ⚙️ Editing Content

Updating the portfolio is as simple as editing JSON/JS objects. You do not need to modify the 3D or React components directly.

1. **Profile Data (`src/data/profile.js`)**:
   - Contains all your bio information, skills, projects, experience, education, and social links.
   - You can also update the `resumes` array to link to different role-tailored PDF resumes (e.g., AI Developer, Full-Stack Developer).

2. **AI Knowledge Base (`src/data/knowledge.js`)**:
   - Add new questions and answers that recruiters might ask. The offline AI assistant will use this data to respond dynamically.

3. **Images & Assets (`public/`)**:
   - `public/akash-photo.jpg`: The main profile picture used in the About section.
   - `public/projects/`: SVG icons and preview images for projects.
   - `public/certs/`: Certification images and PDFs.
   - `public/resumes/`: Role-specific PDF resumes.

---

## 🚀 Quick Start (Local Development)

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akash02062005/PORTFOLIO_AKASH-S.git
   cd PORTFOLIO_AKASH-S
   ```

2. **Install dependencies:**
   Using npm (or pnpm/yarn):
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the portfolio.

4. **Build for production:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 🌐 Deployment

This project is optimized for fast, static deployment on platforms like Vercel, Netlify, or GitHub Pages.

**Deploying to Vercel (Recommended):**
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/) → **New Project** → Import the repository.
3. Vercel will auto-detect the **Vite** framework preset.
4. Click **Deploy**. (A `vercel.json` file is already included for custom routing and headers).

Alternatively, deploy via the Vercel CLI:
```bash
npm i -g vercel
vercel
```

---

*Designed and developed by Akash S. Open to internships and new-grad roles in AI/ML and Full-Stack Engineering (2027).*
