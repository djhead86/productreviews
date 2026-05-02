# Kodiak Den — productreviews

Hugo-based affiliate content site for kodiak-den.com, hosted on Cloudflare Pages.

## One-Time Setup (Run These Locally)

After cloning this repo, you need to add the PaperMod theme as a git submodule:

```bash
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
git submodule update --init --recursive
```

Install Hugo if you don't have it:
```bash
# Mac
brew install hugo

# Windows
winget install Hugo.Hugo.Extended
```

## Running Locally

```bash
hugo server -D
```

Then open http://localhost:1313 in your browser.

## Adding a New Article

```bash
hugo new posts/your-article-title.md
```

This creates a draft post in `content/posts/`. Edit the file, set `draft: false` when ready to publish.

## Publishing

Just push to GitHub — Cloudflare Pages auto-deploys on every push to `main`.

```bash
git add .
git commit -m "Add new article"
git push origin main
```

Cloudflare Pages will detect Hugo automatically and build the site. No extra config needed.

## Replacing Amazon Affiliate Links

Every article uses real Amazon search URLs. Once your Amazon Associates account is approved:

1. Search for each product on Amazon
2. Use the "SiteStripe" bar (appears at top of Amazon when you're logged into Associates) to get your affiliate link
3. Replace the URLs in each markdown file — search for `amazon.com/s?k=` and swap them out

## Article Structure

All articles live in `content/posts/`. Each file starts with front matter like:

```yaml
---
title: "Your Title"
date: 2026-05-01
draft: false
description: "Meta description for SEO"
tags: ["home-studio", "microphone", "budget"]
categories: ["Gear Reviews"]
ShowToc: true
---
```

Tags drive the navigation menus. Use: `home-studio`, `podcasting`, `budget`, `comparison`, `audio-interface`, `microphone`.

## Site Config

Edit `hugo.toml` to update the site title, description, social links, and menus.
