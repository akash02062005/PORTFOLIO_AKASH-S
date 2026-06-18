// =====================================================================
//  Central content for the portfolio. Edit text here — UI updates itself.
// =====================================================================

export const profile = {
  name: 'Akash S',
  // Role-agnostic hero headline (no single job title)
  headline: 'I build intelligent products that think, learn and ship.',
  tagline:
    'From LLM-powered platforms and deep-learning models to full-stack SaaS — I turn research-grade AI into real, deployed software.',
  location: 'Madurai, Tamil Nadu, India',
  email: 's.akash02062005@gmail.com',
  phone: '+91 86958 33328',
  cgpa: '8.32 / 10',
  availability: 'Open to internships & new-grad roles · 2027',
  socials: {
    github: 'https://github.com/akash02062005',
    linkedin: 'https://www.linkedin.com/in/akash-s-3ab29828a',
    email: 'mailto:s.akash02062005@gmail.com',
  },
  // Competitive-programming / coding profiles
  codingProfiles: [
    { name: 'LeetCode', handle: 'MgIZ4ijJEc', url: 'https://leetcode.com/u/MgIZ4ijJEc/', color: '#f59e0b' },
    { name: 'HackerRank', handle: 's_akash02062005', url: 'https://www.hackerrank.com/profile/s_akash02062005', color: '#22c55e' },
    { name: 'CodeChef', handle: 'akash02062005', url: 'https://www.codechef.com/users/akash02062005', color: '#b45309' },
  ],
  // Rotating descriptors under the hero name
  roles: [
    'AI / LLM Engineer',
    'Machine Learning Engineer',
    'Full-Stack (MERN) Developer',
    'Hackathon Winner',
    'Generative AI Builder',
  ],
}

// Role-tailored résumés. PDFs live in  public/resumes/<file>.pdf
export const resumes = [
  {
    role: 'AI Developer',
    desc: 'LLM apps, RAG pipelines & generative-AI products.',
    file: '/resumes/Akash_S_AI_Developer.pdf',
    icon: 'brain',
    accent: '#8b5cf6',
  },
  {
    role: 'Machine Learning Engineer',
    desc: 'Deep learning, model training & deployment.',
    file: '/resumes/Akash_S_Machine_Learning_Engineer.pdf',
    icon: 'cpu',
    accent: '#ec4899',
  },
  {
    role: 'Full-Stack Developer',
    desc: 'MERN, REST/FastAPI & end-to-end web apps.',
    file: '/resumes/Akash_S_Full_Stack_Developer.pdf',
    icon: 'layers',
    accent: '#22d3ee',
  },
  {
    role: 'Software Development Engineer',
    desc: 'DSA, system design & scalable backends.',
    file: '/resumes/Akash_S_Software_Development_Engineer.pdf',
    icon: 'terminal',
    accent: '#34d399',
  },
  {
    role: 'UI / UX Designer',
    desc: 'Figma, design systems & prototyping.',
    file: '/resumes/Akash_S_UI_UX_Designer.pdf',
    icon: 'palette',
    accent: '#f59e0b',
  },
  {
    role: 'General — Computer Science',
    desc: 'A balanced, all-round CS profile.',
    file: '/resumes/Akash_S_General_CS.pdf',
    icon: 'file',
    accent: '#3b82f6',
  },
]

export const about = {
  // Photo: drop your headshot at  public/akash-photo.jpg  (or .png and update src in About.jsx)
  photo: '/akash-photo.jpg',
  summary: [
    'I’m Akash — a Computer Science engineer (CGPA 8.32) who lives at the intersection of artificial intelligence and product engineering. I don’t just train models; I ship them as scalable services people can actually use.',
    'My work spans LLM applications and RAG pipelines, multi-modal deep learning, computer vision, and end-to-end MERN platforms with real-time APIs, auth and payments. I’ve put GPT-4o, Gemini, Claude, BioGPT and custom PyTorch models into production behind FastAPI and React.',
    'Most recently I led my team to 1st place at Hackwise 2.0 — beating 1,000+ teams — and I’m continually building ambitious projects in generative AI, healthcare ML and developer tooling.',
  ],
  facts: [
    { label: 'Hackathons won', value: '1st / 1,000+' },
    { label: 'Production projects', value: '9' },
    { label: 'FastAPI endpoints shipped', value: '50+' },
    { label: 'CGPA', value: '8.32' },
  ],
}

