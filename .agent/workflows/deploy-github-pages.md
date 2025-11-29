---
description: Deploy portfolio to GitHub Pages
---

# Deploy Portfolio to GitHub Pages

This workflow will help you deploy your Vite + React portfolio to GitHub Pages using GitHub Actions.

## Prerequisites
- GitHub Pro account ✓
- Git repository initialized ✓
- Portfolio project ready to deploy

## Deployment Steps

### 1. Update Vite Configuration
First, ensure your `vite.config.ts` has the correct base path for GitHub Pages.

### 2. Update package.json Scripts
Add a preview script to test the production build locally.

### 3. Create GitHub Actions Workflow
Set up automated deployment using GitHub Actions.

// turbo
### 4. Install Dependencies
```bash
npm install
```

### 5. Test Build Locally
```bash
npm run build
```

### 6. Commit and Push Changes
```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 7. Enable GitHub Pages
- Go to your repository on GitHub
- Navigate to Settings → Pages
- Under "Build and deployment", select "GitHub Actions" as the source
- The workflow will automatically deploy on push to main branch

### 8. Access Your Site
Your portfolio will be available at:
- `https://<your-username>.github.io/<repository-name>/`
- Or your custom domain if configured

## Post-Deployment

### Verify Deployment
- Check the Actions tab in your GitHub repository
- Ensure the workflow completed successfully
- Visit your deployed site

### Custom Domain (Optional)
If you want to use a custom domain:
1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in repository settings

## Troubleshooting

### Build Fails
- Check the Actions logs for specific errors
- Ensure all dependencies are listed in package.json
- Verify Node.js version compatibility

### Assets Not Loading
- Confirm the `base` path in vite.config.ts matches your repository name
- Check browser console for 404 errors
- Ensure asset paths are relative, not absolute

### Page Shows 404
- Verify GitHub Pages is enabled in repository settings
- Check that the workflow deployed to the `gh-pages` branch
- Wait a few minutes for DNS propagation
