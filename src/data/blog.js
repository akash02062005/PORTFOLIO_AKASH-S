// =====================================================================
//  Blog posts. Newest first. Add a post by prepending an object here.
//  content = array of paragraphs (plain text).
// =====================================================================

export const posts = [
  {
    slug: 'first-ieee-paper',
    title: 'From Class Project to Conference Paper: Presenting at RASET 2026',
    date: 'May 2026',
    tag: 'Research',
    minutes: 5,
    excerpt:
      'What it took to turn our AI-Based Skill Gap Analyzer from a college project into a paper presented at two conferences.',
    content: [
      'When we first built the AI-Based Skill Gap Analyzer, it was a class project: an NLP pipeline that parses a resume, compares it against role requirements, and generates a personalised learning path. It worked well enough that our guide suggested something I had never seriously considered — writing it up as a paper.',
      'Turning working code into a paper is a different discipline. Code only has to run; a paper has to justify. Every design choice we had made on instinct — why TF-IDF plus embeddings instead of embeddings alone, why role-specific skill taxonomies — had to be defended with either citations or experiments. We ended up running evaluations we should have run from the start, and the system got better because of it.',
      'Presenting at RASET 2026 at Bannari Amman Institute of Technology (IEEE OES, ISBN 978-93-5812-163-6) was the real test: ten minutes to explain months of work to an audience that owed us no patience. A month earlier we had presented the same work at ICECSM 2026, and the questions from that first audience directly shaped the stronger version we delivered at RASET.',
      'If you are a student sitting on a project that actually works: write it up. The process of defending your own decisions in writing will teach you more about your system than building it did.',
    ],
  },
  {
    slug: 'winning-hackwise-2',
    title: 'How We Won Hackwise 2.0 Against 1,000+ Teams',
    date: 'Apr 2026',
    tag: 'Hackathons',
    minutes: 6,
    excerpt:
      'A no-electronics design round, 24 hours of building, and the decisions that carried Team Green Sync Innovators to 1st place.',
    content: [
      'Hackwise 2.0 at KVG College of Engineering was unlike any hackathon I had entered: Round 1 banned electronics entirely. No laptops, no phones — just paper, markers and your ability to design a system and defend it. It was the best possible filter, because it forced us to think before we typed.',
      'Our idea was Lancera, an AI freelancer marketplace. The pitch: freelancing platforms are broken for beginners because clients cannot verify skill and freelancers cannot win their first project. Lancera uses LLMs to auto-generate skill-vetting quizzes, score bids and give smart feedback — so reputation starts from demonstrated ability, not review history.',
      'In the 24-hour build round, our paper design paid off. We split cleanly: real-time reverse-auction engine on Socket.IO, JWT/bcrypt/OTP auth, Razorpay payments, and the LLM vetting pipeline. Because the architecture was already decided, we spent the night building instead of debating.',
      'We presented to judges as the sun came up, and Team Green Sync Innovators took 1st place ahead of 1,000+ teams. My honest advice for hackathons: your differentiator is decided before the event starts — it is how clearly you can explain the problem. The code just has to keep up with the story.',
    ],
  },
  {
    slug: 'rag-in-production',
    title: 'RAG in Production: Lessons From Shipping Real LLM Apps',
    date: 'Jan 2026',
    tag: 'LLMs',
    minutes: 7,
    excerpt:
      'Chunking strategy, retrieval quality and latency budgets — what actually matters after the demo works.',
    content: [
      'Every RAG demo looks the same: load documents, embed, retrieve top-k, stuff a prompt, stream an answer. I have now shipped RAG in three different products — a CBT-informed wellness chatbot in NeuroSense, a biomedical assistant in DrugDisco AI, and a financial advisor in my finance platform — and none of the things that made them work appear in that demo.',
      'The first lesson was that retrieval quality is a data problem, not a model problem. In DrugDisco, naive chunking of PubMed abstracts destroyed the link between a finding and its context. Chunking along the natural structure of the source — abstract sections, conversation turns, statement periods — improved answer quality more than any model swap.',
      'The second lesson was latency budgets. NeuroSense needed responses under 600ms end-to-end, which rules out lazy sequential pipelines. Embedding caching, parallel retrieval and streaming the first token early matter more than shaving points on a benchmark.',
      'The third lesson was guardrails. A wellness chatbot must detect crisis language and change behaviour immediately; a biomedical assistant must refuse to invent citations. Retrieval gives the model grounding, but the guardrail layer around it is what makes the product safe to ship — and it is the part nobody demos.',
      'RAG is not a feature you add; it is a system you operate. Treat the retrieval corpus like production data, budget latency like an SLA, and design the failure modes before the happy path.',
    ],
  },
  {
    slug: 'building-drugdisco-ai',
    title: 'What Building an AI Drug-Discovery Platform Taught Me',
    date: 'Aug 2025',
    tag: 'AI Engineering',
    minutes: 6,
    excerpt:
      'ChemBERTa, BioGPT, six external APIs and thirty FastAPI endpoints — the engineering behind DrugDisco AI.',
    content: [
      'DrugDisco AI started with a simple question: could I make early-stage drug discovery tooling accessible through a web app? The answer required ChemBERTa-77M for molecular property and ADMET prediction, BioGPT for a biomedical chatbot, RDKit for de-novo molecule generation, and a lot of engineering nobody warns you about.',
      'The hardest part was not the models — it was the integration layer. The platform unifies six external APIs (PubChem, PubMed, ChEMBL, UniProt and others), and every one of them fails differently: rate limits, schema drift, timeouts. The fault-tolerant service layer that wraps them ended up being some of the most valuable code in the project.',
      'Serving ML models behind 30+ FastAPI endpoints taught me to separate inference from request handling early. Model loading is expensive, GPU memory is finite, and a single slow prediction should never block an auth request. Queue the heavy work, cache aggressively, and monitor everything.',
      'The biggest takeaway: research-grade AI becomes a product only when the boring parts — auth, billing, error handling, observability — are treated as first-class. The model is maybe 20% of the system. The other 80% is why people can actually use it.',
    ],
  },
]
