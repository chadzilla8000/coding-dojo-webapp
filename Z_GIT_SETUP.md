# Git Repository Setup Guide - Complete Walkthrough

This document provides a comprehensive, step-by-step guide for setting up a professional Git repository with proper branching strategy and GitHub integration. This process was successfully used to set up the Coding Dojo Web App repository.

## 🎯 Repository Overview

**Repository Name**: `coding-dojo-webapp`  
**GitHub URL**: https://github.com/chadzilla8000/coding-dojo-webapp  
**Branching Strategy**: Master → Feature → Development  
**Setup Date**: January 2025

## 📋 Prerequisites

Before starting, ensure you have:

1. **Git installed** on your system
2. **GitHub CLI (gh)** installed and authenticated
3. **Project files** ready for initial commit
4. **GitHub account** with proper permissions

### Verify Prerequisites

```bash
# Check Git installation
git --version

# Check GitHub CLI installation
gh --version

# Check GitHub CLI authentication
gh auth status
```

## 🏗️ Project Structure Setup

### Step 1: Create Essential Files

#### 1.1 Create .gitignore File

Create a comprehensive `.gitignore` file to exclude unnecessary files:

```bash
# Navigate to project directory
cd /path/to/your/project

# Create .gitignore (or use your editor)
touch .gitignore
```

**Essential .gitignore contents for Node.js projects:**

```gitignore
# Node.js dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory
coverage/
*.lcov
.nyc_output

# Environment variables
.env
.env.test
.env.production
.env.local

# IDE and Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Logs
logs
*.log

# Build outputs
dist/
build/
.next
.nuxt

# Temporary folders
tmp/
temp/

# Backup files
*.bak
*.backup
*.old

# Optional: Package lock files (choose based on preference)
# package-lock.json
# yarn.lock
```

#### 1.2 Verify Project Files

Ensure all your project files are in place:

```bash
# List all files in project
ls -la

# Check project structure
tree . # (if tree is installed)
```

## 🚀 Git Repository Initialization

### Step 2: Initialize Local Repository

#### 2.1 Initialize Git

```bash
# Navigate to project root
cd /path/to/your/project

# Initialize Git repository
git init
```

**Expected Output:**
```
Initialized empty Git repository in /path/to/your/project/.git/
```

#### 2.2 Configure Git User (if not already done)

```bash
# Set your name
git config user.name "Your Name"

# Set your email
git config user.email "your.email@example.com"

# Verify configuration
git config user.name
git config user.email
```

### Step 3: Create Initial Commit

#### 3.1 Check Repository Status

```bash
# View current status
git status
```

**Expected Output:**
```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
    .gitignore
    index.html
    package.json
    server.js
    ... (other files)
```

#### 3.2 Stage All Files

```bash
# Add all files to staging area
git add .

# Verify staging
git status
```

#### 3.3 Create Initial Commit

```bash
# Create comprehensive initial commit
git commit -m "Initial commit: [Project Name] with full [description]

- [Key feature 1]
- [Key feature 2]
- [Key feature 3]
- [Any important notes]"
```

**Example for Dojo Web App:**
```bash
git commit -m "Initial commit: Dojo Web App with full frontend-backend integration

- Complete martial arts belt progression system
- Express.js API server with RESTful endpoints
- Frontend with kata runner and progress tracking
- Comprehensive documentation and troubleshooting guide
- Fixed all frontend-backend integration issues
- CORS configuration and proper port management"
```

## 🌿 Branching Strategy Implementation

### Step 4: Create Branch Structure

Our branching strategy follows this hierarchy:
- **`master`**: Production-ready, stable releases
- **`feature`**: Stable feature releases, tested features ready for production
- **`development`**: Active development, testing, experimental features

#### 4.1 Create Feature Branch

```bash
# Create and switch to feature branch
git checkout -b feature

# Verify you're on feature branch
git branch
```

#### 4.2 Create Development Branch

```bash
# Create and switch to development branch (from feature)
git checkout -b development

# Verify branch structure
git branch -a
```

**Expected Output:**
```
* development
  feature
  master
```

## 🌐 GitHub Repository Setup

### Step 5: Create GitHub Repository

#### Option A: Using GitHub CLI (Recommended)

```bash
# Create public repository
gh repo create your-repo-name --public --description "Your project description" --clone=false

# Create private repository (alternative)
gh repo create your-repo-name --private --description "Your project description" --clone=false
```

**Example:**
```bash
gh repo create coding-dojo-webapp --public --description "A gamified coding learning platform using martial arts belt progression to track programming skill development" --clone=false
```

#### Option B: Manual GitHub Creation

1. Go to https://github.com
2. Click "New repository"
3. Enter repository name
4. Add description
5. Choose public/private
6. **DO NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 6: Connect Local Repository to GitHub

#### 6.1 Add Remote Origin

```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/yourusername/your-repo-name.git

# Verify remote
git remote -v
```

#### 6.2 Push Master Branch

```bash
# Switch to master branch
git checkout master

# Push master branch and set upstream
git push -u origin master
```

**Expected Output:**
```
Enumerating objects: 22, done.
Counting objects: 100% (22/22), done.
Delta compression using up to 10 threads
Compressing objects: 100% (22/22), done.
Writing objects: 100% (22/22), 38.28 KiB | 12.76 MiB/s, done.
Total 22 (delta 6), reused 0 (delta 0), pack-reused 0
To https://github.com/username/repo-name.git
 * [new branch]      master -> master
branch 'master' set up to track 'origin/master'.
```

