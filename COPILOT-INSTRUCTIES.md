# Copilot-instructies — Samen aan tafel

Kopieer de prompt hieronder in Copilot Chat (VS Code, met deze map geopend via
File → Open Folder).

---

## Prompt

Ik heb een bestaande, werkende webapplicatie in deze workspace: een landingspagina
plus een online cursus, in vanilla HTML/CSS/JS zonder frameworks of build-stap.

Lees en beoordeel uitsluitend deze bestanden:

- `#index.html` — landingspagina en de shell van de cursus
- `#assets/site.css` — het volledige design system (tokens, componenten, print)
- `#assets/app.js` — de cursuslogica (leerpad, module, les, ontdekplan, opslag)

Lees `assets/slides.js` en `assets/photos.js` NIET. Dat zijn databestanden
(cursusteksten en base64-foto's) van honderden kB; die zijn niet bedoeld voor review
en lopen vast in de chat.

Achtergrond die je nodig hebt:

- De app heeft vier views in `app.js`: `dash` (leerpad), `module` (moduleoverzicht),
  `lesson` (les) en `plan` (ontdekplan). Er is één renderfunctie die HTML-strings
  bouwt en één gedelegeerde click-handler op `#app`.
- Lesinhoud komt als kant-en-klare HTML uit `window.COURSE_SLIDES` (208 schermen) en
  wordt in `#screen` geplaatst. De klassen in die content (`.opt`, `.opt-list`,
  `.fb-grid`, `.callout`, `.premium-field`, `.menu-card`, `.example-table` …) worden
  gestyled in `site.css` onder `[data-screen]`. Die klassenamen mogen NIET veranderen.
- Voortgang en antwoorden staan in localStorage onder de keys
  `rust_rond_eten_viewed`, `rust_rond_eten_volledig_progress` en
  `rust_rond_eten_answers`. Het formaat van `answers` moet ongewijzigd blijven,
  anders verliezen bestaande gebruikers hun ontdekplan.
- Foto's worden op de landingspagina toegewezen via `[data-photo]` en in de cursus via
  `window.MODULE_PHOTOS`. Er mogen geen nieuwe afbeeldingen bijkomen.

Beoordeel gericht op:

1. Bugs of edge cases in `app.js` (state, restore van antwoorden, print, export, reset).
2. Accessibility: toetsenbordnavigatie, focus states, aria-attributen, contrast,
   feedback die niet alleen op kleur leunt.
3. Mobiel gebruik: touch targets ≥ 44px, leesbreedte, sticky topbar en onderste
   lesnavigatie, drawer.
4. Consistentie van het design system in `site.css`: gebruik van de tokens, dubbele
   of overbodige regels, afwijkende spacing/radii/schaduwen.
5. Performance van het laden (grote data-bestanden, base64-foto's, lazy loading).

Geef per punt: bestand, regelnummer, wat er misgaat en een concreet voorstel.
Stel geen refactor naar een framework voor en voeg geen dependencies toe.
