# Prasanna Reddy Portfolio

A clean personal portfolio site with a white, Apple-style layout, subtle technical accents, a custom hero section, reveal animations, and content driven from one data file.

## Structure

```text
portfolio/
|-- index.html
|-- css/
|   `-- style.css
|-- js/
|   `-- main.js
|-- data/
|   `-- content.js
`-- assets/
    `-- photos/
        |-- manifest.json
        `-- *.jpeg
```

## Editing Content

Most text, links, stats, projects, skills, travel notes, and footer details live in:

```text
data/content.js
```

Update that file, refresh the browser, and the site will re-render.

## Managing Photos

Put portfolio photos in:

```text
assets/photos/
```

Then run:

```bash
./update-photos.sh
```

The script refreshes the photo manifest so the site can pick up the available images.

## Local Preview

From the project folder:

```bash
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/
```

## Deployment

This repository does not include a custom GitHub Actions deployment workflow.

If GitHub sends a `pages build and deployment` email, that comes from GitHub Pages being enabled in the repository settings, not from a workflow file in this repo. To stop those Pages builds, disable or unpublish GitHub Pages from:

```text
Settings -> Pages
```

The site can still be hosted manually or moved to another static hosting service if needed.