export const projects = [
  {
    id: 'drugdisco',
    name: 'DrugDisco AI',
    type: 'Drug Discovery SaaS',
    category: 'ai',
    image: '/projects/drugdisco.svg',
    repo: 'https://github.com/akash02062005/DRUG-DISCO-AI-',
    demo: '',
    color: '#22d3ee',
    blurb:
      'End-to-end AI drug-discovery platform: molecular property/ADMET prediction with ChemBERTa-77M and a BioGPT biomedical chatbot trained on 15M PubMed abstracts.',
    highlights: [
      'RDKit BRICS de-novo molecule generation, Tanimoto similarity search & drug–target interaction prediction',
      '30+ FastAPI endpoints with JWT + OTP auth, 3D molecule visualization and subscription billing',
      'Unified 6 external APIs (PubChem, PubMed, ChEMBL, UniProt) behind a fault-tolerant service layer',
    ],
    stack: ['ChemBERTa', 'BioGPT', 'FastAPI', 'React', 'RDKit', '3Dmol.js'],
    tags: ['GenAI', 'Healthcare', 'SaaS'],
  },
  {
    id: 'neurosense',
    name: 'NeuroSense AI',
    type: 'Multi-Modal Wellness',
    category: 'ai',
    image: '/projects/neurosense.svg',
    repo: 'https://github.com/akash02062005/NEUROSENSE-',
    demo: '',
    color: '#8b5cf6',
    blurb:
      'A cross-modal transformer fusing speech, facial, text and physiological signals (Wav2Vec2, ViT, RoBERTa) into a real-time wellness score at <600ms latency.',
    highlights: [
      'CBT-informed wellness chatbot using LangChain RAG over a vector database, with crisis detection',
      '4-head / 2-layer cross-modal transformer + GRU temporal tracking, ONNX/FP16 optimized',
      'Full SHAP/LIME explainability per prediction, streamed live over WebSockets',
    ],
    stack: ['PyTorch', 'Transformers', 'RAG', 'Next.js', 'TypeScript', 'FastAPI'],
    tags: ['Deep Learning', 'Multimodal', 'Explainable AI'],
  },
  {
    id: 'lancera',
    name: 'Lancera',
    type: 'AI Freelancer Marketplace · Hackwise 2.0 Winner',
    category: 'ai',
    image: '/projects/lancera.svg',
    repo: 'https://github.com/akash02062005/LANCERA',
    demo: '',
    color: '#34d399',
    blurb:
      'The platform that won Hackwise 2.0 among 1,000+ teams — an AI freelancer marketplace that auto-generates projects, skill-vetting quizzes and smart bid feedback.',
    highlights: [
      'LLM-driven skill-vetting, weighted recommendation scoring and automated AI quiz generation',
      'Real-time reverse-auction engine over Socket.IO with JWT / bcrypt / OTP auth',
      'Razorpay payments on a responsive, animated React + Node.js + MongoDB stack',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'LLM', 'Razorpay'],
    tags: ['Award Winner', 'Full-Stack', 'GenAI'],
    award: true,
  },
  {
    id: 'aifinance',
    name: 'AI Finance Management',
    type: 'Multi-LLM Fintech SaaS',
    category: 'ai',
    image: '/projects/aifinance.svg',
    repo: 'https://github.com/akash02062005/AI-FINANCE-MANAGEMENT-SYSTEM',
    demo: '',
    color: '#3b82f6',
    blurb:
      'Full-stack SaaS with a multi-LLM financial advisor (Gemini/Claude/HuggingFace), Prophet forecasting, anomaly detection and 95%+ auto-categorization.',
    highlights: [
      '22 REST modules on Node.js/Express, JWT auth, Socket.IO real-time alerts and Redis caching',
      'Python ML microservice with PyOD fraud detection, containerized via Docker Compose',
      'Stripe / Razorpay billing consumed by a React + Vite dashboard',
    ],
    stack: ['MERN', 'FastAPI', 'Prophet', 'PyOD', 'Docker', 'Redis'],
    tags: ['Fintech', 'ML', 'SaaS'],
  },
  {
    id: 'radisynx',
    name: 'RadiSynx',
    type: 'Medical Image Synthesis',
    category: 'ai',
    image: '/projects/radisynx.svg',
    repo: 'https://github.com/akash02062005/RadiSynx',
    demo: '',
    color: '#ec4899',
    blurb:
      'MRI→CT synthesis pipeline chaining an Attention Residual U-Net, a Pix2Pix GAN and a DDPM diffusion enhancement on DICOM/NIfTI volumes.',
    highlights: [
      'Evaluated with SSIM, PSNR, MAE and Dice; Grad-CAM explainability',
      'Real-time WebSocket slice streaming for interactive review',
      'Generative diffusion enhancement for sharper synthesized scans',
    ],
    stack: ['Attention U-Net', 'Pix2Pix GAN', 'DDPM', 'PyTorch', 'FastAPI', 'Next.js'],
    tags: ['Computer Vision', 'Generative', 'Healthcare'],
  },
  {
    id: 'cyberthreat',
    name: 'Cyber Threat Analyzer',
    type: 'AI Threat-Detection Expert System',
    category: 'ai',
    image: '/projects/cyberthreat.svg',
    repo: 'https://github.com/akash02062005/CYBER-THREAT-ANALYZER',
    demo: '',
    color: '#ef4444',
    blurb:
      'An AI-powered, rule-based expert system for real-time cybersecurity threat detection — a forward-chaining inference engine that scores telemetry, ranks severity and recommends mitigations, with an AI security advisor and live CVE/news intel.',
    highlights: [
      'Forward-chaining inference engine over 7 telemetry fact types and 6 operators with confidence scoring',
      'Custom multi-condition rule builder, severity rollup (Critical→Low) and 7 pre-configured detection rules',
      'AI security advisor chatbot plus CVE lookup, threat intelligence search and a live security news feed',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Inference Engine', 'Zod', 'shadcn/ui'],
    tags: ['Cybersecurity', 'Expert System', 'AI'],
  },
  {
    id: 'orderstream',
    name: 'OrderStream',
    type: 'Full-Stack Order Management System',
    category: 'web',
    image: '/projects/orderstream.svg',
    repo: 'https://github.com/akash02062005/ORDER-MANAGEMENT-SYSTEM-',
    demo: '',
    color: '#60a5fa',
    blurb:
      'A premium, secure enterprise-grade OMS on Spring Boot 3 + React (Vite): multi-role RBAC, Google/GitHub OAuth2, passwordless magic links and Razorpay checkout with MongoDB persistence.',
    highlights: [
      'Multi-channel auth — JWT sessions, OTP email verification, magic links and Google/GitHub OAuth2',
      'Granular RBAC across Admin / Manager / Customer with endpoint-level authorization',
      'Razorpay payments with webhook-verified checkout plus real-time sales & order analytics',
    ],
    stack: ['Spring Boot', 'Java', 'React', 'MongoDB', 'OAuth2', 'Razorpay'],
    tags: ['Full-Stack', 'Spring Boot', 'Payments'],
  },
  {
    id: 'studenthub',
    name: 'Student Management Hub',
    type: 'Real-Time Academic Dashboard',
    category: 'web',
    image: '/projects/studenthub.svg',
    repo: 'https://github.com/akash02062005/STUDENT-MANAGEMENT-SYSTEM',
    demo: '',
    color: '#f59e0b',
    blurb:
      'A full-stack, real-time academic intelligence dashboard on a Spring Boot backend and React (Vite) frontend, streaming live updates over Server-Sent Events with an optional MongoDB fallback.',
    highlights: [
      'Server-push SSE pipeline instantly syncing grades, attendance and activity across all sessions',
      'Smart in-memory database fallback that auto-seeds realistic data when MongoDB is offline',
      'Granular RBAC plus a predictive engine with live GPA/CGPA tracking and placement analytics',
    ],
    stack: ['Spring Boot', 'Java', 'React', 'MongoDB', 'SSE', 'Vite'],
    tags: ['Full-Stack', 'Real-Time', 'Analytics'],
  },
  {
    id: 'auracare',
    name: 'Aura Care',
    type: 'Mental-Wellness Platform',
    category: 'web',
    image: '/projects/auracare.svg',
    repo: 'https://github.com/akash02062005/AURA-CARE',
    demo: '',
    color: '#2dd4bf',
    blurb:
      'A comprehensive mental-wellness platform with an AI-guided self-care chatbot, secure therapy scheduling and community engagement — React + Tailwind on a Node/Express + PostgreSQL backend.',
    highlights: [
      'AI wellness chatbot for 24/7 supportive guidance, with task tracking and a resource center',
      'Therapy booking system plus a community forum, backed by Passport.js secure sessions',
      'Type-safe PostgreSQL via Drizzle ORM with Socket.IO real-time chat and notifications',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Drizzle', 'Socket.IO'],
    tags: ['Full-Stack', 'Healthcare', 'Real-Time'],
  },
  {
    id: 'animeportal',
    name: 'Anime Portal',
    type: 'MERN Anime Discovery App',
    category: 'web',
    image: '/projects/animeportal.svg',
    repo: 'https://github.com/akash02062005/ANIME-WEBSITE',
    demo: '',
    color: '#c084fc',
    blurb:
      'An ultra-fast MERN anime portal acting as an AniList GraphQL proxy, wrapped in a glassmorphic “Otaku Ultra” UI with cosmic gradients, neon aesthetics and a fully Dockerized setup.',
    highlights: [
      'AniList GraphQL proxy backend with LRU caching, compression and resilient error handling',
      'JWT authentication with persistent favorites and reviews stored in MongoDB',
      'Advanced search, recommendation filters and platform tagging — Dockerized with docker-compose',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'GraphQL', 'Docker'],
    tags: ['Full-Stack', 'MERN', 'GraphQL'],
  },
  {
    id: 'fitcare',
    name: 'FitCare',
    type: 'AI Fitness & Wellness Platform',
    category: 'web',
    image: '/projects/fitcare.svg',
    repo: 'https://github.com/akash02062005/FITCARE-',
    demo: '',
    color: '#f97316',
    blurb:
      'A full-stack MERN fitness & wellness platform with an AI diet-recommendation engine, mood-based workout music, fitness-personality quizzes, weekly challenges and a community blog — built on React 19 and Express 5.',
    highlights: [
      'Personalized diet engine across Keto/Vegan/Indian/Mediterranean plans with age & goal adaptation',
      'Mood-based music (50+ tracks to Spotify/YouTube), 40+ quiz archetypes and 10 weekly challenge tracks',
      'BMI / step / calorie tools, community blog CRUD and Nodemailer email confirmations on MongoDB',
    ],
    stack: ['React 19', 'Express 5', 'MongoDB', 'Mongoose', 'Framer Motion', 'Bootstrap'],
    tags: ['Full-Stack', 'MERN', 'Wellness'],
  },
]

// Project category tabs (id matches each project's `category`)
export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'Machine Learning' },
  { id: 'web', label: 'Full-Stack Development' },
]

