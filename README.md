# Career Saathi

**Try the work before you choose the career.**

Career Saathi is a free web app for students in Classes 9 to 12. It lists 279 careers, and each one comes with a short hands-on activity you can do at home. If you enjoy the activity, add the career to your list. If not, skip it.

It runs in any browser, installs on a phone like an app, and works offline. There is no login, no app store download and nothing to pay.

**Open the app:** https://satyamtiwari00.github.io/CareerSathee/

## What you can do in the app

- Browse 279 careers in 8 fields, from engineering and government services to technical trades.
- Open a career to get one practical activity with 3 steps, the time it takes and the cost (free or under ₹100).
- Use it in English or Hindi. Switch with the language buttons at the top. The choice is remembered on the device.
- Mark each career "I enjoyed this" or "Not for me", then copy your own list.
- Search by name, or filter by field, interest and time.
- Pick a random career when you do not know where to start.
- Use it on a phone or a computer, in light or dark mode.

## Install it on a phone

Career Saathi is a Progressive Web App (PWA), so the website itself is the app.

1. Open the app link in Chrome on Android.
2. Tap the menu, then "Install app" (or "Add to Home screen").
3. Open it from the home screen. It runs full screen like any other app.

After the first visit it also works without internet.

To get an Android APK from the same site, go to pwabuilder.com, enter the app link, and choose Android.

## How it is built

The app is plain HTML, CSS and JavaScript. There is no framework, no build step, no server code and no database.

| File or folder | What it is |
| --- | --- |
| `index.html` | The whole app: page, styles, script and the data for all 279 careers. |
| `manifest.webmanifest` | Name, colours and icons used when the app is installed. |
| `sw.js` | Service worker. Saves the app on the device so it opens fast and works offline. |
| `fonts/` | The fonts and their licence files. |
| `icons/` | App icons for the browser tab and the home screen. |

Keep these together in the same folder. The paths inside `index.html` and `sw.js` depend on it.

## Run it on your computer

No install is needed. Serve the folder with any static web server, for example:

```
python3 -m http.server 3000
```

Then open http://localhost:3000. Opening `index.html` directly by double-click also shows the app, but install and offline use only work through a web server.

## Publish a change

The live app is served by GitHub Pages from the `main` branch. A change goes live when it is merged into `main`.

Phones that already have the app show the saved copy first and download the new one in the background, so a change appears the second time the app is opened. To make every phone drop its saved copy at once, change the `CACHE` name at the top of `sw.js` (for example to `career-saathi-v2`). If you add a new font or icon file, add its path to the `FILES` list in `sw.js` as well.

## Add a language

Add the language to the `LANGS` list in the script inside `index.html`. Then add its text to the `UI` table and the name tables next to it, and add that language key to each career's text fields.

## Privacy

The app loads nothing from other websites. The fonts are in `fonts/` (OFL-licensed: Bricolage Grotesque, DM Sans, IBM Plex Mono, Noto Sans Devanagari; licence files are in the same folder), so visitors' IP addresses are not sent to Google or any other third party. The only data kept is the language choice and the "enjoyed / not for me" marks, and they stay in the student's own browser.

## Source and limits

- Career names, fields and page numbers come from the NCERT and UNICEF **Career Cards Part 2** (2025).
- The short descriptions and the activities were written for this project. They are **not part of NCERT** and have not yet been reviewed by teachers or career counsellors.
- Salary, fees, entrance exams, study paths and colleges are **not** included. Read the original career card (page number shown on each career) and official websites for those.
- Activities are for exploring. They do not predict what a student should become.

## Status

Prototype. Next steps: add card-level details (study path, exams, fees, colleges) field by field, test with real students and teachers, and review every activity for accuracy and safety.

## Credits

Design pass guided by the unslop method by Damir Sokolovsky (CC BY 4.0). Career data: NCERT and UNICEF India, Career Cards Part 2.
