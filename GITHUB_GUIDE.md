# GitHub Guide for Beginners

A friendly introduction to GitHub concepts and workflows for managing your wedding website.

## What is GitHub?

GitHub is like **Google Drive for code**. It stores your website files online and tracks every change you make, so you can:
- See what changed and when
- Go back to previous versions if something breaks
- Work on new features safely without affecting the live site
- Collaborate with others (or with Claude Code!)

## Core Concepts

### Repository (Repo)
Your **repository** is like a project folder that contains all your website files. Your repo is at:
`https://github.com/lorenzosoyle/WeddingSite`

### Branches
Think of branches as **parallel versions** of your website:

- **`main`** - Your live production website (kathyandben.com)
- **`preview`** - Your testing/staging area for new changes

**Why use branches?** They let you experiment safely. Changes on `preview` don't affect your live site until you explicitly merge them.

### Commits
A **commit** is like a save point in a video game. Each commit:
- Saves a snapshot of your files at a specific moment
- Has a message describing what changed
- Can be viewed or reverted to later

Example commit message: "Add RSVP form to website"

### Push & Pull
- **Push** = Send your local changes to GitHub (upload)
- **Pull** = Get the latest changes from GitHub (download)

### Pull Requests (PRs)
A **pull request** is a proposal to merge changes from one branch into another. It's like saying:
> "Hey, I made these changes on the `preview` branch. Can we add them to `main`?"

PRs let you:
- Review changes before they go live
- See exactly what will change
- Add comments or request modifications
- Merge when ready with one click

## Your Workflow

Here's how you'll typically work with GitHub:

### Making Changes

1. **Ask Claude to make changes**
   ```
   "Add a photo gallery to the preview branch"
   ```

2. **Claude works on the preview branch**
   - Makes the changes
   - Commits them with a descriptive message
   - Pushes to GitHub

3. **Preview the changes**
   - Go to Vercel to see the preview deployment
   - URL will be something like: `wedding-site-git-preview-yourname.vercel.app`
   - Test that everything looks good

4. **Publish to live site**
   - Option A: Create a PR on GitHub and merge it
   - Option B: Ask Claude: "Push this to the live site"

### Creating a Pull Request (Manual)

1. Go to `https://github.com/lorenzosoyle/WeddingSite`
2. Click **"Pull requests"** tab
3. Click **"New pull request"** button
4. Set: `base: main` ← `compare: preview`
5. Click **"Create pull request"**
6. Review the changes shown
7. Click **"Merge pull request"** when ready
8. Your live site updates automatically!

## Common GitHub Pages

### Repository Home
`https://github.com/lorenzosoyle/WeddingSite`

What you'll see:
- **Code tab**: Browse all your files
- **Branches dropdown**: Switch between branches
- **Commits**: History of all changes
- **README.md**: Documentation (if you have one)

### Branches Page
`https://github.com/lorenzosoyle/WeddingSite/branches`

- See all branches
- Compare branches
- Delete old branches you don't need

### Pull Requests
`https://github.com/lorenzosoyle/WeddingSite/pulls`

- View open PRs
- See merged PRs (history)
- Review changes before merging

### Commit History
`https://github.com/lorenzosoyle/WeddingSite/commits/main`

- See timeline of all changes
- Click any commit to see what changed
- Useful for finding when something broke

## GitHub + Vercel Integration

When you connect GitHub to Vercel (your hosting service):

- **Every push to `main`** → Automatically deploys to kathyandben.com
- **Every push to `preview`** → Creates a preview URL you can test
- **Every PR** → Shows a preview link right in GitHub

This is called **Continuous Deployment** - your site updates automatically when you merge changes!

## Safety Tips

### Branch Protection (Recommended)

You can set up rules to protect `main`:

1. Go to: Settings → Branches → Add rule
2. Branch name pattern: `main`
3. Check these options:
   - ☑ Require pull request before merging
   - ☑ Require status checks to pass (if you add tests later)

