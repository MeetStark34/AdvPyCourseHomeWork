# Deployment Guide

This guide will help you deploy the AdvPyCourse Workspace website to production.

## Prerequisites

- Git repository containing the `web/` folder
- Vercel or Render account (free tier works)
- Node.js 18+ installed locally (for testing)

## Method 1: Vercel (Recommended)

### Quick Deploy

1. **Install Vercel CLI** (optional, for command line deployment)
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository
   - **Important**: Set the root directory to `web`
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Deploy via CLI**
   ```bash
   cd web
   vercel
   ```

### Configuration

Vercel should auto-detect everything, but if needed:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `out` (for static export)
- **Install Command**: `npm install`
- **Root Directory**: `web` (if deploying from repository root)

### Environment Variables

No environment variables are required for this project.

### Custom Domain

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Method 2: Render

### Setup

1. Go to [render.com](https://render.com)
2. Click "New +" → "Static Site"
3. Connect your Git repository

### Configuration

- **Name**: advpycourse-workspace (or your choice)
- **Root Directory**: `web`
- **Build Command**: `npm run build`
- **Publish Directory**: `out`
- **Auto-Deploy**: Yes (recommended)

### Custom Domain

1. Go to your site settings
2. Navigate to "Custom Domains"
3. Add your domain and configure DNS

## Method 3: Static Hosting (Netlify, GitHub Pages, etc.)

### Build Locally

```bash
cd web
npm install
npm run build
```

This creates a static export in the `out/` directory.

### Deploy to Netlify

1. Drag and drop the `out/` folder to [netlify.com/drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm i -g netlify-cli
cd out
netlify deploy --prod
```

### Deploy to GitHub Pages

1. Push the `out/` directory contents to a `gh-pages` branch
2. Enable GitHub Pages in repository settings

## Method 4: Self-Hosted (VPS, AWS, etc.)

### Using Docker (Optional)

Create a `Dockerfile` in the `web/` directory:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t advpycourse-workspace .
docker run -p 80:80 advpycourse-workspace
```

### Using Node.js Server

The built-in Next.js server can be used:

```bash
npm run build
npm start
```

Then use a process manager like PM2:
```bash
npm i -g pm2
pm2 start npm --name "workspace" -- start
pm2 save
pm2 startup
```

## Verification

After deployment, verify:

1. ✅ All 4 themes work correctly
2. ✅ Landing page loads and transitions smoothly
3. ✅ All navigation buttons work
4. ✅ Windows open and close properly
5. ✅ Theme persistence works (refresh page)
6. ✅ Responsive design works on mobile
7. ✅ No console errors

## Troubleshooting

### Build Fails

- Check Node.js version (18+)
- Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors: `npm run lint`

### Routing Issues

- Ensure `next.config.js` has `output: 'export'` for static hosting
- For SPA routing, ensure your hosting supports client-side routing

### Assets Not Loading

- Check that all imports use relative paths
- Verify `public/` folder is included in deployment
- Check browser console for 404 errors

### Theme Not Persisting

- Ensure localStorage is not blocked
- Check browser privacy settings
- Test in incognito mode

## Performance Optimization

The site is already optimized, but for further improvements:

1. **Image Optimization**: Add actual images to `public/` and use Next.js Image component
2. **Font Optimization**: Fonts are loaded via Google Fonts with `display=swap`
3. **Code Splitting**: Already handled by Next.js
4. **Caching**: Set appropriate cache headers in your hosting platform

## Monitoring

Consider adding:

- **Analytics**: Vercel Analytics, Google Analytics, or Plausible
- **Error Tracking**: Sentry for production error monitoring
- **Performance**: Lighthouse CI for continuous performance monitoring

## Updates

To update the deployed site:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to Git
4. Automatic deployment will trigger (if configured)
5. Or manually redeploy via hosting platform

## Support

For issues or questions:
- Check the main README.md in the web/ folder
- Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Check hosting platform documentation

---

**Happy Deploying! 🚀**