[README.md](https://github.com/user-attachments/files/34509413/README.md)
# Career Saathi

Try the work before you choose the career.

Career Saathi helps students in Classes 9 to 12 explore 279 careers. Each career comes with a short hands-on activity you can do at home. If you enjoy it, add the career to your list. If not, skip it.

**Live site:** https://satyamtiwari00.github.io/CareerSathee/

## What it does

- Lists 279 careers in 8 fields, from engineering and government services to technical trades.
- Gives each career one practical activity with 3 steps, the time it takes and the cost (free or under ₹100).
- Works in English and Hindi. Switch with the language buttons at the top. The choice is remembered on the device.
- Lets students mark "I enjoyed this" or "Not for me", then copy their own list.
- Search by name, or filter by field, interest and time.
- Works on phones, in light and dark mode.

## Install on a phone

Open the live site in Chrome on Android, tap the menu, then "Install app" (or "Add to Home screen"). It opens full screen like an app and works offline after the first visit.

To get an Android APK from the same site, go to pwabuilder.com, enter the live site address, and choose Android. After you change `index.html` or the fonts, change `CACHE` in `sw.js` (for example `career-saathi-v2`) so phones pick up the new version.

## Source and limits

- Career names, fields and page numbers come from the NCERT and UNICEF **Career Cards Part 2** (2025).
- The short descriptions and the activities were written for this project. They are **not part of NCERT** and have not yet been reviewed by teachers or career counsellors.
- Salary, fees, entrance exams, study paths and colleges are **not** included. Read the original career card (page number shown on each career) and official websites for those.
- Activities are for exploring. They do not predict what a student should become.

## Run or edit it

The site is `index.html` plus a `fonts/` folder. Keep them together. Open `index.html` through any web server (for example GitHub Pages) to run it. No install is needed. Career data is inside `index.html`.

## Privacy

The site loads nothing from other websites. The fonts are in `fonts/` (OFL-licensed: Bricolage Grotesque, DM Sans, IBM Plex Mono, Noto Sans Devanagari; licence files are in the same folder), so visitors' IP addresses are not sent to Google or any other third party. The only data kept is the language choice and the "enjoyed / not for me" marks, and they stay in the student's own browser.

To add another language, add it to the `LANGS` list in the script, then add its text to the `UI` table and the name tables next to it, and add that language key to each career's text fields.

## Status

Prototype. Next steps: add card-level details (study path, exams, fees, colleges) field by field, test with real students and teachers, and review every activity for accuracy and safety.

## Credits

Design pass guided by the unslop method by Damir Sokolovsky (CC BY 4.0). Career data: NCERT and UNICEF India, Career Cards Part 2.
