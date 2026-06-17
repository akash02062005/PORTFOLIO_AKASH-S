// =====================================================================
//  Certifications, grouped by issuing company.
//  Images live in  public/certs/<file>.png
//  To add a new cert: drop the image in public/certs and add an item here.
//  Items with image:null render as a text badge until you add the image.
// =====================================================================

export const certGroups = [
  {
    issuer: 'Microsoft',
    accent: '#22d3ee',
    items: [
      { title: 'Introduction to AI in Azure', image: '/certs/azure-1.png', date: 'Oct 2025' },
      { title: 'Get Started with Machine Learning in Azure', image: '/certs/azure-2.png', date: 'Oct 2025' },
      { title: 'Get Started with Generative AI in Azure', image: '/certs/azure-3.png', date: 'Oct 2025' },
    ],
  },
  {
    issuer: 'Google',
    accent: '#34d399',
    items: [
      { title: 'Gemini Certified Student (University)', image: '/certs/gemini-student.png', date: 'Mar 2026' },
      { title: 'Foundations of Cybersecurity', image: '/certs/google-cybersecurity.png', date: 'Apr 2024' },
    ],
  },
  {
    issuer: 'IBM',
    accent: '#3b82f6',
    items: [
      { title: 'Machine Learning with Python', image: '/certs/ibm-ml-python.png', date: 'Nov 2025' },
      { title: 'Data Science Foundations — Level 1', image: '/certs/ibm-datascience-l1.png', date: 'Oct 2025' },
      { title: 'Data Science 101', image: '/certs/datascience-1.png', date: 'Oct 2025' },
      { title: 'Digital Analytics & Regression', image: '/certs/datascience-2.png', date: 'Oct 2025' },
      { title: 'Prompt Engineering for Everyone', image: '/certs/ibm-prompt.png', date: 'Nov 2025' },
    ],
  },
  {
    issuer: 'MongoDB',
    accent: '#00ed64',
    items: [
      { title: 'Introduction to MongoDB', image: '/certs/mongo-intro.png', date: 'Jun 2024' },
      { title: 'Getting Started with MongoDB Atlas', image: '/certs/mongo-atlas-start.png', date: 'Jun 2024' },
      { title: 'Connecting to a MongoDB Database', image: '/certs/mongo-connecting.png', date: 'Jun 2024' },
      { title: 'MongoDB and the Document Model', image: '/certs/mongo-document-model.png', date: 'Jun 2024' },
      { title: 'CRUD Operations: Insert and Find Documents', image: '/certs/mongo-crud-insert.png', date: 'Jun 2024' },
      { title: 'CRUD Operations: Replace and Delete Documents', image: '/certs/mongo-crud-replace.png', date: 'Jun 2024' },
      { title: 'CRUD Operations: Modifying Query Results', image: '/certs/mongo-crud-modify.png', date: 'Jun 2024' },
      { title: 'MongoDB Aggregation', image: '/certs/mongo-aggregation.png', date: 'Jun 2024' },
      { title: 'MongoDB Data Modeling Intro', image: '/certs/mongo-data-modeling.png', date: 'Jun 2024' },
      { title: 'MongoDB Transactions', image: '/certs/mongo-transactions.png', date: 'Jun 2024' },
      { title: 'MongoDB Atlas Search', image: '/certs/mongo-atlas-search.png', date: 'Jun 2024' },
    ],
  },
  {
    issuer: 'AWS',
    accent: '#f59e0b',
    items: [
      { title: 'Generative AI Foundations', image: '/certs/aws-genai.png', date: 'Jan 2026' },
    ],
  },
  {
    issuer: 'Celonis',
    accent: '#7c3aed',
    items: [
      { title: 'Process Mining Rising Star — Business', image: '/certs/celonis-process-mining.png', date: 'Apr 2026' },
    ],
  },
  {
    issuer: 'UiPath',
    accent: '#fb923c',
    items: [
      { title: 'Agentic Automation — Developer Associate', image: '/certs/uipath-agentic.png', date: 'Oct 2025' },
      { title: 'Automation Explorer for Students', image: '/certs/uipath-explorer.png', date: '2025' },
    ],
  },
  {
    issuer: 'Cisco',
    accent: '#22d3ee',
    items: [
      { title: 'Introduction to Cybersecurity', image: '/certs/intro-cybersecurity.png', date: '2025' },
      { title: 'Introduction to Internet of Things', image: '/certs/cisco-iot.png', date: 'Apr 2025' },
    ],
  },
  {
    issuer: 'NPTEL · IIT',
    accent: '#ec4899',
    items: [
      { title: 'Problem Solving Through Programming in C', image: '/certs/nptel-c.png', date: '2024' },
      { title: 'The Joy of Computing using Python (Elite)', image: '/certs/nptel-joy-python.png', date: 'Jan–Apr 2024' },
    ],
  },
  {
    issuer: 'NASSCOM',
    accent: '#6366f1',
    items: [
      { title: 'Machine Learning and Image Processing', image: '/certs/nasscom-ml-image.png', date: '2025' },
      { title: 'Blockchain and the Internet of Things', image: '/certs/nasscom-blockchain-iot.png', date: '2025' },
    ],
  },
  {
    issuer: 'Bentley',
    accent: '#14b8a6',
    items: [
      { title: 'Intro to OpenRoads Designer Concepts & Capabilities', image: '/certs/bentley-openroads.png', date: 'Sep 2024' },
      { title: 'Modeling Structures with Analytical Modeler', image: '/certs/bentley-structures.png', date: 'Sep 2024' },
    ],
  },
  {
    issuer: 'Scaler',
    accent: '#8b5cf6',
    items: [
      { title: 'Operating System — Fundamentals', image: '/certs/scaler-os.png', date: 'Apr 2025' },
    ],
  },
  {
    issuer: 'CodeChef',
    accent: '#b45309',
    items: [
      { title: 'Learn Python', image: '/certs/codechef-learn.png', date: 'Nov 2023' },
      { title: 'Logic Building in Python', image: '/certs/codechef-logic.png', date: 'Dec 2023' },
      { title: 'Practice Python', image: '/certs/codechef-practice.png', date: 'Dec 2023' },
    ],
  },
  {
    issuer: 'Wadhwani Foundation',
    accent: '#60a5fa',
    items: [
      { title: 'Ignite Bootcamp — Venture Idea Development', image: '/certs/wadhwani-ignite.png', date: 'Mar 2026' },
      { title: 'Self-Presentation', image: '/certs/wadhwani-selfpres.png', date: 'Oct 2025' },
      { title: 'Problem Solving & Innovation', image: '/certs/wadhwani-problemsolving.png', date: 'Oct 2025' },
    ],
  },
  {
    issuer: 'Udemy',
    accent: '#a855f7',
    items: [
      { title: 'Learn Python Programming — Beginner to Master', image: '/certs/udemy-python.png', date: '2024' },
    ],
  },
  {
    issuer: 'Digilabs',
    accent: '#38bdf8',
    items: [
      { title: 'Python Basic — Level Up Program', image: '/certs/digilabs-python.png', date: 'Apr 2024' },
    ],
  },
  {
    issuer: 'Workshops',
    accent: '#f472b6',
    items: [
      { title: 'Exploring Design with Figma', image: '/certs/figma-workshop.png', date: 'PSNA CSE · IEEE Student Branch · May 2024' },
      { title: 'IEEE Xplore — Research Discovery Webinar', image: '/certs/ieee-xplore-workshop.png', date: 'PSNA CET · EBSCO · Feb 2025' },
      { title: 'Cybersecurity Careers Unlocked', image: '/certs/cybersecurity-workshop.png', date: '13x Learning · Feb 2025' },
    ],
  },
]

// Flattened helpers
export const certCount = certGroups.reduce((n, g) => n + g.items.length, 0)
export const issuerCount = certGroups.length
