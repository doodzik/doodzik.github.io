# Book Cover Management

## Local Storage for Resilience

To ensure the website remains functional even if external image sources become unavailable, book covers are stored locally in the repository.

## Directory Structure

```
static/images/book-covers/
├── mindset.jpg
├── obstacle-is-the-way.jpg
├── fountainhead.jpg
└── ...
```

## Downloading Book Covers

### Automated Download
```bash
npm run download-covers
```

This script will attempt to download all book covers from their current external URLs and save them locally.

### Manual Download Process

If the automated script fails due to anti-bot protection:

1. Visit each book's Amazon page
2. Right-click on the book cover image
3. Save the image to `static/images/book-covers/` with appropriate filename
4. Update the `cover` property in `src/pages/index.tsx` to use local path

### Updating Book Data

When covers are stored locally, update the book objects from:

```javascript
{
  title: "Mindset",
  author: "Carol Dweck",
  cover: "https://m.media-amazon.com/images/I/41-4Vgf2SvL._SL500_.jpg", // External URL
  blurb: "..."
}
```

To:

```javascript
{
  title: "Mindset", 
  author: "Carol Dweck",
  cover: "/images/book-covers/mindset.jpg", // Local path
  blurb: "..."
}
```

## Current Book Sections

The website organizes books into thematic sections:

1. **Cognitive Tools** - Mental models and decision-making frameworks
2. **Learning & Transitions** - Skill acquisition and career changes
3. **Communication** - Cross-cultural communication and influence
4. **Team Dynamics** - Group effectiveness and leadership
5. **Leadership & Management** - Systems thinking and organizational leverage
6. **Strategic Thinking** - Competitive positioning and advantage

## Adding New Books

1. Add the book to the appropriate section in `src/pages/index.tsx`
2. Download the cover image to `static/images/book-covers/`
3. Use local path for the `cover` property
4. Include meaningful `blurb` explaining the book's impact

## Benefits of Local Storage

- **Resilience**: Site remains functional if external sources fail
- **Performance**: Faster loading times (images served from same domain)
- **Control**: No risk of images changing or disappearing
- **Offline Support**: Works in development without internet connection