#### 6.3 Push Feature Branch

```bash
# Switch to feature branch
git checkout feature

# Push feature branch and set upstream
git push -u origin feature
```

#### 6.4 Push Development Branch

```bash
# Switch to development branch
git checkout development

# Push development branch and set upstream
git push -u origin development
```

### Step 7: Verify Complete Setup

#### 7.1 Check All Branches

```bash
# View all local and remote branches
git branch -a
```

**Expected Output:**
```
* development
  feature
  master
  remotes/origin/development
  remotes/origin/feature
  remotes/origin/master
```

#### 7.2 Verify GitHub Repository

Visit your GitHub repository URL to confirm:
- All three branches are visible
- Files are properly uploaded
- Repository description is correct
- .gitignore is working (node_modules not uploaded)

## 🔄 Daily Workflow Commands

### Working on Development Branch

```bash
# Switch to development branch
git checkout development

# Pull latest changes
git pull origin development

# Make your changes...

# Stage changes
git add .

# Commit changes
git commit -m "Add: [feature description]"

# Push changes
git push origin development
```

### Creating Feature Releases

```bash
# Switch to feature branch
git checkout feature

# Merge development into feature
git merge development

# Push updated feature branch
git push origin feature
```

### Creating Production Releases

```bash
# Switch to master branch
git checkout master

# Merge feature into master
git merge feature

# Tag the release (optional)
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push master and tags
git push origin master
git push origin --tags
```

## 🛠️ Useful Git Commands Reference

### Branch Management

```bash
# List all branches
git branch -a

# Create new branch
git checkout -b new-branch-name

# Switch branches
git checkout branch-name

# Delete local branch
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name
```

### Status and History

```bash
# Check repository status
git status

# View commit history
git log --oneline

# View detailed commit history
git log --graph --pretty=format:'%h -%d %s (%cr) <%an>'

# View changes in files
git diff
```

### Remote Management

```bash
# View remotes
git remote -v

# Add remote
git remote add remote-name url

# Remove remote
git remote remove remote-name

# Fetch from remote
git fetch origin

# Pull from remote
git pull origin branch-name
```

## 🚨 Troubleshooting Common Issues

### Issue 1: Authentication Problems

```bash
# Re-authenticate with GitHub CLI
gh auth login

# Check authentication status
gh auth status

# Use personal access token if needed
git remote set-url origin https://username:token@github.com/username/repo.git
```

### Issue 2: Merge Conflicts

```bash
# View conflicted files
git status

# Edit conflicted files manually
# Look for <<<<<<< HEAD markers

# After resolving conflicts
git add .
git commit -m "Resolve merge conflicts"
```

### Issue 3: Accidentally Committed Wrong Files

```bash
# Remove file from staging (before commit)
git reset HEAD filename

# Remove file from last commit (after commit)
git reset --soft HEAD~1
git reset HEAD filename
git commit -m "Corrected commit message"
```

### Issue 4: Need to Undo Last Commit

```bash
# Undo last commit but keep changes
git reset --soft HEAD~1

# Undo last commit and discard changes (DANGEROUS)
git reset --hard HEAD~1
```

## 📚 Best Practices

### Commit Messages

Use clear, descriptive commit messages:

```bash
# Good examples
git commit -m "Add: User authentication system"
git commit -m "Fix: API endpoint returning 404 error"
git commit -m "Update: Documentation for new features"
git commit -m "Refactor: Database connection logic"

# Bad examples
git commit -m "fix"
git commit -m "updates"
git commit -m "stuff"
```

### Branch Naming

Use descriptive branch names:

```bash
# Good examples
git checkout -b feature/user-authentication
git checkout -b bugfix/api-404-error
git checkout -b hotfix/security-patch
git checkout -b docs/api-documentation

# Bad examples
git checkout -b temp
git checkout -b test
git checkout -b branch1
```

### Regular Maintenance

```bash
# Regularly pull updates
git pull origin development

# Keep branches up to date
git checkout feature
git merge development
git checkout master
git merge feature

# Clean up old branches
git branch -d old-branch-name
git push origin --delete old-branch-name
```

## 🎉 Success Checklist

After completing this setup, you should have:

- ✅ Local Git repository initialized
- ✅ Proper .gitignore file configured
- ✅ Three-branch structure (master, feature, development)
- ✅ GitHub repository created and connected
- ✅ All branches pushed to GitHub
- ✅ Remote tracking set up for all branches
- ✅ Clean commit history with descriptive messages
- ✅ Repository accessible at GitHub URL

## 📞 Support and Resources

### GitHub CLI Documentation
- Installation: https://cli.github.com/
- Commands: https://cli.github.com/manual/

### Git Documentation
- Official Git docs: https://git-scm.com/doc
- Git cheat sheet: https://education.github.com/git-cheat-sheet-education.pdf

### This Setup
- **Repository**: https://github.com/chadzilla8000/coding-dojo-webapp
- **Created**: January 2025
- **Branches**: master, feature, development
- **Status**: ✅ Successfully deployed

---

**Note**: This document serves as a complete reference for future repository setups. Bookmark this file and refer to it whenever you need to set up a new project with proper Git workflow and GitHub integration.

**Last Updated**: January 2025  
**Version**: 1.0  
**Author**: Setup completed via AI assistance