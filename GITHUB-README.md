# Party Games App - GitHub Repository

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)  
![License](https://img.shields.io/badge/license-MIT-blue)  
![Platform](https://img.shields.io/badge/platform-iOS_PWA-green)  

## 🎮 What is Party Games?

**Party Games** is a social word chain game built with React 18, designed to work instantly on iOS devices without requiring traditional App Store download. Built specifically for college parties and weekend events!

### Key Features:
- ✅ **Viral Word Chain Mechanics** - Build words from friends' final letters
- ✅ **Trivia Challenges** - Fast-paced rounds with leaderboards  
- ✅ **Multiplayer Support** - 4-8 players via Discord/GroupMe integration
- ✅ **iOS PWA Compatible** - Works instantly on iPhone/iPad (no download needed!)
- ✅ **Offline Play** - Service worker caching for anywhere parties
- ✅ **iOS Home Screen** - Add like native app, no store required

---

## 🚀 Quick Start

### Prerequisites:
- Node.js 18+ installed
- npm or pnpm available

### Install & Run Locally:
```bash
# Clone this repo
git clone <repository-url>
cd party-games-app

# Install dependencies
npm install

# Start dev server
npm run dev

# Open browser at http://localhost:3002/
```

### Production Build:
```bash
# Create production bundle
npm run build

# Serve dist folder with any static host:
# - Netlify (drag-and-drop to https://www.netlify.com/drop)
# - Vercel: vercel --prod
# - GitHub Pages: git push && auto-deploy via actions
```

---

## 📱 Deployment Options

### Option 1: Netlify (Recommended for Fastest Setup)
```bash
# Build production files
npm run build

# Then drag /dist folder to: https://app.netlify.com/drop
# OR use Netlify CLI:
npm install -g netlify-cli && netlify deploy --prod --dir=/dist
```

**Benefits:**
- Auto HTTPS enabled
- Free tier (up to 100GB bandwidth/month)
- Easy drag-and-drop deployment
- PWA-ready hosting

### Option 2: Vercel (React-Optimized)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy directly from local folder
vercel --prod
```

**Benefits:**
- Excellent global CDN
- React-first platform
- Built-in analytics
- Continuous deployment from Git

### Option 3: GitHub Pages (Free & Open Source)
```bash
# Initial commit already done in this repo!
git push origin main

# Automatic CI/CD via .github/workflows/pages.yml
# App will be live at: https://yourusername.github.io/party-games-app/
```

**Benefits:**
- Free unlimited hosting with GitHub
- Auto-deploys on push to main branch
- Great for open source/open collaboration

---

## 📚 Documentation

### Full Deployment Guide:
- `/docs/deployment-guide.md` - Comprehensive production deployment instructions
- `/deploy-checklist.md` - Pre-deployment testing checklist  
- `/public/deploy-guide.md` - iOS installation & setup guide

### Outreach Assets (For Marketing):
- `/outreach/influencer_contacts.md` - Press release for distribution
- `/outreach/email_templates.md` - Email templates for influencers  
- `/outreach/influencer_outreach_plan.md` - Influencer contact strategy
- `/outreach/outreach_execution_log.md` - Day 1 outreach metrics

### App Files:
- `/src/` - React component source code
- `/public/` - Static assets (icons, manifest, service worker)
- `/memory/` - Daily development notes

---

## 🎯 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 18.3.1 |
| **Vite** | Build Tool & Dev Server | 5.4.21 |
| **Zustand** | State Management | 4.5.2 |
| **Service Worker** | Offline Caching | PWA Ready |
| **TypeScript** | (Optional) Type Safety | Recommended |

---

## 📱 iOS PWA Installation

### Manual Install (Recommended for Beta Testing):
1. Open Safari on iPhone/iPad
2. Navigate to your deployed URL
3. Tap "Share" button (⎈ icon)
4. Select "Add to Home Screen"
5. Done! App appears like native app on home screen

### Features After Install:
- Full-screen mode without address bar  
- Offline support when WiFi disconnected
- Native app-like experience
- Push notifications support (future)

---

## 🔄 Git Workflow

### Development:
```bash
git checkout -b feature/game-feature-name  # Create new branch
git add . && git commit -m "Add new game mechanic"
git push origin feature/game-feature-name
```

### Production Deployment:
- Push to `main` branch triggers auto-deploy via GitHub Actions
- Review deployment on GitHub Pages/Netlify/Vercel dashboard

---

## 📊 Key Metrics

Track app performance after deployment:

| Metric | Target | Current |
|--------|--------|---------|
| Load Time (4G) | <1 second | ⏳ Pending deploy |
| iOS PWA Install Rate | >30% of visitors | ⏳ Pending analytics |
| D7 Retention | 25%+ | ⏳ Post-launch |
| App Store Rating | 4.5★+ | N/A (PWA) |

---

## 🚀 Roadmap

### Phase 1 ✅ (Current):
- [x] Core games built and tested
- [x] iOS PWA compatible
- [x] Offline support via service worker  
- [x] Production build completed
- [x] Deployment to GitHub repository

### Phase 2 🚧 (Next):
- [ ] Deploy to production hosting (Netlify/Vercel/GitHub Pages)
- [ ] Beta testing with target audience
- [ ] Gather user feedback and optimize
- [ ] Create App Store version via Capacitor (optional)

### Phase 3 🔮 (Future):
- [ ] Additional game mechanics
- [ ] Social sharing features
- [ ] In-app purchases (monetization)
- [ ] Cloud sync for progress tracking

---

## 🤝 Contributing

This is a project-focused repository. Contributions are welcome!

### How to Contribute:
1. Fork this repository
2. Create feature branch: `git checkout -b feature/your-feature-name`
3. Commit changes with clear messages
4. Push to your fork
5. Open Pull Request with description of what changed

### Code Style:
- React hooks preferred (useState, useEffect)
- Component-based architecture
- Clean separation of concerns
- Consistent naming conventions

---

## 📖 License

This project is licensed under the MIT License - see [`LICENSE`](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Party Games Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Support & Contact

**Project:** Party Games App  
**Developer:** Party Games Team  
**Email:** party-games-dev@example.com (placeholder)

### Community:
- GitHub Issues: Create issues for bugs/feature requests
- Discussions: Ask questions in repository discussions tab

---

## ⚡ Quick Deployment Commands

### One-Command Deploy to Netlify:
```bash
npm install -g netlify-cli && netlify deploy --prod --dir=/dist
```

### One-Command Deploy to Vercel:
```bash
npm install -g vercel && vercel --prod
```

### Push to GitHub (Auto-deploy):
```bash
git push origin main
```

---

## 🎉 Summary

**What you have now:**
- ✅ Fully functional party games app (3 core games)
- ✅ iOS-compatible PWA with offline support  
- ✅ Production build in `/dist/` folder
- ✅ Ready for deployment to Netlify/Vercel/GitHub Pages
- ✅ Marketing assets and outreach documentation

**Next steps:**
1. Deploy to preferred platform (Netlify recommended)
2. Share URL with beta testers
3. Gather feedback and iterate
4. Optional: Create App Store native version via Capacitor

---

**Last Updated**: April 19, 2026  
**Build Status**: ✅ Production Ready  
**GitHub Repository**: Ready for pushing to deployment
