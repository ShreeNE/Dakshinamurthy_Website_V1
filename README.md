# Dakshinamurthy Website V1

⚡ Quick Start
-------------
Install dependencies:
```bash
npm install
```

Start development servers:
```bash
npm run dev
```

Run TypeScript type checks:
```bash
npm run lint
```

Prerequisites
-------------
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)
- Git

First Time Setup
----------------
Clone the repository:
```bash
git clone https://github.com/ShreeNE/Dakshinamurthy_Website_V1.git
cd Dakshinamurthy_Website_V1
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```
Open the URL shown in the terminal.


Daily Workflow For Contributors
-------------------------------
Before starting work:
```bash
git pull origin main
```

After making changes:
```bash
git add .
git commit -m "Describe your changes"
git push origin main
```
🔮 Working on Dimension Portals (Modular Development)
To prevent your team from overwriting each other's code, the dimension portal feature has been split into isolated, individual files. Do not modify the main modal logic or global files unless explicitly instructed.

Navigate to the info-cards directory:

client/src/features/dimension-portal/info-cards/

Open your assigned file based on your domain:

PageOne.tsx — Meditation

PageTwo.tsx — Yoga & Asana

PageThree.tsx — Mindfulness

PageFour.tsx — Sacred Geometry

PageFive.tsx — Spiritual Science

PageSix.tsx — Conscious Living

PageSeven.tsx — Divine Energy & Qi

PageEight.tsx — Sacred Scriptures

PageNine.tsx — Ancient Wisdom

PageTen.tsx — Universal Consciousness

PageEleven.tsx — Astral Awareness & Dream

PageTwelve.tsx — Cosmic Philosophy

Make all your UI, layout, and content changes strictly inside your specific page file.

Test your compilation before tracking your files by running npm run lint or npx tsc --noEmit inside the client folder.


If Push Is Rejected
-------------------
Someone has pushed changes before you.

Run:
```bash
git pull origin main
```
Resolve any merge conflicts if prompted, then:
```bash
git push origin main
```

Check Repository Status
-----------------------
```bash
git status
```

Check Current Branch
--------------------
```bash
git branch
```

Common Commands
---------------
Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```