export const experience = [
  {
    role: 'Java Developer Intern',
    org: 'Alfido Tech',
    date: 'Jul 2025 · Remote',
    points: [
      'Built a Scanner-based CLI calculator with switch-case operator routing, printf decimal formatting and a divide-by-zero safety shield',
      'Modeled an OOP payment simulator using inheritance & polymorphism (Credit/Debit/UPI) and a BufferedReader CSV record parser with try-with-resources exception handling',
    ],
    cert: '/certs/alfido-java-intern.png',
  },
  {
    role: 'Machine Learning Intern',
    org: 'Digital Blinc',
    date: 'Jun 2025 · Remote',
    points: [
      'Built an NLP sentiment-analysis model classifying customer feedback at 85% accuracy',
      'Engineered tokenization / TF-IDF pipelines and evaluated with precision, recall & F1',
    ],
    cert: '/certs/digitalblinc-intern.png',
  },
  {
    role: 'Machine Learning Intern',
    org: 'Jyesta Corporate Entity',
    date: 'Apr–Jun 2025 · Remote',
    points: [
      'Built an NLP sentiment-analysis model classifying customer feedback at 85% accuracy',
      'Engineered tokenization / TF-IDF pipelines and evaluated with precision, recall & F1',
    ],
    cert: '/certs/jyesta-intern.png',
  },
  {
    role: 'Web Development Intern',
    org: 'Cognifyz Technologies',
    date: 'Feb–Mar 2025 · Remote',
    points: [
      'Built four frontend tasks — a business page, a JS-driven interactive page, a Bootstrap 5 fitness portal and a media-query responsive landing page',
      'Added client-side JS for time-aware greetings, theme switching and live calculation, plus a Bootstrap carousel and collapsible FAQ accordion',
    ],
    cert: '/certs/cognifyz-intern.png',
  },
  {
    role: 'Python Developer Intern',
    org: 'OctaNet Services',
    date: 'Apr–May 2024 · Remote',
    points: [
      'Built a terminal ATM simulator in Python with secure credential authentication, withdrawals, deposits and inter-account transfers',
      'Implemented loop-based menu routing, balance validation and a session transaction ledger',
    ],
    cert: '/certs/octanet-python-intern.png',
  },
  {
    role: 'Web Development Intern',
    org: 'OctaNet Services',
    date: 'Apr–May 2024 · Remote',
    points: [
      'Built a responsive Netflix landing-page clone with a dark hero overlay, fixed navbar and CTA sign-up form',
      'Designed a personal portfolio website using HTML5, CSS3 and Flexbox with responsive cards and custom theming',
    ],
    cert: '/certs/octanet-web-intern.png',
  },
]

