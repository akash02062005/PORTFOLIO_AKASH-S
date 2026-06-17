// =====================================================================
//  Conference paper presentations + seminars delivered.
//  Decks live in  public/decks/<file>.pptx  (downloadable).
//  Conference certificate images go in public/certs/ (set `cert` path).
// =====================================================================

export const conferences = [
  {
    title: 'AI-Based Skill Gap Analyzer',
    subtitle: 'An NLP & Machine Learning framework for intelligent skill assessment & personalized career guidance',
    event: 'RASET 2026 — National Conference on Recent Advancements in Science, Engineering & Technologies',
    host: 'Bannari Amman Institute of Technology · Dept. of ECE (IEEE OES)',
    date: 'May 4–5, 2026',
    badge: 'IEEE · ISBN 978-93-5812-163-6',
    accent: '#22d3ee',
    ppt: '/decks/raset-skillgap.pptx',
    cert: '/certs/raset-cert.png',
  },
  {
    title: 'AI-Based Skill Gap Analyzer',
    subtitle: 'Context-aware skill assessment delivering role-specific, personalised career guidance',
    event: "ICECSM'26 — 1st International Conference on Energy Conversion, Storage & Materials",
    host: "St. Peter's College of Engineering & Technology · Dept. of S&H with Igniters' Club",
    date: 'April 29, 2026',
    badge: 'International · Oral Presentation',
    accent: '#8b5cf6',
    ppt: '/decks/icecsm-skillgap.pptx',
    cert: '/certs/icecsm-cert.png',
  },
]

export const seminars = [
  {
    title: 'Explainable AI & Federated Learning',
    tag: 'Deep Learning',
    accent: '#8b5cf6',
    ppt: '/decks/explainable-ai.pptx',
    points: [
      'Explainable AI (XAI) makes model decisions transparent and interpretable, so users can trust how and why an AI reached a result.',
      'Federated Learning trains a shared model across decentralized devices without moving raw data — preserving privacy and meeting compliance needs.',
    ],
  },
  {
    title: 'Hashing Techniques',
    tag: 'Data Structures',
    accent: '#22d3ee',
    ppt: '/decks/hashing.pptx',
    points: [
      'A hash function maps a key to a fixed-size hash value used as an index, enabling near-constant-time storage, retrieval and comparison in a hash table.',
      'Collisions (two keys → same hash) are resolved with strategies like separate chaining, which stores colliding entries in a linked list.',
    ],
  },
  {
    title: 'SQL Views',
    tag: 'Databases',
    accent: '#34d399',
    ppt: '/decks/sql-views.pptx',
    points: [
      'A View is a virtual table built from one or more tables — it stores no data itself but retrieves it dynamically on query.',
      'Views simplify complex queries, enhance security by restricting access to sensitive columns, and provide clean data abstraction for different users.',
    ],
  },
]
