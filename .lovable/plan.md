
# Redesign to match gulabdevi.org (donation-focused)

Refocus the public site around the real Gulab Devi Teaching Hospital brand and its charity/donation mission, mirroring the structure, tone, and imagery from gulabdevi.org.

## Visual direction

- Deep teal brand (`#0F5D5B`-ish, close to the current tokens) as the solid header/footer background — flat, not gradient — matching gulabdevi.org's chrome.
- Prominent red **DONATE US** CTA button in the navbar (matches source site).
- Serif-free, clean sans stack (keep Poppins/Inter). Large uppercase hero headings in white over a full-bleed hospital photo, exactly like source.
- Body sections on white / very light gray with red accent headings for donation calls-to-action.

## Imagery (hotlinked from gulabdevi.org)

Use the real photos directly via their public URLs (no download needed):

- Hero building shot — the front-of-hospital image on the homepage
- `Cath-Lab-1.jpg` — Cardiology card + services banner
- `CS-OT-1-1.jpg` — Cardiac Surgery
- `ameer-din.jpg` — Pulmonology
- `building-5.jpg` — Thoracic Surgery
- `history_plat-1024x743.jpg` — Quaid-e-Azam plaque (Our Honor section)
- `urology-dept.jpg` — Stories section background
- 3 news thumbnails (Hypertension walk, Asthma day, Paediatric camp)

All referenced as `https://gulabdevi.org/wp-content/uploads/...` in `<img src>` — no assets pipeline changes.

## Homepage rebuild (`src/routes/index.tsx`)

Rewrite to mirror gulabdevi.org section order:

1. **Hero** — full-bleed hospital photo, centered white text: "GULAB DEVI TEACHING HOSPITAL / Non-Government, Not-For-Profit, Charity-Based", plus red "Donate Now" button.
2. **Donation call band** — red heading "GIVE YOUR ZAKAT, SADQAH AND DONATIONS…", supporting paragraph, big Donate CTA.
3. **Our Honor** — Quaid-e-Azam quote + plaque image, two-column.
4. **Our Impact** — 2024-25 stats grid (Bed Strength 1200, Bed Occupancy 296K+, Outdoor Patients 350K+, Emergency 70K+, Radiology 150K+, Cardiology 50K+, Cath Lab 1K+, Surgeries 50K+, Lab Tests 478K+) using existing `AnimatedCounter`.
5. **Our Departments** — 4 image cards (Cardiology, Cardiac Surgery, Pulmonology, Thoracic Surgery) with real photos.
6. **Our Services** — Cath Lab banner image + copy + "See More".
7. **News & Events** — 3 latest news cards with real thumbnails/titles from source.
8. **Stories** — quote pull-out with urology dept background image.
9. **Sticky floating donate button** on all pages.

## Navbar / Footer tweaks (small)

- `Navbar.tsx`: replace teal gradient top strip with solid teal; change nav items to match source (Home, About Us, Departments, For Donors, Our Institutions, Contact); style Donate button red (`bg-red-600`).
- `Footer.tsx`: keep structure, update copy to emphasize donation channels + real address `Main Ferozepur Road, Opposite Arfa Kareem Tower, Lahore`.
- Update `HOSPITAL` mock in `src/lib/mock-data.ts` (address, phone `+92-42-99230247-50`, email `info@gulabdevi.org`, tagline about charity-based care).

## Donate page (`src/routes/donate.tsx`)

- Reword copy around Zakat / Sadqah / Sponsorship.
- Add impact photo strip using real dept images.
- Keep existing amount picker but relabel tiers to source-site style (Lab panel, Consultation, ICU day, Angioplasty).

## Out of scope (unchanged)

- Patient portal, admin dashboard, booking flow, doctors/departments detail pages — the redesign is limited to the public homepage chrome, donate page, navbar, footer, and mock hospital contact data.
- No backend/auth changes.

## Files touched

- `src/routes/index.tsx` — full rewrite
- `src/routes/donate.tsx` — copy + imagery pass
- `src/components/site/Navbar.tsx` — nav items, red donate button, solid top strip
- `src/components/site/Footer.tsx` — copy pass
- `src/lib/mock-data.ts` — HOSPITAL contact fields
