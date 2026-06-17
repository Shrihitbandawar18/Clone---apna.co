# Git Commands & Workflow

## Initial Setup

```bash
# Step 1: Initialize Git repository
git init

# Step 2: Configure your identity (first time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Development Phase Commits

```bash
# Phase 1 – Project Setup
git add .
git commit -m "🎉 init: Initialize React + Vite + Tailwind project"

# Phase 2 – Data & Config
git add src/data/jobs.json tailwind.config.js
git commit -m "📦 data: Add 5 realistic mock job listings in JSON"

# Phase 3 – Utilities & Hooks
git add src/hooks/ src/utils/
git commit -m "🔧 feat: Add custom hooks (useJob, useRelatedJobs, useScrollPosition)"

# Phase 4 – Core Components
git add src/components/Header/ src/components/Footer/
git commit -m "✨ feat: Add responsive Header and Footer components"

git add src/components/JobCard/
git commit -m "✨ feat: Add JobCard component with compact and full modes"

git add src/components/JobHighlights/ src/components/CompanyInfo/
git commit -m "✨ feat: Add JobHighlights and CompanyInfo components"

git add src/components/RelatedJobs/ src/components/SkeletonLoader/
git commit -m "✨ feat: Add RelatedJobs and SkeletonLoader components"

git add src/components/StickyApplyButton/
git commit -m "✨ feat: Add StickyApplyButton with confirmation modal"

# Phase 5 – Pages
git add src/pages/JobListing/
git commit -m "📄 feat: Add JobListing page with search and category filters"

git add src/pages/JobDetails/
git commit -m "📄 feat: Add JobDetails page with full 3-column layout"

# Phase 6 – Routing
git add src/routes/ src/App.jsx src/main.jsx
git commit -m "🔀 feat: Configure React Router DOM v6 routing"

# Phase 7 – Polish
git add .
git commit -m "🎨 style: Add skeleton loaders, hover effects, transitions"

git add .
git commit -m "📱 feat: Implement full mobile/tablet/desktop responsiveness"

# Phase 8 – Documentation
git add README.md GIT_COMMANDS.md LICENSE
git commit -m "📝 docs: Add comprehensive README and project documentation"
```

## Push to GitHub

```bash
# Create a new repository on github.com first, then:

git remote add origin https://github.com/YOUR_USERNAME/apna-clone.git
git branch -M main
git push -u origin main
```

## Subsequent Pushes

```bash
git add .
git commit -m "fix: Description of what you fixed"
git push
```

## Useful Git Commands

```bash
git status              # See changed files
git log --oneline       # See commit history
git diff                # See unstaged changes
git stash               # Temporarily save changes
git stash pop           # Restore stashed changes
git branch feature/xyz  # Create a new branch
git checkout feature/xyz # Switch to branch
git merge feature/xyz   # Merge branch into current
```
