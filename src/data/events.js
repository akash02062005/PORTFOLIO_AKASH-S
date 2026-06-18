// =====================================================================
//  Competitions & events — grouped by VENUE, AWARD and (for college) CATEGORY.
//
//  venue    : 'college' | 'school' | 'residential'
//  award    : 'winner' | 'participation'
//  category : 'technical' | 'non-technical'   (college events only)
//  location : "College · City, State"          (college events only)
//  points   : up to 2 detail lines             (college events only)
//
//  Multi-cert events flip between certs in the lightbox.
//  Images live in public/events/<file>.png
// =====================================================================

export const venues = [
  { id: 'college', label: 'College', sub: 'PSNA & inter-college symposiums and fests', accent: '#22d3ee' },
  { id: 'school', label: 'School', sub: 'Lakshmi School, Madurai', accent: '#34d399' },
  { id: 'residential', label: 'Residential', sub: 'Valarnagar locality — Pongal Kondattam meets', accent: '#f59e0b' },
]

export const events = [
  // ══════════════ COLLEGE · TECHNICAL ══════════════
  {
    venue: 'college', award: 'winner', category: 'technical', type: 'hackathon',
    title: 'Hackwise 2.0',
    org: 'Sphere Hive · KVG College of Engineering',
    location: 'KVG College of Engineering · Sullia, Karnataka',
    points: [
      '24-hour national AI hackathon · 2 rounds — Round 1 a no-electronics design round (no phones/laptops), Round 2 full implementation.',
      'Secured 1st place (Winner) — Team Green Sync Innovators, ahead of 1,000+ teams.',
    ],
    result: 'Winner · 1st',
    certs: [{ image: '/events/hackwise-prelims.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    venue: 'college', award: 'winner', category: 'technical', type: 'paper',
    title: 'KEC Symposium — CSEA & CCC',
    org: 'Kongu Engineering College, Erode',
    location: 'Kongu Engineering College (KEC) · Erode, Tamil Nadu',
    points: [
      'Presented "Growlify" across the Paper Presentation and Idea Expo tracks.',
      'Won the Winner title in Paper Presentation at the CSEA & CCC symposium.',
    ],
    result: 'Winner',
    certs: [
      { image: '/events/kec-winner.png', issuer: 'Winner · Paper Presentation', date: 'Mar 2026' },
      { image: '/events/kec-participation.png', issuer: 'Participation', date: 'Mar 2026' },
    ],
  },
  {
    venue: 'college', award: 'winner', category: 'technical', type: 'quiz',
    title: 'Electroverse 2K26 — Technical Quiz',
    org: 'Sethu Institute of Technology · EESOR',
    location: 'Sethu Institute of Technology · Kariapatti, Tamil Nadu',
    points: [
      'National-level technical quiz at the Electroverse 2K26 symposium (EEE · EESOR).',
      'Secured II Prize.',
    ],
    result: 'II Prize',
    certs: [{ image: '/events/sethu-electroverse.png', issuer: 'Sethu IT', date: 'Feb 2026' }],
  },
  {
    venue: 'college', award: 'winner', category: 'technical', type: 'challenge',
    title: 'HyperCube Visual Bash',
    org: 'Shaastra 2025 · IIT Madras',
    location: 'IIT Madras (Shaastra) · Chennai, Tamil Nadu',
    points: [
      'Data-visualization challenge — turned raw datasets into clear, insight-driven visuals.',
      'Advanced to the finals as a Finalist.',
    ],
    result: 'Finalist',
    certs: [{ image: '/events/hypercube-bash.png', issuer: 'IIT Madras', date: 'Jan 2025' }],
  },
  {
    venue: 'college', award: 'winner', category: 'technical', type: 'paper',
    title: 'IEEE YESIST12 2024',
    org: 'IEEE · Tunis Science City, Tunisia',
    location: 'IEEE · Budge Budge IT, Kolkata → Tunis, Tunisia',
    points: [
      'Presented the project "Unveiling Mobile Thefting" — prelims at Budge Budge Institute (Kolkata), Grand Finale at Tunis Science City, Tunisia.',
      'Selected as a Finalist at the IEEE YESIST12 international grand finale.',
    ],
    result: 'Finalist',
    certs: [
      { image: '/events/yesist12-2024.png', issuer: 'Grand Finale · IEEE', date: 'Sep 2024' },
      { image: '/events/yesist12-prelim.png', issuer: 'Prelim · Budge Budge IT', date: 'Apr 2024' },
    ],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'hackathon',
    title: 'Rathinam Grand Fest — Hackathon',
    org: 'Rathinam Group of Institutions, Coimbatore',
    location: 'Rathinam Group of Institutions · Coimbatore, Tamil Nadu',
    points: [
      '24-hour hackathon · 3 evaluation rounds — Round 1 design, Round 2 implementation, Round 3 presentation; built "Growlify".',
      "Secured 5th place at India's mega techno-cultural fest (RGF).",
    ],
    result: '5th place',
    certs: [{ image: '/events/rathinam-rgf.png', issuer: 'Rathinam', date: 'Mar 2026' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'hackathon',
    title: "HackXelerate '25",
    org: 'KPR Institute of Engineering & Technology, Coimbatore',
    location: 'KPR Institute of Engineering & Technology · Coimbatore, Tamil Nadu',
    points: [
      '24-hour national-level hackathon · 3 rounds — Round 1 PPT pitch, Round 2 implementation, Round 3 jury-member presentation.',
      'Built and defended the team project live before the jury.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/kpr-hackxelerate.png', issuer: 'KPR IET', date: 'Apr 2025' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'challenge',
    title: 'Science Tech Fest 2025 — TechSynergy',
    org: 'Dhanalakshmi Srinivasan University, Tiruchirappalli',
    location: 'Dhanalakshmi Srinivasan University (DSU) · Tiruchirappalli, Tamil Nadu',
    points: [
      'Took part across 7 events — Prompt Verse, Inno Papers, Mind Hack & Crackathon (technical) plus ADZAP, Treasure Hunt & Startup Pitching.',
      'Two-day TechSynergy fest at the School of Engineering & Technology.',
    ],
    result: '7 events',
    certs: [
      { image: '/events/dsu-1.png', issuer: 'Event 1', date: 'Oct 2025' },
      { image: '/events/dsu-2.png', issuer: 'Event 2', date: 'Oct 2025' },
      { image: '/events/dsu-3.png', issuer: 'Event 3', date: 'Oct 2025' },
      { image: '/events/dsu-4.png', issuer: 'Event 4', date: 'Oct 2025' },
      { image: '/events/dsu-5.png', issuer: 'Event 5', date: 'Oct 2025' },
      { image: '/events/dsu-6.png', issuer: 'Event 6', date: 'Oct 2025' },
      { image: '/events/dsu-7.png', issuer: 'Event 7', date: 'Oct 2025' },
    ],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'challenge',
    title: "TECHUTSAV'26 — Paradigm",
    org: 'Thiagarajar College of Engineering, Madurai',
    location: 'Thiagarajar College of Engineering (TCE) · Madurai, Tamil Nadu',
    points: [
      'Took part in the Workshop & Events tracks of TECHUTSAV’26 — Paradigm.',
      'Hands-on technical workshops and quick-fire mini-events.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/thiagarajar-techutsav.png', issuer: 'TCE', date: 'Feb 2026' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'coding',
    title: 'Erupta 2025',
    org: 'Sethu Institute of Technology · SITWARE',
    location: 'Sethu Institute of Technology · Kariapatti, Tamil Nadu',
    points: [
      'Competed in Code Quest, Paper Reel and Screen Test slots at Erupta 2025 (SITWARE).',
      'Mix of coding, presentation and on-the-spot tasks.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/sethu-erupta.png', issuer: 'Sethu IT', date: 'Feb 2025' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'hackathon',
    title: 'MOSIP Decode Hackathon',
    org: 'Shaastra 2026 · IIT Madras',
    location: 'IIT Madras (Shaastra) · Chennai, Tamil Nadu',
    points: [
      'Digital-governance hackathon at the Shaastra Digital Governance Summit.',
      'Built around the open-source MOSIP identity platform.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/mosip-decode.png', issuer: 'Unstop', date: 'Jan 2026' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'hackathon',
    title: 'HackXIndia',
    org: 'IIMT University, Meerut',
    location: 'IIMT University · Meerut, Uttar Pradesh',
    points: [
      'National hackathon — rapid prototyping with Team Green Sync Innovators.',
      'Idea-to-build sprint judged on innovation and execution.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/hackxindia.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'hackathon',
    title: 'Galgotias International Hackathon',
    org: 'Galgotias College (GCET), Greater Noida',
    location: 'Galgotias College (GCET) · Greater Noida, Uttar Pradesh',
    points: [
      'International hackathon with Team IBM_Innovatorz.',
      'End-to-end solution build under a fixed time window.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/galgotias.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'hackathon',
    title: 'GCET Hackathon 2026',
    org: 'G H Patel College of Engineering, Anand',
    location: 'G H Patel College of Engineering · Anand, Gujarat',
    points: [
      'Inter-college hackathon — problem-statement-driven build.',
      'Focus on a working prototype within the contest window.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/gcet.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'hackathon',
    title: "HackZ'24",
    org: 'College of Engineering Guindy (CEG)',
    location: 'College of Engineering Guindy (CEG) · Chennai, Tamil Nadu',
    points: [
      'Flagship CEG hackathon with Team Code Falcons.',
      'Built a solution under CEG’s timed challenge format.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/hackz24.png', issuer: 'Unstop', date: '2024' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'hackathon',
    title: 'Smart India Hackathon 2024',
    org: 'PSNA CET · SIH (Govt. of India)',
    location: 'PSNA College of Engineering & Technology · Dindigul, Tamil Nadu',
    points: [
      "Govt. of India's Smart India Hackathon — Team Cyber Spartans.",
      'Solved a real government problem statement end-to-end.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/sih-2024.png', issuer: 'SIH', date: 'Aug 2024' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'hackathon',
    title: 'SIH 2025 — Intra-Department Hackathon',
    org: 'PSNA CET · Dept. of CSE',
    location: 'PSNA College of Engineering & Technology · Dindigul, Tamil Nadu',
    points: [
      'Intra-department SIH qualifier with Team Auracare.',
      'Pitched and prototyped a solution for the internal selection.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/sih-2025-intra.png', issuer: 'PSNA CET', date: 'Sep 2025' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'coding',
    title: 'Capture the Flag (CTF)',
    org: 'Shaastra 2026 · IIT Madras',
    location: 'IIT Madras (Shaastra) · Chennai, Tamil Nadu',
    points: [
      'Cybersecurity CTF — exploited and solved security challenges for flags.',
      'Web, crypto and reverse-engineering style puzzles.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/ctf.png', issuer: 'Unstop', date: 'Jan 2026' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'coding',
    title: 'Reverse Coding X',
    org: 'Shaastra · IIT Madras',
    location: 'IIT Madras (Shaastra) · Chennai, Tamil Nadu',
    points: [
      'Reverse-engineering contest — deduced logic from outputs to rebuild the code.',
      'Certified by both Unstop and IIT Madras across editions.',
    ],
    result: 'Participant',
    certs: [
      { image: '/events/reverse-coding.png', issuer: 'Unstop', date: 'Shaastra 2026' },
      { image: '/events/reverse-codingx-2024.png', issuer: 'IIT Madras', date: 'Dec 2023' },
    ],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'coding',
    title: 'CP Potpourri',
    org: 'Shaastra · IIT Madras',
    location: 'IIT Madras (Shaastra) · Chennai, Tamil Nadu',
    points: [
      'Competitive-programming gauntlet across mixed problem styles.',
      'Speed + correctness under contest time pressure.',
    ],
    result: 'Participant',
    certs: [
      { image: '/events/cp-potpourri.png', issuer: 'Unstop', date: 'Shaastra 2026' },
      { image: '/events/cp-potpourri-2024.png', issuer: 'IIT Madras', date: 'Dec 2023' },
    ],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'coding',
    title: 'E-Contest',
    org: 'Shaastra · IIT Madras',
    location: 'IIT Madras (Shaastra) · Chennai, Tamil Nadu',
    points: [
      'Algorithmic programming contest at Shaastra.',
      'Data-structures and problem-solving under the clock.',
    ],
    result: 'Participant',
    certs: [
      { image: '/events/econtest.png', issuer: 'Unstop', date: 'Shaastra 2026' },
      { image: '/events/econtest-2024.png', issuer: 'IIT Madras', date: 'Dec 2023' },
    ],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'coding',
    title: 'Programming Contest',
    org: 'Shaastra · IIT Madras',
    location: 'IIT Madras (Shaastra) · Chennai, Tamil Nadu',
    points: [
      'Open programming contest at Shaastra, IIT Madras.',
      'Finished in the Top 11.',
    ],
    result: 'Top 11',
    certs: [{ image: '/events/programming-contest.png', issuer: 'IIT Madras', date: '2024' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'coding',
    title: 'Frontend Battle — Vibe Coding',
    org: 'IIT Bhubaneswar',
    location: 'IIT Bhubaneswar · Bhubaneswar, Odisha',
    points: [
      'Rapid UI-build contest — recreated a target interface against the clock.',
      'Judged on fidelity, responsiveness and code quality.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/frontend-battle.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'quiz',
    title: 'Flipkart GRiD 6.0',
    org: 'Flipkart · Software Development Track',
    location: 'Flipkart · Online (National)',
    points: [
      'Level 1 of Flipkart GRiD 6.0 — Software Development track.',
      'E-commerce, CS fundamentals and aptitude assessment.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/flipkart-grid.png', issuer: 'Flipkart', date: '2024' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'coding',
    title: 'Coding & Debugging',
    org: 'NDLI Club · PSNA CET',
    location: 'NDLI Club, PSNA CET · Dindigul, Tamil Nadu',
    points: [
      'Wrote code and hunted bugs against a timed challenge set.',
      'Organised by the NDLI Club (IIT Kharagpur) at PSNA.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/coding-debugging.png', issuer: 'NDLI · IIT Kharagpur', date: 'May 2024' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'quiz',
    title: 'GenAI Quiz Challenge 2026',
    org: 'NDLI Club · PSNA CET',
    location: 'NDLI Club, PSNA CET · Dindigul, Tamil Nadu',
    points: [
      'Quiz on generative-AI concepts, models and tooling.',
      'Covered LLMs, prompting and modern AI workflows.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/ndli-genai-quiz.png', issuer: 'NDLI', date: 'May 2026' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'quiz',
    title: 'Quantified Dilemma',
    org: 'Shaastra 2026 · IIT Madras',
    location: 'IIT Madras (Shaastra) · Chennai, Tamil Nadu',
    points: [
      'Quantitative & analytics challenge — data-driven decision puzzles.',
      'Probability, statistics and logical reasoning.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/quantified-dilemma.png', issuer: 'Unstop', date: 'Jan 2026' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'quiz',
    title: 'Quantathon',
    org: 'Shaastra 2024 · IIT Madras',
    location: 'IIT Madras (Shaastra) · Chennai, Tamil Nadu',
    points: [
      'Quant challenge blending maths, finance and logic.',
      'Timed rounds of analytical problem-solving.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/quantathon-2024.png', issuer: 'IIT Madras', date: 'Dec 2023' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'paper',
    title: "Paper Presentation — INEXTRON'23",
    org: 'EGS Pillay Engineering College',
    location: 'EGS Pillay Engineering College · Nagapattinam, Tamil Nadu',
    points: [
      'Presented "Federated Learning & Explainable AI in Healthcare" at the international symposium INEXTRON’23.',
      'Privacy-preserving model training paired with interpretable, clinician-friendly AI.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/inextron-paper.png', issuer: 'EGS Pillay', date: 'Oct 2023' }],
  },
  {
    venue: 'college', award: 'participation', category: 'technical', type: 'challenge',
    title: 'Network Security Workshop',
    org: 'KRIYAVAN × PSNA CET (WiCyS Chapter)',
    location: 'KRIYAVAN × PSNA CET · Dindigul, Tamil Nadu',
    points: [
      'Two-day workshop — "Approaches to Network Security for Aspiring Graduates".',
      'Hands-on with cyber-forensics and network-defence basics.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/kriyavan-workshop.png', issuer: 'KRIYAVAN', date: 'Dec 2023' }],
  },

  // ══════════════ COLLEGE · NON-TECHNICAL ══════════════
  {
    venue: 'college', award: 'participation', category: 'non-technical', type: 'quiz',
    title: 'InQuizzitive — Boardroom Battle',
    org: 'IIM Kozhikode · Backwaters 2026',
    location: 'IIM Kozhikode · Kozhikode, Kerala',
    points: [
      'Management & business quiz at IIM Kozhikode’s Backwaters fest.',
      'Brands, markets and boardroom trivia.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/inquizzitative.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    venue: 'college', award: 'participation', category: 'non-technical', type: 'quiz',
    title: 'Weird Chess',
    org: 'Shaastra · IIT Madras',
    location: 'IIT Madras (Shaastra) · Chennai, Tamil Nadu',
    points: [
      'Strategy puzzle built on unusual chess variants.',
      'Lateral thinking over multiple puzzle editions.',
    ],
    result: 'Participant',
    certs: [
      { image: '/events/weird-chess.png', issuer: 'Unstop', date: 'Shaastra 2026 · v4.0' },
      { image: '/events/weird-chess-2024.png', issuer: 'IIT Madras', date: 'Dec 2023 · v2.0' },
    ],
  },
  {
    venue: 'college', award: 'participation', category: 'non-technical', type: 'quiz',
    title: 'Quizfinity',
    org: 'Knowledge Institute of Technology (KIoT)',
    location: 'Knowledge Institute of Technology · Salem, Tamil Nadu',
    points: [
      'General-knowledge quiz across mixed categories.',
      'Fast-paced rounds at the KIoT fest.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/quizfinity.png', issuer: 'KIoT', date: '' }],
  },
  {
    venue: 'college', award: 'participation', category: 'non-technical', type: 'quiz',
    title: 'Electoral Quest — E-Quiz',
    org: 'Christ College of Science & Management',
    location: 'Christ College of Science & Management · Malur, Karnataka',
    points: [
      'Online civic/GK quiz on elections and democracy (Dept. of Management × IQAC).',
      'Scored 70/150 across the question set.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/electoral-quest.png', issuer: 'Christ College', date: 'Apr 2024' }],
  },
  {
    venue: 'college', award: 'participation', category: 'non-technical', type: 'challenge',
    title: 'Tata Imagination Challenge 2024',
    org: 'Tata Group',
    location: 'Tata Group · Online (National)',
    points: [
      'Idea & innovation challenge on the Student Track.',
      'Pitched a concept against a national applicant pool.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/tata-imagination.png', issuer: 'Tata', date: '2024' }],
  },
  {
    venue: 'college', award: 'participation', category: 'non-technical', type: 'challenge',
    title: 'HP Power Lab 2.0 — Round 1',
    org: 'Hindustan Petroleum Corporation Ltd',
    location: 'HPCL · Online (National)',
    points: [
      'Round 1 online assessment of HPCL’s Power Lab challenge.',
      'Aptitude and domain reasoning under time limits.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/hp-powerlab.png', issuer: 'HPCL', date: '' }],
  },
  {
    venue: 'college', award: 'participation', category: 'non-technical', type: 'challenge',
    title: 'Next-Gen Engineering Challenge',
    org: 'ISB&M, Bangalore',
    location: 'ISB&M · Bangalore, Karnataka',
    points: [
      'Inter-college engineering & ideation challenge.',
      'Problem-solving and presentation rounds.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/nextgen.png', issuer: 'ISB&M', date: '' }],
  },
  {
    venue: 'college', award: 'participation', category: 'non-technical', type: 'challenge',
    title: 'Student Induction Program (SIP)',
    org: 'PSNA CET · AICTE (IQAC Initiative)',
    location: 'PSNA College of Engineering & Technology · Dindigul, Tamil Nadu',
    points: [
      'AICTE Student Induction Program 2023–24 (IQAC initiative).',
      'Orientation to college life, ethics and the CSE department.',
    ],
    result: 'Participant',
    certs: [{ image: '/events/psna-sip.png', issuer: 'PSNA CET', date: 'Sep 2023' }],
  },

  // ══════════════ SCHOOL ══════════════
  {
    venue: 'school', award: 'winner', type: 'challenge',
    title: 'Certificate of Merit',
    org: 'Lakshmi School, Madurai',
    sub: 'School achievement',
    result: 'Merit',
    certs: [{ image: '/events/lakshmi-merit.png', issuer: 'Lakshmi School', date: '' }],
  },
  {
    venue: 'school', award: 'winner', type: 'sport',
    title: 'Sports — Certificate of Merit',
    org: 'EduSports · Lakshmi School, Madurai',
    sub: 'Athletics',
    result: 'Merit',
    certs: [{ image: '/events/edusports-merit.png', issuer: 'EduSports', date: '' }],
  },
  {
    venue: 'school', award: 'participation', type: 'sport',
    title: 'Football League',
    org: 'Lakshmi School, Madurai · EduSports',
    sub: 'Standard V',
    result: 'Participant',
    certs: [{ image: '/events/edusports-football.png', issuer: 'EduSports', date: 'Dec 2014' }],
  },
  {
    venue: 'school', award: 'participation', type: 'quiz',
    title: 'Scope Lark',
    org: 'School competition',
    sub: '',
    result: 'Participant',
    certs: [{ image: '/events/scope-lark.png', issuer: 'School', date: '' }],
  },

  // ══════════════ RESIDENTIAL (Valarnagar · Pongal Kondattam) ══════════════
  {
    venue: 'residential', award: 'winner', type: 'sport',
    title: 'Running Race',
    org: 'Valarnagar Ilaingnar Nalavaazhvu Sangam, Madurai',
    sub: 'Pongal Kondattam meet',
    result: '1st place',
    certs: [{ image: '/events/valarnagar-4.png', issuer: 'Valarnagar Sangam', date: 'Jan 2016' }],
  },
  {
    venue: 'residential', award: 'winner', type: 'sport',
    title: 'Juniors Cricket',
    org: 'Valarnagar Ilaingnar Nalavaazhvu Sangam, Madurai',
    sub: 'Pongal Kondattam meet',
    result: '2nd place',
    certs: [{ image: '/events/valarnagar-2.png', issuer: 'Valarnagar Sangam', date: 'Jan 2016' }],
  },
  {
    venue: 'residential', award: 'winner', type: 'quiz',
    title: 'Speech Competition',
    org: 'Valarnagar Ilaingnar Nalavaazhvu Sangam, Madurai',
    sub: 'Pongal Kondattam meet',
    result: '1st place',
    certs: [{ image: '/events/valarnagar-3.png', issuer: 'Valarnagar Sangam', date: 'Jan 2016' }],
  },
  {
    venue: 'residential', award: 'winner', type: 'challenge',
    title: 'Fancy Dress',
    org: 'Valarnagar Ilaingnar Nalavaazhvu Sangam, Madurai',
    sub: 'Pongal Kondattam meet',
    result: 'Winner',
    certs: [{ image: '/events/valarnagar-1.png', issuer: 'Valarnagar Sangam', date: 'Jan 2016' }],
  },
  {
    venue: 'residential', award: 'winner', type: 'challenge',
    title: 'Essay Writing',
    org: 'Valarnagar Ilaingnar Nalavaazhvu Sangam, Madurai',
    sub: 'Pongal Kondattam meet',
    result: 'Prize',
    certs: [{ image: '/events/valarnagar-5.png', issuer: 'Valarnagar Sangam', date: 'Jan 2016' }],
  },
]

// Sports & extra-curricular highlights (cross-cutting showcase)
export const sports = [
  { title: 'Football', org: 'Lakshmi School · EduSports', level: 'School', result: 'School team', image: '/events/edusports-football.png', accent: '#34d399' },
  { title: 'Running Race', org: 'Valarnagar Sangam · Pongal Kondattam', level: 'Residential', result: '1st place', image: '/events/valarnagar-4.png', accent: '#f59e0b' },
  { title: 'Juniors Cricket', org: 'Valarnagar Sangam · Pongal Kondattam', level: 'Residential', result: '2nd place', image: '/events/valarnagar-2.png', accent: '#22d3ee' },
]

// Helpers
export const eventCount = events.length
export const certTotal = events.reduce((n, e) => n + e.certs.length, 0)
export const winCount = events.filter((e) => e.award === 'winner').length
export const venueCount = venues.filter((v) => events.some((e) => e.venue === v.id)).length
