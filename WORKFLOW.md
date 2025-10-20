# Wedding Site Development Workflow

This document explains how to preview and publish changes to your wedding website using Claude Code.

## Overview

You have two environments:
- **Preview Branch** (`preview`) - For testing changes before they go live
- **Main Branch** (`main`) - Your live website at kathyandben.com

## The Workflow (3 Simple Steps)

### Step 1: Make Changes on Preview Branch
When you ask Claude Code to make changes to your site, Claude will:
- Work on the preview branch
- Make the changes you requested
- Commit and push to GitHub

### Step 2: Preview the Changes
After Claude pushes changes:
1. Go to your GitHub repository: `https://github.com/lorenzosoyle/WeddingSite`
2. Look for the preview branch in the branches list
3. Check Vercel for the preview deployment URL
   - OR go to Vercel → Your Project → Deployments
   - Find the deployment for branch `preview`
   - Click the preview URL to see your changes

**Your preview URL will look like:**
`https://wedding-site-git-preview-[your-username].vercel.app`

### Step 3: Publish to Live Site (When You're Happy)
Once you've previewed and like the changes:

**Option A: Using GitHub (Easiest)**
1. Go to: `https://github.com/lorenzosoyle/WeddingSite`
2. Click "Pull requests"
3. Create a new PR from `preview` → `main`
4. Click "Merge pull request"
5. Your live site updates automatically!

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

## Tips

- **Always test on preview first** before merging to main
- **Check the Vercel preview URL** after Claude pushes changes
- **Merge to main only when you're happy** with how it looks
- **Your live site stays safe** until you explicitly merge

## Need Help?

Just ask Claude Code:
- "Show me the preview of my changes"
- "Push this to the live site"
- "What changes did you make?"
- "Create a new feature on the preview branch"

---

Happy building! 🎉
