# Wedding Site Development Workflow

This document explains how to preview and publish changes to your wedding website using Claude Code.

## Overview

You have three environments for safe, iterative development:
- **Localhost** (`http://localhost:3000`) - Local development and testing
- **Preview Branch** (`preview`) - Online preview before going live
- **Main Branch** (`main`) - Your live website at kathyandben.com

## The Workflow (4 Simple Steps)

### Step 1: Develop Locally on Localhost
When you ask Claude Code to make changes to your site, Claude will:
- Work on your current branch (usually `main` or `preview`)
- Make the changes you requested
- **NOT commit or push automatically**

You should then:
1. Ask Claude to start the dev server: "Start the dev server"
2. Claude runs: `npm run dev` (starts server at `http://localhost:3000`)
3. Open `http://localhost:3000` in your browser
4. Review the changes locally with hot reload enabled
5. Make any adjustments needed (ask Claude to tweak things)
6. When satisfied, tell Claude: "This looks good, commit these changes"

**Benefits of localhost testing:**
- Instant feedback with hot reload
- No need to push broken code
- Experiment freely without affecting any online version
- See exactly how it will look before deploying

### Step 2: Push to Preview Branch
Once you're happy with the localhost version:
1. Tell Claude: "Push these changes to preview" or "Commit and push to preview"
2. Claude will:
   - Commit your changes with a descriptive message
   - Push to the `preview` branch on GitHub
   - Vercel automatically deploys the preview

### Step 3: Review Online Preview
After Claude pushes to preview:
1. Go to your GitHub repository: `https://github.com/lorenzosoyle/WeddingSite`
2. Look for the preview branch in the branches list
3. Check Vercel for the preview deployment URL
   - OR go to Vercel → Your Project → Deployments
   - Find the deployment for branch `preview`
   - Click the preview URL to see your changes

**Your preview URL will look like:**
`https://wedding-site-git-preview-[your-username].vercel.app`

**Why preview online?**
- Test on real hosting environment
- Check on mobile devices
- Share with others for feedback
- Verify everything works in production

### Step 4: Publish to Live Site (When You're Happy)
Once you've tested on preview and like the changes:

**Option A: Using GitHub (Easiest)**
1. Go to: `https://github.com/lorenzosoyle/WeddingSite`
2. Click "Pull requests"
3. Create a new PR from `preview` → `main`
4. Click "Merge pull request"
5. Your live site at kathyandben.com updates automatically!

**Option B: Ask Claude**
Just say: "Push these changes to the live site" and Claude will create the PR for you to approve.

## Vercel Configuration

To ensure preview deployments work automatically:

1. Go to Vercel → Your Project → Settings
2. Click "Git" in the sidebar
3. Make sure preview deployments are enabled for all branches
4. Vercel will now automatically deploy every branch you push

## Current Branch Setup

- **Main (Production)**: `main` → kathyandben.com
- **Preview (Testing)**: `preview` → Preview URL from Vercel

## Common Commands (For Reference)

You don't need to run these - Claude Code handles them automatically:

```bash
# Check current branch
git branch

# Switch to preview branch
git checkout preview

# Push changes
git push origin preview
```

## Quick Reference: The Full Pipeline

```
localhost:3000 → preview branch → main branch
  (develop)        (test online)    (kathyandben.com)
```

**Three layers of safety = confidence in every change!**

## Tips

- **Always start on localhost** - see changes instantly with hot reload
- **Test on preview before production** - catch issues in a real environment
- **Check mobile responsiveness** - use browser dev tools or real devices
- **Merge to main only when you're happy** - your live site stays safe
- **Use hot reload during development** - the server auto-refreshes when you save files

## Starting the Dev Server

```bash
npm run dev
# or
npm start
```

Then open: `http://localhost:3000`

The dev server includes:
- Hot reload - automatic page refresh when files change
- Live editing features (when `editor-enabled` meta tag is set)
- Runs on port 3000 by default

## Need Help?

Just ask Claude Code:
- "Start the dev server so I can preview this"
- "This looks good, push to preview"
- "Push these changes to the live site"
- "What changes did you make?"
- "Add a new feature and let me test it locally first"

---

Happy building! 🎉
