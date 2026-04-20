# 🚀 Deploy Guide - Party Games App (iOS Ready)

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

Build files will be in `dist/` folder.

---

## 📱 iOS Deployment Options

### Option A: Progressive Web App (PWA) ⭐ RECOMMENDED

**Pros:**
- Works on iOS Safari immediately
- Add to home screen like a native app
- Fullscreen mode without iframe restrictions
- Offline-capable with service worker

**How it works:**
1. Deploy `dist/` folder to any host (Netlify, Vercel, GitHub Pages)
2. Users visit URL and see "Add to Home Screen" prompt
3. iOS treats it like native app when added

**Test locally:**
```bash
npm run dev
# Open in Safari: http://localhost:3000
# Tap Share → Add to Home Screen
```

### Option B: Capacitor Native Wrapper

Convert web app to native iOS app for App Store:

```bash
npm install -D @capacitor/cli @capacitor/core @capacitor/ios
npx cap init
npx cap add ios
npx cap open ios
# Edit in Xcode, build, submit to App Store
```

### Option C: React Native Hybrid

Use tools like **Expo** or **React Native Web** for native iOS app.

---

## 🎨 Add Custom Icons

Replace placeholder files in `/public/`:

```bash
# 192x192 icon (required for PWA)
icon-192.png

# 512x512 icon (backup)
icon-512.png
```

Create simple gradient + emoji design using tools like:
- **Figma** or **Sketch** → Export PNG
- **Canva** drag-drop
- **https://app.iconify.design/** for SVG icons

---

## 📦 Deployment Platforms

### Netlify (Easiest)
```bash
npm run build
# Drag dist/ folder to netlify.com upload
# Or connect Git repo
# Add iOS icon in App settings
```

### Vercel
```bash
npm run build
vercel deployment add --prod
```

### GitHub Pages
```bash
npm run deploy
git push origin main
```

---

## ✅ Testing Checklist

- [ ] Opens on iOS Safari
- [ ] Can add to home screen
- [ ] Runs in fullscreen mode
- [ ] Works without internet after first load (offline caching)
- [ ] Touch controls responsive
- [ ] All 3 games functional

---

## 🔜 Next Steps

1. Run `npm install`
2. Test locally: `npm run dev`
3. Build for production: `npm run build`
4. Deploy to hosting platform
5. Add custom icons
6. Test on iOS device

---

Need help? Check the README or visit https://github.com/openclaw/openclaw
