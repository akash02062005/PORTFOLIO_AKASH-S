// =====================================================================
//  Competitions & events — grouped by VENUE and by AWARD.
//
//  venue : 'college'  (PSNA + external college fests/symposiums)
//          'school'   (Lakshmi School, Madurai)
//          'residential' (Valarnagar locality — Pongal Kondattam meets)
//  award : 'winner' (prize / podium / finalist) | 'participation'
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
  // ══════════════ COLLEGE · WINS ══════════════
  {
    venue: 'college', award: 'winner', type: 'hackathon',
    title: 'Hackwise 2.0',
    org: 'Sphere Hive · KVG College of Engineering',
    sub: 'National AI Hackathon · Team Green Sync Innovators',
    result: 'Winner · 1st',
    certs: [{ image: '/events/hackwise-prelims.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    venue: 'college', award: 'winner', type: 'paper',
    title: 'KEC Symposium — CSEA & CCC',
    org: 'Kongu Engineering College, Erode',
    sub: 'Paper Presentation',
    result: 'Winner',
    certs: [
      { image: '/events/kec-winner.png', issuer: 'Winner · Paper Presentation', date: 'Mar 2026' },
      { image: '/events/kec-participation.png', issuer: 'Participation', date: 'Mar 2026' },
    ],
  },
  {
    venue: 'college', award: 'winner', type: 'quiz',
    title: 'Electroverse 2K26 — Technical Quiz',
    org: 'Sethu Institute of Technology · EESOR',
    sub: 'National Level Symposium',
    result: 'II Prize',
    certs: [{ image: '/events/sethu-electroverse.png', issuer: 'Sethu IT', date: 'Feb 2026' }],
  },
  {
    venue: 'college', award: 'winner', type: 'challenge',
    title: 'HyperCube Visual Bash',
    org: 'Shaastra 2025 · IIT Madras',
    sub: 'Data-visualization challenge',
    result: 'Finalist',
    certs: [{ image: '/events/hypercube-bash.png', issuer: 'IIT Madras', date: 'Jan 2025' }],
  },
  {
    venue: 'college', award: 'winner', type: 'paper',
    title: 'IEEE YESIST12 2024',
    org: 'IEEE · Tunis Science City, Tunisia',
    sub: 'Project: Unveiling Mobile Thefting',
    result: 'Finalist',
    certs: [
      { image: '/events/yesist12-2024.png', issuer: 'Grand Finale · IEEE', date: 'Sep 2024' },
      { image: '/events/yesist12-prelim.png', issuer: 'Prelim · Budge Budge IT', date: 'Apr 2024' },
    ],
  },

  // ══════════════ COLLEGE · PARTICIPATION ══════════════
  {
    venue: 'college', award: 'participation', type: 'hackathon',
    title: 'Rathinam Grand Fest — Hackathon',
    org: 'Rathinam Group of Institutions, Coimbatore',
    sub: "India's Mega Techno-Cultural Fest (RGF)",
    result: '5th place',
    certs: [{ image: '/events/rathinam-rgf.png', issuer: 'Rathinam', date: 'Mar 2026' }],
  },
  {
    venue: 'college', award: 'participation', type: 'challenge',
    title: "TECHUTSAV'26 — Paradigm",
    org: 'Thiagarajar College of Engineering, Madurai',
    sub: 'Workshop & Events',
    result: 'Participant',
    certs: [{ image: '/events/thiagarajar-techutsav.png', issuer: 'TCE', date: 'Feb 2026' }],
  },
  {
    venue: 'college', award: 'participation', type: 'challenge',
    title: 'Science Tech Fest 2025 — TechSynergy',
    org: 'Dhanalakshmi Srinivasan University, Tiruchirappalli',
    sub: 'Prompt Verse · Inno Papers · Mind Hack · ADZAP · Treasure Hunt · Startup Pitching · Crackathon',
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
    venue: 'college', award: 'participation', type: 'hackathon',
    title: "HackXelerate '25",
    org: 'KPR Institute of Engineering & Technology, Coimbatore',
    sub: '24-hour National-Level Hackathon',
    result: 'Participant',
    certs: [{ image: '/events/kpr-hackxelerate.png', issuer: 'KPR IET', date: 'Apr 2025' }],
  },
  {
    venue: 'college', award: 'participation', type: 'coding',
    title: 'Erupta 2025',
    org: 'Sethu Institute of Technology · SITWARE',
    sub: 'Code Quest · Paper Reel · Screen Test',
    result: 'Participant',
    certs: [{ image: '/events/sethu-erupta.png', issuer: 'Sethu IT', date: 'Feb 2025' }],
  },
  {
    venue: 'college', award: 'participation', type: 'hackathon',
    title: 'MOSIP Decode Hackathon',
    org: 'Shaastra 2026 · IIT Madras',
    sub: 'Digital Governance Summit',
    result: 'Participant',
    certs: [{ image: '/events/mosip-decode.png', issuer: 'Unstop', date: 'Jan 2026' }],
  },
  {
    venue: 'college', award: 'participation', type: 'hackathon',
    title: 'HackXIndia',
    org: 'IIMT University, Meerut',
    sub: 'Team Green Sync Innovators',
    result: 'Participant',
    certs: [{ image: '/events/hackxindia.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    venue: 'college', award: 'participation', type: 'hackathon',
    title: 'Galgotias International Hackathon',
    org: 'Galgotias College (GCET), Greater Noida',
    sub: 'Team IBM_Innovatorz',
    result: 'Participant',
    certs: [{ image: '/events/galgotias.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    venue: 'college', award: 'participation', type: 'hackathon',
    title: 'GCET Hackathon 2026',
    org: 'G H Patel College of Engineering, Anand',
    sub: '',
    result: 'Participant',
    certs: [{ image: '/events/gcet.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    venue: 'college', award: 'participation', type: 'hackathon',
    title: "HackZ'24",
    org: 'College of Engineering Guindy (CEG)',
    sub: 'Team Code Falcons',
    result: 'Participant',
    certs: [{ image: '/events/hackz24.png', issuer: 'Unstop', date: '2024' }],
  },
  {
    venue: 'college', award: 'participation', type: 'hackathon',
    title: 'Smart India Hackathon 2024',
    org: 'PSNA CET · SIH (Govt. of India)',
    sub: 'Team Cyber Spartans',
    result: 'Participant',
    certs: [{ image: '/events/sih-2024.png', issuer: 'SIH', date: 'Aug 2024' }],
  },
  {
    venue: 'college', award: 'participation', type: 'hackathon',
    title: 'SIH 2025 — Intra-Department Hackathon',
    org: 'PSNA CET · Dept. of CSE',
    sub: 'Team Auracare',
    result: 'Participant',
    certs: [{ image: '/events/sih-2025-intra.png', issuer: 'PSNA CET', date: 'Sep 2025' }],
  },
  {
    venue: 'college', award: 'participation', type: 'coding',
    title: 'Capture the Flag (CTF)',
    org: 'Shaastra 2026 · IIT Madras',
    sub: 'Cybersecurity challenge',
    result: 'Participant',
    certs: [{ image: '/events/ctf.png', issuer: 'Unstop', date: 'Jan 2026' }],
  },
  {
    venue: 'college', award: 'participation', type: 'coding',
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
    venue: 'college', award: 'participation', type: 'coding',
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
    venue: 'college', award: 'participation', type: 'coding',
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
    venue: 'college', award: 'participation', type: 'coding',
    title: 'Programming Contest',
    org: 'Shaastra · IIT Madras',
    sub: 'Competitive programming',
    result: 'Top 11',
    certs: [{ image: '/events/programming-contest.png', issuer: 'IIT Madras', date: '2024' }],
  },
  {
    venue: 'college', award: 'participation', type: 'coding',
    title: 'Frontend Battle — Vibe Coding',
    org: 'IIT Bhubaneswar',
    sub: '',
    result: 'Participant',
    certs: [{ image: '/events/frontend-battle.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    venue: 'college', award: 'participation', type: 'coding',
    title: 'Flipkart GRiD 6.0',
    org: 'Flipkart · Software Development Track',
    sub: 'Level 1 — E-Commerce & Tech Quiz',
    result: 'Participant',
    certs: [{ image: '/events/flipkart-grid.png', issuer: 'Flipkart', date: '2024' }],
  },
  {
    venue: 'college', award: 'participation', type: 'coding',
    title: 'Coding & Debugging',
    org: 'NDLI Club · PSNA CET',
    sub: 'Coding and debugging challenge',
    result: 'Participant',
    certs: [{ image: '/events/coding-debugging.png', issuer: 'NDLI · IIT Kharagpur', date: 'May 2024' }],
  },
  {
    venue: 'college', award: 'participation', type: 'quiz',
    title: 'InQuizzitive — Boardroom Battle',
    org: 'IIM Kozhikode · Backwaters 2026',
    sub: 'Management quiz',
    result: 'Participant',
    certs: [{ image: '/events/inquizzitative.png', issuer: 'Unstop', date: '2026' }],
  },
  {
    venue: 'college', award: 'participation', type: 'quiz',
    title: 'Quantified Dilemma',
    org: 'Shaastra 2026 · IIT Madras',
    sub: 'Quant & analytics',
    result: 'Participant',
    certs: [{ image: '/events/quantified-dilemma.png', issuer: 'Unstop', date: 'Jan 2026' }],
  },
  {
    venue: 'college', award: 'participation', type: 'quiz',
    title: 'Quantathon',
    org: 'Shaastra 2024 · IIT Madras',
    sub: 'Quant challenge',
    result: 'Participant',
    certs: [{ image: '/events/quantathon-2024.png', issuer: 'IIT Madras', date: 'Dec 2023' }],
  },
  {
    venue: 'college', award: 'participation', type: 'quiz',
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
    venue: 'college', award: 'participation', type: 'quiz',
    title: 'Quizfinity',
    org: 'Knowledge Institute of Technology (KIoT)',
    sub: '',
    result: 'Participant',
    certs: [{ image: '/events/quizfinity.png', issuer: 'KIoT', date: '' }],
  },
  {
    venue: 'college', award: 'participation', type: 'quiz',
    title: 'GenAI Quiz Challenge 2026',
    org: 'NDLI Club · PSNA CET',
    sub: 'Generative AI quiz',
    result: 'Participant',
    certs: [{ image: '/events/ndli-genai-quiz.png', issuer: 'NDLI', date: 'May 2026' }],
  },
  {
    venue: 'college', award: 'participation', type: 'quiz',
    title: 'Electoral Quest — E-Quiz',
    org: 'Christ College of Science & Management',
    sub: 'Dept. of Management with IQAC · Score 70/150',
    result: 'Participant',
    certs: [{ image: '/events/electoral-quest.png', issuer: 'Christ College', date: 'Apr 2024' }],
  },
  {
    venue: 'college', award: 'participation', type: 'challenge',
    title: 'Tata Imagination Challenge 2024',
    org: 'Tata Group',
    sub: 'Student Track',
    result: 'Participant',
    certs: [{ image: '/events/tata-imagination.png', issuer: 'Tata', date: '2024' }],
  },
  {
    venue: 'college', award: 'participation', type: 'challenge',
    title: 'HP Power Lab 2.0 — Round 1',
    org: 'Hindustan Petroleum Corporation Ltd',
    sub: 'Online assessment',
    result: 'Participant',
    certs: [{ image: '/events/hp-powerlab.png', issuer: 'HPCL', date: '' }],
  },
  {
    venue: 'college', award: 'participation', type: 'challenge',
    title: 'Next-Gen Engineering Challenge',
    org: 'ISB&M, Bangalore',
    sub: '',
    result: 'Participant',
    certs: [{ image: '/events/nextgen.png', issuer: 'ISB&M', date: '' }],
  },
  {
    venue: 'college', award: 'participation', type: 'paper',
    title: "Paper Presentation — INEXTRON'23",
    org: 'EGS Pillay Engineering College',
    sub: 'Intl. Technical Symposium',
    result: 'Participant',
    certs: [{ image: '/events/inextron-paper.png', issuer: 'EGS Pillay', date: 'Oct 2023' }],
  },
  {
    venue: 'college', award: 'participation', type: 'challenge',
    title: 'Network Security Workshop',
    org: 'KRIYAVAN × PSNA CET (WiCyS Chapter)',
    sub: 'Approaches to Network Security for Aspiring Graduates',
    result: 'Participant',
    certs: [{ image: '/events/kriyavan-workshop.png', issuer: 'KRIYAVAN', date: 'Dec 2023' }],
  },
  {
    venue: 'college', award: 'participation', type: 'challenge',
    title: 'Student Induction Program (SIP)',
    org: 'PSNA CET · AICTE (IQAC Initiative)',
    sub: '2023–2024',
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
