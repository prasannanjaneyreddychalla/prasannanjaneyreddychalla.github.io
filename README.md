# Prasanna Reddy Portfolio

A minimal white portfolio with an Apple-style layout, subtle technical accents inspired by the provided reference, a custom 3D hero scene, reveal animations, and content driven from one data file.

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
    `-- travel/
        `-- img.jpg
```

## Editing Content

Most text, links, stats, projects, skills, travel notes, and footer details live in:

```text
data/content.js
```

Update that file, refresh the browser, and the site will re-render.

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

This is a static site, so it can be deployed on GitHub Pages, Netlify, Vercel, or any static host. For GitHub Pages, push the folder to a repository and enable Pages from the repository settings.
