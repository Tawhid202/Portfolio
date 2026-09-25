# Simple Creative Portfolio

A beginner-friendly portfolio inspired by the editorial / interactive feeling of Digital Meadow Studio.

Built with:

- HTML
- CSS
- Vanilla JavaScript
- No frameworks
- No build tools
- No complicated libraries

## 1. Run it

Open `index.html` in your browser.

For VS Code, the easiest method is to install the **Live Server** extension and choose:

`Open with Live Server`

You can also simply double-click `index.html`.

## 2. Folder structure

```text
my-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── (put your own images here)
```

## 3. Replace the hero image

Find this in `index.html`:

```html
<img id="heroImage"
     src="https://images.unsplash.com/..."
     alt="Temporary portrait">
```

If your image is:

```text
assets/profile_pic.jpeg
```

change it to:

```html
<img id="heroImage"
     src="assets/profile_pic.jpeg"
     alt="Tawhid">
```

## 4. Replace project images

Each project has an image in two places:

1. The visible project image
2. The `data-image` used by the popup

Example:

```html
<article
  class="work-card"
  data-image="assets/project-01.jpg">

  <div class="work-image">
    <img src="assets/project-01.jpg" alt="My project">
  </div>

</article>
```

Do this for each project.

## 5. Replace photography

Put your photographs inside:

```text
assets/
```

Example:

```text
assets/
├── street-01.jpg
├── street-02.jpg
├── landscape-01.jpg
└── mono-01.jpg
```

Then change the `src` values in the photography section.

Each photograph needs a category:

```html
<figure class="photo-item" data-category="street">
```

Available categories:

```text
street
landscape
mono
```

## 6. Change your name

Search for:

```text
Tawhid
```

and replace it with your preferred display name.

## 7. Change the rotating hero words

Open `script.js`.

Find:

```javascript
const roles = [
  "visuals",
  "photographs",
  "designs",
  "stories",
  "websites"
];
```

You can change them to anything:

```javascript
const roles = [
  "photographs",
  "designs",
  "videos",
  "experiments"
];
```

## 8. Change email

Search `hello@example.com` in `index.html`.

Replace it with your real email.

Example:

```html
<a href="mailto:yourname@gmail.com">
  yourname@gmail.com ↗
</a>
```

## 9. Social links

Find:

```html
<div class="socials">
```

Then replace the `href="#"` values.

Example:

```html
<a href="https://instagram.com/yourusername">
  Instagram ↗
</a>
```

## 10. Main JavaScript features

This project currently has four beginner-level interactions:

### Rotating hero text

The hero word changes every 2.2 seconds.

### Project popup

Click a project and a large popup opens.

Press:

- X
- Escape
- outside the popup

to close it.

### Photography filters

Click:

- All
- Street
- Landscape
- Monochrome

to filter photographs.

### Mouse follower

On desktop, a small accent circle follows the mouse.

## 11. Change the colors

Open `style.css`.

At the top:

```css
:root {
  --bg: #f1eee6;
  --text: #171714;
  --muted: #74736d;
  --line: #c9c5ba;
  --accent: #d6ff42;
}
```

For example:

```css
--bg: #ffffff;
--text: #111111;
--accent: #ff4d00;
```

## 12. Important

The current images use remote Unsplash URLs so the portfolio works immediately.

For your final portfolio, replace them with your own files inside `assets/`.

## Next development stages

A good beginner progression is:

1. Replace all placeholder images
2. Add your real projects
3. Add your real social links
4. Add a proper About section
5. Add a dedicated project page
6. Add your own photography gallery
7. Add subtle page transitions
8. Deploy to GitHub Pages / Netlify / Vercel

Do not add React or complicated animation libraries yet. Learn the HTML/CSS/JS structure first.
