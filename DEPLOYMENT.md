# Deployment Guide — Apna.co Clone

## Prerequisites
- Node.js v18+ installed
- Git installed
- GitHub account
- Vercel or Netlify account (free)

---

## Step 1: Push to GitHub

```bash
# 1. Create new repo at github.com (name: apna-clone)
# 2. Then run:
git remote add origin https://github.com/YOUR_USERNAME/apna-clone.git
git branch -M main
git push -u origin main
```

---

## Step 2A: Deploy to Vercel (Recommended)

### Via Vercel Dashboard (Easiest)
1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `apna-clone` GitHub repository
4. Settings (auto-detected for Vite):
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**
6. Your live URL will be: `https://apna-clone-xxx.vercel.app`

### Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel          # Follow prompts (dev deploy)
vercel --prod   # Production deploy
```

---

## Step 2B: Deploy to Netlify

### Via Netlify Dashboard
1. Go to https://netlify.com and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect GitHub → Select `apna-clone`
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**
6. Your URL: `https://apna-clone-xxx.netlify.app`

> The `public/_redirects` file (already included) handles SPA routing on Netlify.

### Via Netlify CLI
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

---

## Step 2C: Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json:
# "homepage": "https://YOUR_USERNAME.github.io/apna-clone",
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

npm run deploy
```

> Add `base: '/apna-clone/'` to `vite.config.js` for GitHub Pages subdirectory hosting.

---

## Environment Variables (Future)

When adding backend, create `.env.local`:
```
VITE_API_URL=https://your-api.com
VITE_FIREBASE_KEY=xxx
```

Access in code: `import.meta.env.VITE_API_URL`

---

## Custom Domain

On Vercel/Netlify:
1. Go to project Settings → Domains
2. Add your custom domain (e.g., `apna-clone.yourdomain.com`)
3. Update DNS records at your domain registrar
4. SSL certificate is auto-provisioned (free)

---

## Continuous Deployment

Both Vercel and Netlify auto-deploy on every `git push` to `main`.
Pull requests get preview URLs automatically.