export const skills = [
  {
    group: 'AI / ML & GenAI',
    color: '#8b5cf6',
    items: [
      'PyTorch', 'TensorFlow', 'HuggingFace', 'scikit-learn', 'LangChain', 'RAG',
      'GPT-4o', 'Gemini', 'Claude', 'BioGPT', 'Llama 3', 'Fine-tuning', 'AI Agents',
      'Transformers', 'GANs', 'Diffusion', 'CNN / RNN / GRU',
    ],
  },
  {
    group: 'NLP & Computer Vision',
    color: '#ec4899',
    items: ['NLP', 'NLTK', 'spaCy', 'OpenCV', 'YOLO', 'ViT', 'Wav2Vec2', 'SHAP / LIME'],
  },
  {
    group: 'Full-Stack & Web',
    color: '#22d3ee',
    items: [
      'React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind', 'Vite', 'Framer Motion',
      'Node.js', 'Express', 'FastAPI', 'Socket.IO', 'REST APIs',
    ],
  },
  {
    group: 'Data, DevOps & Cloud',
    color: '#34d399',
    items: [
      'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'ChromaDB', 'Pinecone',
      'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Vercel', 'Linux', 'Streamlit',
    ],
  },
  {
    group: 'Languages',
    color: '#3b82f6',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'],
  },
]

