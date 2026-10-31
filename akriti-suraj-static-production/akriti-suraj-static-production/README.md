# Akriti & Suraj — The Royal Wedding Experience
### A Bespoke Traditional Indian Wedding Invitation Website | November 2026

Welcome to the official, bespoke luxury royal wedding invitation website for **Akriti Kumari & Suraj Jha**.

---

## 1. Official Wedding Details

- **Bride**: Akriti Kumari (आकृति कुमारी)
- **Groom**: Suraj Jha (सुरज झा)
- **Haldi & Mehendi**: 24 November 2026
- **Wedding Ceremony (शुभ विवाह)**: 25 November 2026
- **Invitation From**: Uday Kant Jha & Family (उदय कान्त झा एवं समस्त परिवार)
- **Venue**:
  Haripur Baxi Tola  
  Kaluahi, Madhubani  
  Bihar – 847229
- **Official Google Maps Location**: [https://maps.app.goo.gl/bU1TK1YJ5fcaMv5r7](https://maps.app.goo.gl/bU1TK1YJ5fcaMv5r7)
- **Official Wedding RSVP Form**: [https://forms.gle/s7G2QcybHKnVwsSp8](https://forms.gle/s7G2QcybHKnVwsSp8)

---

## 2. Technology Compliance

This production package is built strictly following the non-negotiable technical requirements:
- **HTML5**: Semantic, accessible markup.
- **CSS3**: Pure custom CSS with official Indian royal color palette, responsive layout, and keyframe animations. Zero CSS frameworks (No Tailwind, No Bootstrap).
- **Vanilla JavaScript (ES6+)**: Zero JavaScript frameworks or libraries (No React, No Vue, No jQuery, No Node.js).
- **Standalone Static Website**: Can be opened directly in any web browser via `index.html` without installing dependencies, running terminal commands, or executing build pipelines.
- **Vector Graphics**: Original code-generated inline SVGs for Ganesha, palace arches, Vedic mandap, sacred Agni Kund, kalash, diyas, and Mithila architectural gateway. Zero external fragile image dependencies.

---

## 3. Directory Structure

```
akriti-suraj-static-production/
├── index.html                 # Main standalone entry point
├── style.css                  # Royal wedding stylesheet (CSS3)
├── script.js                  # Vanilla JavaScript interactions
├── README.md                  # Documentation and deployment guide
└── assets/
    ├── favicon.svg            # Royal Kalash favicon
    ├── palace-jali.svg        # Mughal/Mithila jali pattern
    └── royal-mandala.svg      # Sacred 16-point royal lotus mandala
```

---

## 4. Features & Highlights

1. **Section 01 — Royal Welcome Screen**:
   - Sacred Sanskrit shloka `॥ श्री गणेशाय नमः ॥` and `शुभ विवाह`.
   - Lord Ganesha animated golden SVG emblem.
   - Grand royal palace archway with golden corner embellishments.
   - Elegant Devanagari and English regal typography.
   - Ambient canvas simulation of gently drifting rose and marigold petals (respecting `prefers-reduced-motion`).
   - "Enter the Celebration" luxury button with smooth scroll.

2. **Section 02 — Wedding Invitation (सप्रेम आमंत्रण)**:
   - Official bilingual wording in Hindi and English.
   - Highlighted centerpiece with bride and groom names.
   - Dedicated royal crest recognizing **Uday Kant Jha & Family**.
   - Direct action buttons: "Add to Calendar" (.ics generation) and "Share Invitation" (Web Share API with clipboard fallback).

3. **Section 03 — Sacred Mantras & Traditional Blessings**:
   - *Ganesh Vandana*: वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
   - *Universal Blessing*: सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः॥
   - *Mangalacharan*: मङ्गलं भगवान् विष्णुः मङ्गलं गरुडध्वजः। मङ्गलं पुण्डरीकाक्षः मङ्गलायतनो हरिः॥
   - Sanskrit typography paired with English translations and sacred emblems.

4. **Section 04 — Live Wedding Countdown**:
   - Fixed target: **25 November 2026 at 00:00:00 IST** (UTC: `2026-11-24T18:30:00Z`).
   - Dynamically calculated in Vanilla JavaScript every second.
   - Displays DAYS, HOURS, MINUTES, SECONDS.
   - Never shows negative numbers and displays "THE WEDDING CELEBRATIONS HAVE BEGUN!" upon reaching zero.

5. **Section 05 — Wedding Celebrations**:
   - **24 November 2026**: Haldi & Mehendi (हल्दी एवं मेहंदी) with traditional ubtan handi and paisley henna code art.
   - **25 November 2026**: The Wedding Ceremony (शुभ विवाह) with sacred Vedic Agni Kund and mandap pavilion code art.

6. **Section 06 — Wedding Destination (Venue)**:
   - Complete official address at Haripur Baxi Tola, Kaluahi, Madhubani, Bihar – 847229.
   - Custom code-crafted Mithila/Madhubani palace architectural gateway under starry skies with glowing lamps.
   - "Get Directions" link pointing to the exact official Google Maps location.
   - One-click "Copy Address" interaction with royal toast feedback.

7. **Section 07 — Premium Wedding RSVP Experience**:
   - Royal invitation envelope with antique gold wax seal ("A & S" monogram).
   - Interactive opening animation revealing the inner invitation card.
   - Direct button connecting to the official Google RSVP Form: [https://forms.gle/s7G2QcybHKnVwsSp8](https://forms.gle/s7G2QcybHKnVwsSp8).
   - "Unable to attend? Let us know." secondary link.

8. **Section 08 — Final Blessing & Closing**:
   - `॥ शुभमस्तु ॥` with closing family benediction.
   - Five traditional brass diyas with animated flickering golden flames.
   - "Back to the Invitation" smooth scroll-to-top button.

9. **Music Player Controller**:
   - Floating maroon-and-gold music controller.
   - Play/Pause toggle, mute/volume slider, dancing sound-wave equalizer bars.
   - Strict adherence: Never autoplays without user interaction.
   - Configured to play `assets/traditional-shehnai-wedding.mp3`. If the audio file is not yet placed, it displays an informative toast without breaking or playing fake synthetic beeps.

---

## 5. GitHub Pages Deployment Instructions

To deploy this static website to GitHub Pages:

1. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new).
   - Name the repository (e.g., `akriti-suraj-wedding`).
   - Select **Public**.
2. **Upload Files**:
   - Push or upload all files from this `akriti-suraj-static-production/` directory directly into the repository root:
     - `index.html`
     - `style.css`
     - `script.js`
     - `assets/` folder
3. **Enable GitHub Pages**:
   - Go to your repository **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
   - Click **Save**.
4. **Live URL**:
   - Within 1–2 minutes, your website will be live at:
     `https://<your-username>.github.io/<repository-name>/`
