// =====================================================================
//  Competition & event participation certificates, grouped by TYPE.
//  Images live in  public/events/<file>.png
//
//  Each event carries a `certs` array. When the SAME event was certified
//  twice (e.g. an Unstop platform cert AND a separate organiser cert),
//  list both certs here — they render as ONE card that lets you flip
//  between the two certificates. Single-cert events just have one entry.
//
//  To add a new cert: drop the image in public/events and add an item
//  with the right `type`. Register new types in `eventTypes` below.
// =====================================================================

// Registered event categories (order + colour + label).
export const eventTypes = [
  { id: 'hackathon', label: 'Hackathons', accent: '#8b5cf6' },
  { id: 'coding', label: 'Coding & CTF', accent: '#22d3ee' },
  { id: 'quiz', label: 'Quizzes & Puzzles', accent: '#f59e0b' },
  { id: 'challenge', label: 'Innovation Challenges', accent: '#34d399' },
  { id: 'paper', label: 'Paper Presentations', accent: '#f472b6' },
]

export const events = [
  // ── Hackathons ──────────────────────────────────────────────
  {
    type: 'hackathon',
    title: 'MOSIP Decode Hackathon',
    org: 'Shaastra 2026 · IIT Madras',
    sub: 'Digital Governance Summit',
    result: 'Participant',
    certs: [{ image: '/events/mosip-decode.png', issuer: 'Unstop', date: 'Jan 2026' }],
  },
  {
    type: 'hackathon',
    title: 'Hackwise 2.0 — Selection Round',
    org: 'Sphere Hive · KVG College of Engineering',
    sub: 'Team Green Sync Innovators',
    result: 'Qualified',
    certs: [{ image: '/events/hackwise-prelims.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    type: 'hackathon',
    title: 'HackXIndia',
    org: 'IIMT University, Meerut',
    sub: 'Team Green Sync Innovators',
    result: 'Participant',
    certs: [{ image: '/events/hackxindia.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    type: 'hackathon',
    title: 'Galgotias International Hackathon',
    org: 'Galgotias College (GCET), Greater Noida',
    sub: 'Team IBM_Innovatorz',
    result: 'Participant',
    certs: [{ image: '/events/galgotias.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    type: 'hackathon',
    title: 'GCET Hackathon 2026',
    org: 'G H Patel College of Engineering, Anand',
    sub: '',
    result: 'Participant',
    certs: [{ image: '/events/gcet.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    type: 'hackathon',
    title: "HackZ'24",
    org: 'College of Engineering Guindy (CEG)',
    sub: 'Team Code Falcons',
    result: 'Participant',
    certs: [{ image: '/events/hackz24.png', issuer: 'Unstop', date: '2024' }],
  },
  {
    type: 'hackathon',
    title: 'Smart India Hackathon 2024',
    org: 'Govt. of India · SIH',
    sub: 'Team Cyber Spartans',
    result: 'Participant',
    certs: [{ image: '/events/sih-2024.png', issuer: 'SIH', date: 'Aug 2024' }],
  },
  {
    type: 'hackathon',
    title: 'SIH 2025 — Intra-Department Hackathon',
    org: 'PSNA CET · Dept. of CSE',
    sub: 'Team Auracare',
    result: 'Participant',
    certs: [{ image: '/events/sih-2025-intra.png', issuer: 'PSNA CET', date: 'Sep 2025' }],
  },
  {
    // SAME event — Prelim (Budge Budge Institute) + Grand Finale (Tunisia) certificates,
    // kept together on one card. Classified as a Hackathon.
    type: 'hackathon',
    title: 'IEEE YESIST12 2024',
    org: 'IEEE · Tunis Science City, Tunisia',
    sub: 'Project: Unveiling Mobile Thefting',
    result: 'Finalist',
    certs: [
      { image: '/events/yesist12-2024.png', issuer: 'Grand Finale · IEEE', date: 'Sep 2024' },
      { image: '/events/yesist12-prelim.png', issuer: 'Prelim · Budge Budge IT', date: 'Apr 2024' },
    ],
  },

  // ── Coding & CTF ────────────────────────────────────────────
  {
    type: 'coding',
    title: 'Capture the Flag (CTF)',
    org: 'Shaastra 2026 · IIT Madras',
    sub: 'Cybersecurity challenge',
    result: 'Participant',
    certs: [{ image: '/events/ctf.png', issuer: 'Unstop', date: 'Jan 2026' }],
  },
  {
    // SAME event — Unstop + IIT Madras organiser certificates
    type: 'coding',
    title: 'Reverse Coding X',
    org: 'Shaastra · IIT Madras',
    sub: 'Reverse engineering contest',
    result: 'Participant',
    certs: [
      { image: '/events/reverse-coding.png', issuer: 'Unstop', date: 'Shaastra 2026' },
      { image: '/events/reverse-codingx-2024.png', issuer: 'IIT Madras', date: 'Dec 2023' },
    ],
  },
  {
    type: 'coding',
    title: 'CP Potpourri',
    org: 'Shaastra · IIT Madras',
    sub: 'Competitive programming',
    result: 'Participant',
    certs: [
      { image: '/events/cp-potpourri.png', issuer: 'Unstop', date: 'Shaastra 2026' },
      { image: '/events/cp-potpourri-2024.png', issuer: 'IIT Madras', date: 'Dec 2023' },
    ],
  },
  {
    type: 'coding',
    title: 'E-Contest',
    org: 'Shaastra · IIT Madras',
    sub: 'Programming contest',
    result: 'Participant',
    certs: [
      { image: '/events/econtest.png', issuer: 'Unstop', date: 'Shaastra 2026' },
      { image: '/events/econtest-2024.png', issuer: 'IIT Madras', date: 'Dec 2023' },
    ],
  },
  {
    type: 'coding',
    title: 'Programming Contest',
    org: 'Shaastra · IIT Madras',
    sub: 'Competitive programming',
    result: 'Top 11',
    certs: [{ image: '/events/programming-contest.png', issuer: 'IIT Madras', date: '2024' }],
  },
  {
    type: 'coding',
    title: 'Frontend Battle — Vibe Coding',
    org: 'IIT Bhubaneswar',
    sub: '',
    result: 'Participant',
    certs: [{ image: '/events/frontend-battle.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    type: 'coding',
    title: 'Flipkart GRiD 6.0',
    org: 'Flipkart · Software Development Track',
    sub: 'Level 1 — E-Commerce & Tech Quiz',
    result: 'Participant',
    certs: [{ image: '/events/flipkart-grid.png', issuer: 'Flipkart', date: '2024' }],
  },
  {
    type: 'coding',
    title: 'Coding & Debugging',
    org: 'NDLI Club · PSNA CET',
    sub: 'Coding and debugging challenge',
    result: 'Participant',
    certs: [{ image: '/events/coding-debugging.png', issuer: 'NDLI · IIT Kharagpur', date: 'May 2024' }],
  },

  // ── Quizzes & Puzzles ───────────────────────────────────────
  {
    type: 'quiz',
    title: 'InQuizzitive — Boardroom Battle',
    org: 'IIM Kozhikode · Backwaters 2026',
    sub: 'Management quiz',
    result: 'Participant',
    certs: [{ image: '/events/inquizzitative.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    type: 'quiz',
    title: 'Quantified Dilemma',
    org: 'Shaastra 2026 · IIT Madras',
    sub: 'Quant & analytics',
    result: 'Participant',
    certs: [{ image: '/events/quantified-dilemma.png', issuer: 'Unstop', date: 'Jan 2026' }],
  },
  {
    type: 'quiz',
    title: 'Quantathon',
    org: 'Shaastra 2024 · IIT Madras',
    sub: 'Quant challenge',
    result: 'Participant',
    certs: [{ image: '/events/quantathon-2024.png', issuer: 'IIT Madras', date: 'Dec 2023' }],
  },
  {
    type: 'quiz',
    title: 'Weird Chess',
    org: 'Shaastra · IIT Madras',
    sub: 'Strategy puzzle',
    result: 'Participant',
    certs: [
      { image: '/events/weird-chess.png', issuer: 'Unstop', date: 'Shaastra 2026 · v4.0' },
      { image: '/events/weird-chess-2024.png', issuer: 'IIT Madras', date: 'Dec 2023 · v2.0' },
    ],
  },
  {
    type: 'quiz',
    title: 'Quizfinity',
    org: 'Knowledge Institute of Technology (KIoT)',
    sub: '',
    result: 'Participant',
    certs: [{ image: '/events/quizfinity.png', issuer: 'KIoT', date: '' }],
  },
  {
    type: 'quiz',
    title: 'GenAI Quiz Challenge 2026',
    org: 'NDLI Club · PSNA CET',
    sub: 'Generative AI quiz',
    result: 'Participant',
    certs: [{ image: '/events/ndli-genai-quiz.png', issuer: 'NDLI', date: 'May 2026' }],
  },
  {
    type: 'quiz',
    title: 'Electoral Quest — E-Quiz',
    org: 'Christ College of Science & Management',
    sub: 'Dept. of Management with IQAC · Score 70/150',
    result: 'Participant',
    certs: [{ image: '/events/electoral-quest.png', issuer: 'Christ College', date: 'Apr 2024' }],
  },

  // ── Innovation Challenges ───────────────────────────────────
  {
    type: 'challenge',
    title: 'Tata Imagination Challenge 2024',
    org: 'Tata Group',
    sub: 'Student Track',
    result: 'Participant',
    certs: [{ image: '/events/tata-imagination.png', issuer: 'Tata', date: '2024' }],
  },
  {
    type: 'challenge',
    title: 'HP Power Lab 2.0 — Round 1',
    org: 'Hindustan Petroleum Corporation Ltd',
    sub: 'Online assessment',
    result: 'Participant',
    certs: [{ image: '/events/hp-powerlab.png', issuer: 'HPCL', date: '' }],
  },
  {
    type: 'challenge',
    title: 'Next-Gen Engineering Challenge',
    org: 'ISB&M, Bangalore',
    sub: '',
    result: 'Participant',
    certs: [{ image: '/events/nextgen.png', issuer: 'ISB&M', date: '' }],
  },
  {
    type: 'challenge',
    title: 'HyperCube Visual Bash',
    org: 'Shaastra 2025 · IIT Madras',
    sub: 'Data-visualization challenge',
    result: 'Finalist',
    certs: [{ image: '/events/hypercube-bash.png', issuer: 'IIT Madras', date: 'Jan 2025' }],
  },

  // ── Paper / project presentations ───────────────────────────
  {
    type: 'paper',
    title: "Paper Presentation — INEXTRON'23",
    org: 'EGS Pillay Engineering College',
    sub: 'Intl. Technical Symposium',
    result: 'Participant',
    certs: [{ image: '/events/inextron-paper.png', issuer: 'EGS Pillay', date: 'Oct 2023' }],
  },
]

// Helpers
export const eventCount = events.length
export const certTotal = events.reduce((n, e) => n + e.certs.length, 0)
export const eventTypeCount = eventTypes.filter((t) =>
  events.some((e) => e.type === t.id)
).length
