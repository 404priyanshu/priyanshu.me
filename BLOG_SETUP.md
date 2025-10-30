# Blog Setup Guide

## Future Enhancement: Markdown/MDX Blog Support

This guide outlines how to add blog functionality to support Markdown or MDX posts with image embedding.

### Recommended Approach

#### Option 1: Using React Markdown

```bash
npm install react-markdown remark-gfm
```

Create a blog component that renders `.md` files:
- Store blog posts in `/src/posts/` directory
- Use dynamic imports to load markdown content
- Parse frontmatter for metadata (title, date, author)

#### Option 2: Using MDX

```bash
npm install @mdx-js/rollup
```

Configure Vite to support `.mdx` files:
- Update `vite.config.js` with MDX plugin
- Create blog posts as `.mdx` files with React components
- Support for embedded images and interactive elements

### Suggested Structure

```
src/
  posts/
    2024-01-01-my-first-post.md
    2024-01-15-another-post.mdx
  components/
    Blog/
      BlogList.jsx
      BlogPost.jsx
      BlogPost.css
```

### Features to Implement

1. **Blog List Page**: Display all blog posts with previews
2. **Blog Post Page**: Render individual blog posts
3. **Image Support**: Allow embedding images in posts
4. **Syntax Highlighting**: For code blocks in posts
5. **RSS Feed**: Optional feed for subscribers

### Example Frontmatter

```markdown
---
title: "My First Blog Post"
date: "2024-01-01"
author: "Priyanshu"
description: "A short description of the post"
image: "/images/post-cover.jpg"
tags: ["web-dev", "react"]
---

Your blog content here...
```

## Implementation Steps

1. Install necessary dependencies
2. Configure Vite/build tool for Markdown/MDX
3. Create blog components
4. Add routing for blog pages
5. Style blog posts to match portfolio aesthetic
6. Add blog link to navigation

