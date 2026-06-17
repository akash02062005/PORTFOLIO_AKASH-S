// =====================================================================
//  Offline "AI assistant" knowledge base.
//  A lightweight intent-matcher — no API key, no cost, works on Vercel.
//  Each entry: keywords (for matching) + answer. Best overlap wins.
// =====================================================================

export const suggestedQuestions = [
  'What is Akash best at?',
  'Tell me about the Hackwise win',
  'Which projects use LLMs?',
  'What’s his strongest project?',
  'Is he available to hire?',
  'What’s his tech stack?',
]

export const intro =
  "Hi! I'm Akash's AI assistant 🤖 — ask me anything about his projects, skills, experience or achievements. Try one of the suggestions below.";

export const knowledge = [
  {
    keywords: ['best', 'strength', 'good at', 'strongest skill', 'expert', 'specialty', 'specialise', 'specialize'],
    answer:
      "Akash's core strength is taking AI from research to production. He's strongest in LLM applications & RAG pipelines (GPT-4o, Gemini, Claude, BioGPT, LangChain) and deep learning (PyTorch transformers, GANs, diffusion) — then shipping them as scalable FastAPI services behind React/Next.js front-ends. In short: he both trains the model AND ships the product.",
  },
  {
    keywords: ['hackwise', 'win', 'won', 'award', 'first place', '1st', 'hackathon', 'lancera', 'prize'],
    answer:
      'At Hackwise 2.0 (April 2026), Akash and his team won 1st place overall among 1,000+ teams. They built Lancera — an AI freelancer marketplace that auto-generates projects, skill-vetting quizzes and smart bid feedback, with a real-time reverse-auction engine over Socket.IO, JWT/OTP auth and Razorpay payments on a React + Node.js + MongoDB stack.',
  },
  {
    keywords: ['llm', 'gpt', 'gemini', 'claude', 'generative', 'genai', 'rag', 'langchain', 'chatbot', 'agent'],
    answer:
      'Several projects use LLMs: DrugDisco AI (BioGPT biomedical chatbot on 15M PubMed abstracts), NeuroSense AI (LangChain RAG wellness chatbot with crisis detection), AI Finance (multi-LLM advisor across Gemini/Claude/HuggingFace), Lancera (LLM skill-vetting + quiz generation) and Growlify (an LLM farming agent). He works with GPT-4o, Gemini, Claude, BioGPT and Llama 3, plus fine-tuning and prompt engineering.',
  },
  {
    keywords: ['project', 'best project', 'favorite project', 'flagship', 'drugdisco', 'drug'],
    answer:
      "His flagship is DrugDisco AI — an end-to-end drug-discovery SaaS using ChemBERTa-77M for molecular/ADMET prediction and BioGPT for a biomedical chatbot, with RDKit de-novo molecule generation behind 30+ FastAPI endpoints. NeuroSense AI (a multi-modal wellness transformer at <600ms) and the award-winning Lancera are close seconds. Scroll to the Projects galaxy to explore them all.",
  },
  {
    keywords: ['neurosense', 'multimodal', 'multi-modal', 'wellness', 'emotion', 'mental'],
    answer:
      'NeuroSense AI is a multi-modal wellness system: a cross-modal transformer fusing speech (Wav2Vec2), facial (ViT), text (RoBERTa) and physiological signals into a real-time wellness score at <600ms. It includes a CBT-informed LangChain RAG chatbot, crisis detection and full SHAP/LIME explainability streamed over WebSockets.',
  },
  {
    keywords: ['radisynx', 'medical', 'image', 'gan', 'diffusion', 'mri', 'ct', 'vision', 'computer vision'],
    answer:
      'RadiSynx is a medical image-synthesis pipeline that turns MRI into CT scans by chaining an Attention Residual U-Net, a Pix2Pix GAN and a DDPM diffusion enhancement on DICOM/NIfTI volumes — evaluated with SSIM, PSNR, MAE and Dice, with Grad-CAM explainability and live WebSocket slice streaming.',
  },
  {
    keywords: ['finance', 'fintech', 'money', 'forecast', 'anomaly', 'fraud', 'prophet'],
    answer:
      'The AI Finance Management System is a full-stack fintech SaaS: a multi-LLM advisor, Prophet time-series forecasting, PyOD fraud/anomaly detection and 95%+ auto-categorization. It runs 22 REST modules on Node.js/Express with JWT auth, Socket.IO alerts, Redis caching and Stripe/Razorpay billing — all containerized via Docker Compose.',
  },
  {
    keywords: ['stack', 'tech', 'technology', 'tools', 'languages', 'framework', 'use'],
    answer:
      'Tech stack: Python, JavaScript/TypeScript, Java, C++, SQL. AI/ML — PyTorch, TensorFlow, HuggingFace, scikit-learn, LangChain, RAG. Web — React, Next.js, Node.js, Express, FastAPI, Socket.IO, Tailwind. Data/DevOps — MongoDB, PostgreSQL, Redis, ChromaDB, Pinecone, Docker, Kubernetes, CI/CD, Vercel.',
  },
  {
    keywords: ['experience', 'intern', 'internship', 'work', 'job history', 'companies'],
    answer:
      'Akash has interned as an ML Engineer at Digital Blinc (85%-accuracy NLP sentiment model) and Jyesta Corporate (predictive-maintenance, -15% downtime), a Java Developer at Alfido Tech, and a Python Developer at OctaNet Services — alongside winning national hackathons.',
  },
  {
    keywords: ['education', 'college', 'degree', 'cgpa', 'study', 'university', 'school', 'gpa'],
    answer:
      'Akash is pursuing a B.E. in Computer Science & Engineering at PSNA College of Engineering & Technology, Dindigul (2023–2027) with a CGPA of 8.32/10. Coursework covers DSA, OOP, DBMS, AI/ML, OS and System Design.',
  },
  {
    keywords: ['certification', 'certificate', 'certified', 'course'],
    answer:
      'Certifications include Microsoft Generative AI Fundamentals, AWS Generative AI Foundations, UiPath Agentic Automation Professional, Innovel Full-Stack MERN, NASSCOM UI/UX, and NPTEL Joy of Computing in Python.',
  },
  {
    keywords: ['hire', 'available', 'availability', 'recruit', 'job', 'opportunity', 'open to', 'contact', 'reach', 'email'],
    answer:
      'Yes — Akash is open to internships and new-grad roles (graduating 2027). Reach him at s.akash02062005@gmail.com or +91 86958 33328, or via the Contact terminal at the bottom of this page. He’s on GitHub (@akash02062005) and LinkedIn too.',
  },
  {
    keywords: ['location', 'where', 'based', 'city', 'relocate', 'remote'],
    answer:
      'Akash is based in Madurai, Tamil Nadu, India, and has plenty of remote internship experience — he’s comfortable working remotely or relocating for the right opportunity.',
  },
  {
    keywords: ['who', 'about', 'yourself', 'introduce', 'tell me about', 'akash'],
    answer:
      "Akash S is a CS engineering student (CGPA 8.32) who builds AI products end-to-end — LLM apps, deep-learning models and full-stack MERN platforms. He led his team to 1st place at Hackwise 2.0 (1,000+ teams) and has shipped 6+ production-grade AI projects. Ask me about any of them!",
  },
  {
    keywords: ['contact', 'reach', 'phone', 'mail', 'linkedin', 'github'],
    answer:
      'You can reach Akash at s.akash02062005@gmail.com · +91 86958 33328 · GitHub @akash02062005 · LinkedIn /in/akash-s-3ab29828a. The Contact terminal at the bottom of the page has quick links.',
  },
]

// Match a user query to the best knowledge entry.
export function answerQuery(query) {
  const q = (query || '').toLowerCase()
  if (!q.trim()) return intro

  let best = null
  let bestScore = 0
  for (const entry of knowledge) {
    let score = 0
    for (const kw of entry.keywords) {
      if (q.includes(kw)) score += kw.length // longer keyword = stronger signal
    }
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }

  if (best && bestScore > 0) return best.answer

  return "Great question! I can tell you about Akash's projects (DrugDisco AI, NeuroSense AI, Lancera, RadiSynx, AI Finance, Growlify), his AI/ML & full-stack skills, his Hackwise 2.0 win, his experience, or how to hire him. Which would you like?";
}