**What this does**: You can't accidentally push directly to `main`. All changes must go through a PR, giving you a chance to review first.

### Best Practices

1. **Always work on `preview` first**
   - Test changes before merging to `main`
   - Your live site stays stable

2. **Write clear commit messages**
   - Good: "Add hotel recommendations to travel section"
   - Bad: "Update stuff" or "Fix"

3. **Review PRs before merging**
   - Check the "Files changed" tab
   - Make sure nothing unexpected is there
   - Test the preview deployment

4. **Keep branches up to date**
   - Merge `main` into `preview` regularly if you make hotfixes
   - Or just recreate `preview` from `main` when starting new work

5. **Delete old branches**
   - After merging a feature branch, delete it
   - Keeps your repo clean

## Common Tasks

### Viewing Recent Changes
```bash
# See last 10 commits
git log --oneline -10

# See what files changed in a commit
git show <commit-hash>
```

Or on GitHub:
- Go to "Commits" tab
- Click any commit to see changes

### Comparing Branches
On GitHub:
- Go to your repo
- Click "Compare" next to branch dropdown
- Select two branches to compare

### Reverting a Mistake
If you merge something bad:
1. Go to the PR that was merged
2. Click "Revert" button
3. This creates a new PR that undoes the changes
4. Merge the revert PR

## Visual Guide to Your Setup

```
Your Computer (Local)
    ↕ push/pull
GitHub (Remote)
├── main branch ──→ Vercel ──→ kathyandben.com (Live Site)
└── preview branch ──→ Vercel ──→ preview-url.vercel.app (Test Site)
```

## Helpful GitHub Features

### Watch List
- Click "Watch" on your repo to get email notifications
- You'll know when changes are pushed

### Releases
- You can tag important milestones
- Example: "v1.0 - Initial Launch" or "v2.0 - Added Photo Gallery"
- Go to: Releases → Create a new release

### Issues
- Track bugs or feature requests
- Like a to-do list for your project
- Example: "Issue #3: Add directions to venue"

### Insights
- See graphs of your activity
- View commit history over time
- See which files change most often

## Troubleshooting

### "Merge Conflict"
This happens when the same file was changed in two different ways.

**How to fix:**
1. Pull the latest changes: `git pull origin main`
2. Git will mark the conflicts in your files
3. Edit the files to resolve conflicts
4. Commit the resolution
5. Push again

Or ask Claude: "Help me resolve this merge conflict"

### "Branch is Behind"
Your local branch doesn't have the latest changes from GitHub.

**How to fix:**
```bash
git pull origin main
```

### "Push Rejected"
Someone else (or you from another computer) pushed changes.

**How to fix:**
```bash
git pull --rebase origin main
git push origin main
```

## Learning Resources

- **GitHub Docs**: https://docs.github.com
- **GitHub Skills**: https://skills.github.com (interactive tutorials)
- **Git Basics**: https://git-scm.com/book/en/v2

## Quick Reference Commands

```bash
# Check which branch you're on
git branch

# Switch to preview branch
git checkout preview

# Switch to main branch
git checkout main

# See current status (what's changed)
git status

# See recent commits
git log --oneline

# Pull latest changes from GitHub
git pull origin main

# Push your changes to GitHub
git push origin main
```

## Your Current Setup

✅ **Main branch**: Production site (live at kathyandben.com)
✅ **Preview branch**: Testing area (deployed to Vercel preview URL)
✅ **Old auto-generated branches**: Deleted and cleaned up
✅ **Workflow documentation**: Added in WORKFLOW.md

## Next Steps

1. **Optional: Set up branch protection** on `main` (see Safety Tips above)
2. **Bookmark your GitHub repo** for easy access
3. **Check Vercel dashboard** to see your two deployments (main + preview)
4. **Make a test change** on preview to see the workflow in action

## Questions?

Just ask Claude Code:
- "How do I create a pull request?"
- "Show me recent changes to the site"
- "What's the difference between push and pull?"
- "Help me merge preview into main"

---

Happy coding! 🚀
