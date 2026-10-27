# Morsalin Ravi — Premium Video Editor & Motion Designer Portfolio

A production-quality, international-standard portfolio website for **Morsalin Ravi**, Video Editor & Motion Designer based in Bangladesh and collaborating with international clients, creative agencies, and brands worldwide.

Built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Three.js**.

---

## Key Features

- **Cinematic Dark Aesthetic**: Obsidian black canvas (`#070709`) with soft-white typography, electric-blue accents, and restrained violet highlights.
- **Interactive 3D Hero Aperture (Three.js)**: Physically based rendering (`MeshPhysicalMaterial`), `RoomEnvironment` reflection mapping, subtle mouse-responsive rotation with exponential damping, and automatic software-WebGL/reduced-motion fallback.
- **Master Showreel Section & Theater Mode**: Large cinematic video presentation with playhead scrubber, timecode readout (`01:45 · 4K DCI · 24FPS`), audio visualizer, and customizable URL configuration.
- **Selected Works (Case Studies)**: Varied editorial Bento grid layout showcasing 6 core disciplines:
  1. *Commercial Video Editing* (HYPERDRIVE — Electric Velocity)
  2. *Brand Advertisement* (AURA NOIR — Luxury Fragrance)
  3. *Motion Graphics* (CHROMA DYNAMICS — 3D Kinetic Identity)
  4. *Social Media Campaign* (PULSE X — Global Creator Launch)
  5. *Cinematic Storytelling* (THE SILENT HORIZON — Narrative Short)
  6. *Product Promotional Video* (SPECTRA MATRIX — Pro Hardware Spotlight)
- **Deep-Dive Case Study Presentation**: Fullscreen modal displaying the Creative Brief, Editorial Role, Post-Production & Motion Techniques, Deliverables, and Demonstration Metrics.
- **Value-Driven Services**: Explains the exact business and engagement value delivered to clients across 6 editorial disciplines.
- **About Morsalin Ravi**: Creative philosophy, primary editing tools (*Adobe Premiere Pro* and *Adobe After Effects* daily drivers, *DaVinci Resolve Studio*, *Cinema 4D*), and remote timezone coverage (GMT+6).
- **01–04 Production Protocol**: Interactive roadmap detailing Discover, Develop, Produce, and Deliver phases with milestones.
- **Client Inquiry Form**: Validated project intake with budget selectors, project type dropdown, and one-click mail client launcher pre-addressed to `morsalinravi2018@gmail.com`.

---

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx        # Bio, core tenets, software suite & benchmarks
│   │   ├── ContactSection.tsx      # Validated inquiry form & direct channels
│   │   ├── Footer.tsx              # Wordmark, verified links, back-to-top
│   │   ├── HeroSection.tsx         # Headline, CTAs, availability status & 3D anchor
│   │   ├── HeroThreeCanvas.tsx     # Three.js PBR floating aperture sculpture
│   │   ├── Navbar.tsx              # Minimal 3-zone top bar contract & mobile drawer
│   │   ├── ProjectDetailModal.tsx  # Fullscreen case study modal
│   │   ├── ProjectPosterCanvas.tsx # Procedural cinematic poster generators
│   │   ├── ProjectsSection.tsx     # Filterable Bento works gallery
│   │   ├── ServicesSection.tsx     # Client-value services breakdown
│   │   ├── ShowreelModal.tsx       # Theater mode video player & URL config
│   │   ├── ShowreelSection.tsx     # Homepage master showreel player
│   │   ├── TestimonialsSection.tsx # Authentic endorsement layout & toggle
│   │   └── WorkflowSection.tsx     # 4-phase production protocol
│   ├── data/
│   │   └── portfolioData.ts        # Central configuration file for all projects & info
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   ├── App.tsx                     # Main layout coordinator
│   ├── index.css                   # Tailwind v4 theme & font declarations
│   └── main.tsx                    # Entry point
├── index.html                      # SEO metadata & JSON-LD schema
├── metadata.json                   # App title and capabilities
└── package.json
```

---

## Central Configuration (`src/data/portfolioData.ts`)

To customize projects, showreel link, or contact information, simply edit `src/data/portfolioData.ts`:

1. **Contact Details**: Update `PERSONAL_CONFIG.email`, `location`, or `socials`.
2. **Showreel URL**: Update `SHOWREEL_CONFIG.videoUrl` with your YouTube, Vimeo, or MP4 link (or paste it directly in the live Theater Mode modal in the browser).
3. **Projects**: Replace demonstration projects in `PROJECTS_DATA` with your real portfolio items.
4. **Testimonials**: Update `TESTIMONIALS_CONFIG.items` with authentic client feedback.

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

---

## Deployment to Vercel

1. Push your repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/new), select your repository.
3. Keep default settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**.