export const achievements = [
  {
    title: '1st Place — Hackwise 2.0',
    detail: 'National AI hackathon · KVG College of Engineering',
    year: '2025',
    icon: 'trophy',
  },
  {
    title: 'Top 5 Finalist — Codethon',
    detail: 'Rathnam College, Coimbatore',
    year: '2026',
    icon: 'medal',
  },
  {
    title: 'Academic Excellence',
    detail: 'B.E. CSE · CGPA 8.32 / 10',
    year: '2023–27',
    icon: 'star',
  },
]

export const certifications = [
  { name: 'Generative AI Fundamentals', issuer: 'Microsoft' },
  { name: 'Generative AI Foundations', issuer: 'AWS' },
  { name: 'Agentic Automation Professional', issuer: 'UiPath' },
  { name: 'Full-Stack MERN Development', issuer: 'Innovel' },
  { name: 'Introduction to UI/UX Design', issuer: 'NASSCOM' },
  { name: 'Joy of Computing in Python', issuer: 'NPTEL' },
]

export const education = {
  school: 'PSNA College of Engineering & Technology',
  degree: 'B.E. Computer Science & Engineering',
  place: 'Dindigul, Tamil Nadu',
  date: '2023 – 2027',
  cgpa: '8.32 / 10',
  coursework: ['DSA', 'OOP', 'DBMS', 'AI / ML', 'Operating Systems', 'System Design'],
}

// School education (before college)
export const schooling = {
  name: 'Lakshmi School',
  place: 'Veerapanchan, Karuppayurani, Madurai',
  records: [
    { level: 'Class XII', board: 'ISC', boardFull: 'Indian School Certificate', score: '446 / 500', percent: '89.20%' },
    { level: 'Class X', board: 'ICSE', boardFull: 'Indian Certificate of Secondary Education', score: '554 / 600', percent: '92.33%' },
  ],
}

// Hobbies & interests (edit freely)
export const hobbies = [
  { name: 'Football', color: '#34d399' },
  { name: 'Competitive Programming', color: '#22d3ee' },
  { name: 'Chess & Puzzles', color: '#8b5cf6' },
  { name: 'Building Side-Projects', color: '#f59e0b' },
  { name: 'Tech Blogging', color: '#ec4899' },
]

// Languages known
export const languages = [
  { name: 'Tamil', level: 'Native', pct: 100, color: '#34d399' },
  { name: 'English', level: 'Fluent', pct: 90, color: '#22d3ee' },
  { name: 'Hindi', level: 'Intermediate', pct: 65, color: '#f59e0b', note: 'DBHPS — Prathmik · Madhyama · Rashtrabhasha' },
]
