# 🚀 Apna.co Job Details Page Clone

<div align="center">

![Apna Clone Banner](https://via.placeholder.com/900x300/1B6FFC/FFFFFF?text=Apna.co+Job+Details+Clone)

[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.22-CA4245?style=for-the-badge&logo=react-router)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

**A pixel-perfect, production-ready clone of the Apna.co Job Details page built with React.js, Tailwind CSS, and React Router DOM.**

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Usage](#-usage)
- [Folder Structure](#-folder-structure)
- [Routing](#-routing)
- [Deployment](#-deployment)
- [Git Commands](#-git-commands)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

## 🎯 Project Overview

This project is a fully functional, responsive clone of the [Apna.co](https://apna.co) Job Details page — one of India's leading job platforms. The application replicates the design, layout, typography, spacing, navigation flow, and user experience of the original platform.

Built with modern React best practices including component-based architecture, custom hooks, React Router DOM for navigation, and Tailwind CSS for styling. Mock JSON data powers all 5 job listings with realistic Indian company and job data.

---

## ✨ Features

### 🎨 UI/UX
- ✅ Pixel-perfect clone of Apna.co design
- ✅ Modern, clean card-based layout
- ✅ Consistent typography using Inter font
- ✅ Hover effects and smooth transitions on all interactive elements
- ✅ Loading skeleton animations for better perceived performance
- ✅ Toast/confirmation feedback on apply action

### 📱 Responsive Design
- ✅ **Desktop** (1200px+): 3-column grid with sticky sidebar
- ✅ **Tablet** (768px–1199px): 2-column grid, collapsible elements
- ✅ **Mobile** (<768px): Single column, fixed bottom Apply button
- ✅ Responsive hamburger navigation menu
- ✅ No horizontal overflow on any viewport

### ⚙️ Functionality
- ✅ Dynamic job details rendering from JSON data
- ✅ React Router DOM navigation (`/jobs/1` through `/jobs/5`)
- ✅ Job listing home page with search and category filters
- ✅ Sticky Apply Button (fixed bottom on mobile, floating on desktop scroll)
- ✅ Apply confirmation modal with animated flow
- ✅ Save/bookmark job toggle
- ✅ Share link (clipboard copy)
- ✅ Company Information section with expandable description
- ✅ Job Highlights section with 8 key attributes
- ✅ Related Jobs section with dynamic rendering
- ✅ Filter by category, work mode, and location

### 📄 Pages & Sections
- ✅ **Header** — Logo, navigation links, search bar, auth buttons, responsive mobile menu
- ✅ **Job Listing Page** — Hero search, filter bar, job card grid, empty state
- ✅ **Job Details Page** — Full job information, highlights, responsibilities, requirements, benefits
- ✅ **Company Info** — About, rating, website, industry, employees, founded year
- ✅ **Related Jobs** — Dynamic same-category job cards in sidebar
- ✅ **Footer** — Multi-column links, social icons, app download CTAs, legal links

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React.js | 18.2 | UI component library |
| React Router DOM | 6.22 | Client-side routing |
| Tailwind CSS | 3.4 | Utility-first styling |
| Vite | 5.2 | Build tool & dev server |
| Lucide React | 0.383 | Icon library |

**State Management:** React Hooks (`useState`, `useEffect`, `useMemo`)  
**No external state library required** — all state is local or prop-drilled.

---

## 📸 Screenshots

### Figure 1 – Home / Job Listing Page
![Home Page](https://via.placeholder.com/900x500/F8F9FA/1B6FFC?text=Figure+1+-+Job+Listing+Page)

### Figure 2 – Job Details Page
![Job Details](https://via.placeholder.com/900x500/F8F9FA/1B6FFC?text=Figure+2+-+Job+Details+Page)

### Figure 3 – Company Information Section
![Company Section](https://via.placeholder.com/900x400/F8F9FA/1B6FFC?text=Figure+3+-+Company+Info+Section)

### Figure 4 – Related Jobs Sidebar
![Related Jobs](https://via.placeholder.com/900x400/F8F9FA/1B6FFC?text=Figure+4+-+Related+Jobs+Section)

### Figure 5 – Mobile View
![Mobile View](https://via.placeholder.com/400x700/F8F9FA/1B6FFC?text=Figure+5+-+Mobile+Responsive+View)

---

## 🚀 Installation

### Prerequisites

Make sure you have the following installed:
- **Node.js** v18+ ([Download](https://nodejs.org/))
- **npm** v9+ (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/apna-clone.git

# 2. Navigate to the project directory
cd apna-clone

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open in browser
# Visit: http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📖 Usage

### Available Routes

| Route | Description |
|-------|-------------|
| `/` | Job Listing page — search & browse all jobs |
| `/jobs/1` | Job Details — Senior Frontend Developer at Infosys |
| `/jobs/2` | Job Details — Digital Marketing Manager at Flipkart |
| `/jobs/3` | Job Details — Data Scientist at TCS |
| `/jobs/4` | Job Details — HR Business Partner at Zomato |
| `/jobs/5` | Job Details — Product Manager at Paytm |

### User Flow

1. Open app → **Job Listing Page** appears
2. Use search bar or category filters to find jobs
3. Click any **Job Card** → navigated to **Job Details Page**
4. Read job description, highlights, requirements, and benefits
5. View **Company Information** in sidebar
6. Explore **Related Jobs** in sidebar
7. Click **Apply Now** → confirmation modal → application submitted

---

## 📁 Folder Structure

```
apna-clone/
├── public/                     # Static assets
│   └── favicon.svg
│
├── src/
│   ├── assets/                 # Images, icons, fonts
│   │
│   ├── components/             # Reusable UI components
│   │   ├── Header/
│   │   │   └── Header.jsx      # Sticky top nav, responsive menu
│   │   ├── Footer/
│   │   │   └── Footer.jsx      # Multi-column footer
│   │   ├── JobCard/
│   │   │   └── JobCard.jsx     # Job listing card (normal + compact)
│   │   ├── JobHighlights/
│   │   │   └── JobHighlights.jsx  # 8-attribute highlights grid
│   │   ├── CompanyInfo/
│   │   │   └── CompanyInfo.jsx    # Company details card
│   │   ├── RelatedJobs/
│   │   │   └── RelatedJobs.jsx    # Related jobs sidebar
│   │   ├── StickyApplyButton/
│   │   │   └── StickyApplyButton.jsx  # CTA button + modal
│   │   └── SkeletonLoader/
│   │       └── SkeletonLoader.jsx     # Loading placeholder
│   │
│   ├── pages/
│   │   ├── JobDetails/
│   │   │   └── JobDetails.jsx  # Full job details page
│   │   └── JobListing/
│   │       └── JobListing.jsx  # Home / job search page
│   │
│   ├── data/
│   │   └── jobs.json           # Mock job data (5 jobs)
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx       # React Router configuration
│   │
│   ├── hooks/
│   │   └── index.js            # Custom hooks (useJob, useRelatedJobs, useScrollPosition)
│   │
│   ├── utils/
│   │   └── index.js            # Helper functions
│   │
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # React DOM entry point
│   └── index.css               # Global styles + Tailwind directives
│
├── index.html                  # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind theme extension
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

---

## 🔀 Routing

This project uses **React Router DOM v6** with the following route structure:

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/"         element={<JobListing />} />
    <Route path="/jobs/:id" element={<JobDetails />} />
    <Route path="*"         element={<Navigate to="/" />} />
  </Routes>
</BrowserRouter>
```

The `:id` parameter is dynamic and consumed by the `useJob(id)` custom hook which loads the matching job from `jobs.json`.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Deploy to production
vercel --prod
```

**Or via Vercel Dashboard:**
1. Visit [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repository
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

**Or via Netlify Dashboard:**
1. Visit [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
2. Connect GitHub and select your repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy site**

> ⚠️ **Important for React Router:** Add a `_redirects` file in `/public`:
> ```
> /*    /index.html   200
> ```

### Deploy to GitHub Pages

```bash
# Add gh-pages package
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

npm run deploy
```

---

## 📝 Git Commands

```bash
# Initialize repository
git init

# Initial setup
git add .
git commit -m "🎉 init: Initial project setup with Vite + React + Tailwind"

# After adding components
git add .
git commit -m "✨ feat: Add Header and Footer components"

git add .
git commit -m "✨ feat: Add JobCard component with save/bookmark functionality"

git add .
git commit -m "✨ feat: Add JobHighlights and CompanyInfo components"

git add .
git commit -m "✨ feat: Add StickyApplyButton with confirmation modal"

git add .
git commit -m "✨ feat: Add RelatedJobs and SkeletonLoader components"

git add .
git commit -m "✨ feat: Add JobDetails page with full layout"

git add .
git commit -m "✨ feat: Add JobListing page with search and filters"

git add .
git commit -m "🔀 feat: Add React Router DOM routing configuration"

git add .
git commit -m "📱 feat: Implement responsive design for mobile/tablet/desktop"

git add .
git commit -m "🎨 style: Polish UI, hover effects, transitions, skeleton loader"

git add .
git commit -m "📝 docs: Add README and project documentation"

# Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/apna-clone.git
git branch -M main
git push -u origin main
```

---

## 🔮 Future Improvements

- [ ] **Authentication** — Login/Signup with Firebase or Supabase
- [ ] **Job Search API** — Integrate with RapidAPI Jobs Search endpoint
- [ ] **Saved Jobs** — Persistent saved jobs with localStorage or backend
- [ ] **Application Tracking** — Dashboard to track applied jobs and status
- [ ] **Filters Enhancement** — Salary range slider, experience level, posted date
- [ ] **Pagination** — Infinite scroll or paginated job listings
- [ ] **Job Alerts** — Email notifications for new matching jobs
- [ ] **Resume Upload** — Allow users to upload resume with application
- [ ] **Dark Mode** — System-based and manual dark theme toggle
- [ ] **PWA** — Progressive Web App with offline support
- [ ] **Unit Tests** — Jest + React Testing Library test suite
- [ ] **Employer Portal** — Company side to post and manage jobs
- [ ] **Map View** — Leaflet.js map showing job locations
- [ ] **Multilingual** — Hindi and regional language support

---

## 👨‍💻 Author

**[Your Name]**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-linkedin)
- Email: your.email@example.com

Developed as part of internship assignment at **OriginEdge Technologies**, Ahmedabad.

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ in India | Reference: <a href="https://apna.co">Apna.co</a></p>
  <p><strong>⭐ Star this repo if you found it helpful!</strong></p>
</div>
