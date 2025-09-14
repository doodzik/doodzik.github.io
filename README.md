# Frederik Dudzik's Website

A modern, minimalist personal website built with Gatsby and TypeScript, inspired by clean design principles.

## Features

- Clean, dark theme design
- Book bibliography with greyscale covers
- SEO-friendly blog structure preservation
- Fully responsive design
- TypeScript support

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Deployment to GitHub Pages

1. Create a new repository on GitHub (e.g., `website`)
2. Initialize git and add remote:
   ```bash
   git init
   git remote add origin https://github.com/yourusername/website.git
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

The site will be available at `https://yourusername.github.io/website/`

## Structure

- `src/pages/` - Main pages
- `src/components/` - Reusable components
- `src/styles/` - Global styles
- `static/` - Static assets

## SEO Preservation

The site maintains the existing URL structure:
- `/digress-into-development/` - Development blog
- `/personal-blog/` - Personal blog

This ensures existing search engine rankings and bookmarks continue to work.