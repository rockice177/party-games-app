# Party Games App - Pre-Deployment Checklist

## ✅ Before You Deploy (Run These Commands First)

### Step 1: Build Production Bundle
```bash
cd /home/rockice/.openclaw/workspace && npm run build
```

This creates the `/dist` folder with all optimized assets.

---

## 📁 Files to Include in Deployment

### Essential Files (All Included in dist/):
- ✅ `/index.html` - Main HTML with PWA meta tags
- ✅ `/manifest.json` - iOS PWA manifest
- ✅ `/assets/index-[hash].js` - Bundled application code
- ✅ `/assets/vendor-[hash].js` - React/Vendor bundles
- ✅ `/public/sw.js` - Service worker for offline support
- ✅ `/public/deploy-guide.md` - Deployment documentation
- ✅ `/README.md` - Setup guide

### Optional Files (Already in dist/):
- ✅ `/outreach/influencer_contacts.md` - Press release
- ✅ `/outreach/email_templates.md` - Email outreach assets
- ✅ `/docs/deployment-guide.md` - Production deployment guide

---

## 🧪 Pre-Deployment Testing Checklist

### Local Testing:
```bash
# Verify build completes
npm run build && echo "✅ Build successful!"

# Check for production errors
curl http://localhost:3002/ -A "Mozilla/5.0" | grep -o '<title>[^<]*</title>' || echo "❌ Dev server not running"
```

### iOS PWA Testing (On Device):
1. Open browser → localhost URL or deployed domain
2. Tap "Share" button (⎈ on iOS)
3. Select "Add to Home Screen"
4. Verify app opens like native app without address bar
5. Test offline mode by disabling WiFi

### Critical Checks:
- [ ] `/dist/index.html` exists and renders correctly
- [ ] Service worker registers successfully
- [ ] Manifest file validates via Chrome Lighthouse
- [ ] All game components load without errors
- [ ] No console warnings/errors in dev tools

---

## 📤 Deployment Commands by Platform

### Netlify (Recommended):
```bash
# Install Netlify CLI (one-time)
npm install -g netlify-cli

# Deploy to production
cd /home/rockice/.openclaw/workspace
netlify deploy --prod --dir=dist
```

Or drag-and-drop via: https://www.netlify.com/drop

### Vercel:
```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# Deploy to production
vercel --prod
```

### GitHub Pages:
```bash
# Initial deployment
cd /home/rockice/.openclaw/workspace
git init
git add -A
git commit -m "Initial build"
npm run deploy

# Automated future builds via .github/workflows/pages.yml
```

---

## 🎯 Post-Deployment Verification

### Step 1: Confirm Site is Live
```bash
# Check deployment URL responds
curl https://your-deployed-url.com/index.html | grep -o '<title>[^<]*</title>'
```

### Step 2: Test iOS PWA Install (On Device)
- Open Safari on iPhone
- Navigate to deployed URL
- Tap "Share" → "Add to Home Screen"
- Verify app icon appears and opens in full-screen mode

### Step 3: Check Analytics
- Netlify: https://app.netlify.com/dash
- Vercel: https://vercel.com/dashboard/analytics
- Monitor load times and error rates

---

## 🔒 Security Checklist

Before deploying, ensure:
- [ ] No API keys in client-side code
- [ ] Service worker caches static assets properly
- [ ] HTTPS enforced (automatic on all platforms)
- [ ] CSP headers configured via meta tags
- [ ] Build minified and source maps disabled in production

---

## 📊 Monitoring Setup

### After Deployment:
1. **Netlify Analytics**: Automatically enabled (free tier)
2. **Vercel Analytics**: Built-in to Vercel platform
3. **Custom Tracking**: Add Google/Fathom analytics if needed

### Key Metrics to Monitor:
- Load time (target: <1 second on 4G)
- Error rate (target: <0.5%)
- iOS PWA install success rate
- Offline mode functionality

---

## 🚀 Deployment Order Recommendations

### Recommended Approach:

1. **Deploy to Netlify** first (fastest, easiest)
2. **Test on iOS device** thoroughly
3. **Share with beta testers** via deployed URL
4. **Gather feedback** and fix issues
5. **Prepare App Store version** (Capacitor native wrapper) if needed

---

## 💡 Quick Deployment (For Testing Only)

```bash
# Fastest way to test deployment:
cd /home/rockice/.openclaw/workspace
npm run build && echo "✅ Ready for Netlify drag-and-drop"
echo "Drag /dist folder to https://www.netlify.com/drop"
```

---

## 📞 Need Help Deploying?

### Resources:
- [Vite Deployment Docs](https://vitejs.dev/guide/static-deploy.html)
- [Netlify Static Sites Guide](https://docs.netlify.com/sites/static/)
- [Vercel Platform Docs](https://vercel.com/docs/platform/deployments)

### Common Issues & Solutions:
- **"Module not found"**: Run `npm ci` instead of `npm install`
- **iOS PWA doesn't work**: Check manifest.json and apple-touch-icon tags
- **Service worker errors**: Verify `/public/sw.js` exists in dist folder
- **Build fails**: Clear cache with `rm -rf node_modules && npm ci`

---

## ✅ Final Checklist Before Deploying

Run through this before each deployment:

```bash
# 1. Clean build
npm run build

# 2. Check for errors
npm run preview

# 3. Verify dist folder contents
ls -la dist/ && echo "✅ Dist folder ready"

# 4. Confirm manifest exists
test -f dist/manifest.json && echo "✅ Manifest found" || echo "❌ Manifest missing"

# 5. Verify sw.js exists
test -f public/sw.js && echo "✅ Service worker found" || echo "⚠️ Service worker not found"
```

If all checks pass → ✅ Ready to deploy!

---

**Status**: Pre-deployment preparation complete ✅  
**Next Step**: Choose deployment platform (Netlify recommended)
