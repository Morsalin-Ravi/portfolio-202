import { Project, ServiceItem, WorkflowStep, Testimonial, ContactConfig } from '../types';

export const PERSONAL_CONFIG: ContactConfig = {
  name: "Morsalin Ravi",
  title: "Video Editor & Motion Designer",
  email: "morsalinravi2018@gmail.com",
  location: "Bangladesh",
  availability: "Available for select international projects & remote collaboration",
  timeZone: "GMT+6 (Collaborating across US, UK, EU, UAE & APAC timezones)",
  socials: [
    { platform: "LinkedIn", url: "https://linkedin.com", handle: "linkedin.com/in/morsalinravi" },
    { platform: "YouTube", url: "https://youtube.com", handle: "@morsalinravi" },
    { platform: "Behance", url: "https://behance.net", handle: "behance.net/morsalinravi" },
    { platform: "Instagram", url: "https://instagram.com", handle: "@morsalinravi.edits" },
    { platform: "Vimeo", url: "https://vimeo.com", handle: "vimeo.com/morsalinravi" },
    { platform: "X (Twitter)", url: "https://x.com", handle: "@morsalinravi" }
  ]
};

export const SHOWREEL_CONFIG = {
  title: "Morsalin Ravi — Official Creative Showreel",
  year: "2025/2026",
  duration: "01:45",
  fps: "24 FPS",
  resolution: "4K DCI (3840 × 2160)",
  colorProfile: "Rec.709 / Apple ProRes 422 HQ",
  audioMix: "-14 LUFS Broadcast Stereo",
  // Easily replaceable video URL. When empty or standard demo, the app plays an interactive procedural cinema reel player
  videoUrl: "",
  description: "A curated 105-second showcase of rhythm-driven commercial editing, dynamic 3D kinetic typography, precision sound design, and color grading across high-impact campaigns."
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-1",
    slug: "hyperdrive-electric-velocity",
    title: "HYPERDRIVE — Electric Velocity",
    client: "Velocity Motors (Demonstration Project)",
    category: "Commercial Video Editing",
    shortDescription: "High-octane commercial edit blending raw track telemetry with speed-ramped anamorphic cinematography and heavy sound design.",
    creativeBrief: "Create a 60-second adrenaline-fueled launch commercial for a next-generation electric hypercar, emphasizing instant torque, aerodynamic precision, and visceral sensory excitement.",
    role: "Lead Video Editor & Sound Designer",
    techniques: [
      "Dynamic Speed Ramping & Match Cutting",
      "Custom Foley & Multi-Layered Sound Stems",
      "Anamorphic Lens Flare Integration",
      "Paced Editorial Rhythm to 135 BPM Tempo",
      "High-Contrast Nocturnal Color Grading"
    ],
    tools: ["Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve", "FabFilter Audio"],
    deliverables: [
      "1x 60s Global Broadcast Master (16:9 4K)",
      "2x 30s Cutdowns (16:9 & 9:16 Vertical)",
      "3x 15s High-Energy Social Teasers (9:16 4K)",
      "Clean Motion Graphics Title Package"
    ],
    results: "Demonstration benchmark: Designed for peak 92% 3-second hook retention and dynamic sound staging.",
    duration: "01:00",
    year: "2025",
    aspectRatio: "2.39:1 / 16:9",
    featured: true,
    accentColor: "#2563eb",
    theme: "automotive"
  },
  {
    id: "proj-2",
    slug: "aura-noir-luxury-fragrance",
    title: "AURA NOIR — Luxury Fragrance",
    client: "Maison De Luxe (Demonstration Project)",
    category: "Brand Advertisement",
    shortDescription: "An evocative, poetic commercial exploring tactile shadowplay, slow-motion glass reflections, and whisper-quiet cinematic pacing.",
    creativeBrief: "Establish an intimate, mysterious atmosphere for a haute perfumery launch, highlighting the artisanal bottle sculpture and evocative nocturnal mood.",
    role: "Creative Editor & Colorist",
    techniques: [
      "Micro-Contrast Film Tone Emulation",
      "Slow-Motion 120fps Flow Coordination",
      "Subtle Split-Screen Spatial Juxtaposition",
      "Atmospheric ASMR Sound Texturing",
      "Seamless Dissolve Transitions"
    ],
    tools: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "Adobe Audition"],
    deliverables: [
      "1x 45s Cinematic Campaign Film (16:9)",
      "1x 15s Storyboard Teaser (4:5 Social)",
      "Full Color Grade LUT & Master Graded Archival File"
    ],
    duration: "00:45",
    year: "2025",
    aspectRatio: "16:9",
    featured: true,
    accentColor: "#818cf8",
    theme: "luxury"
  },
  {
    id: "proj-3",
    slug: "chroma-dynamics-kinetic-identity",
    title: "CHROMA DYNAMICS — 3D Kinetic Identity",
    client: "Apex Digital Design Summit (Demonstration Project)",
    category: "Motion Graphics",
    shortDescription: "Mind-bending 3D kinetic typography, fluid metallic typography morphing, and rhythmic bass-synced motion branding.",
    creativeBrief: "Deliver the main title opener and stage graphics for an international design festival, capturing digital convergence through fluid chrome forms.",
    role: "Motion Designer & 3D Animator",
    techniques: [
      "3D Typography Extrusion & Deformation",
      "Displacement Shading & Iridescent Reflections",
      "Procedural Kinetic Layout Choreography",
      "Audio-Driven Keyframe Automation",
      "60 FPS Broadcast-Ready Precision Rendering"
    ],
    tools: ["Adobe After Effects", "Cinema 4D / Redshift", "Adobe Illustrator"],
    deliverables: [
      "1x 90s Main Title Sequence (4K DCI)",
      "6x Speaker Name Card Motion Templates (.mogrt)",
      "Looping 3D Stage Background Displays"
    ],
    duration: "01:30",
    year: "2025",
    aspectRatio: "16:9",
    featured: true,
    accentColor: "#38bdf8",
    theme: "motion"
  },
  {
    id: "proj-4",
    slug: "pulse-x-global-creator-campaign",
    title: "PULSE X — Global Creator Launch",
    client: "Pulse Audio (Demonstration Project)",
    category: "Social Media Campaign",
    shortDescription: "Vertical-first viral campaign engineered for instant mobile hook retention, sound-reactive cuts, and kinetic typography overlays.",
    creativeBrief: "Produce a suite of fast-paced, thumb-stopping 9:16 videos introducing wireless studio monitoring headphones to creators and Gen-Z producers.",
    role: "Short-Form Video Editor & Motion Specialist",
    techniques: [
      "Sub-2-Second Hook Structure Optimization",
      "Kinetic Text Captions with Custom Styling",
      "Bass-Drop Audio Synchronization",
      "Seamless Seamless Looping Transitions",
      "Platform-Specific 9:16 Layout Framing"
    ],
    tools: ["Adobe Premiere Pro", "Adobe After Effects", "Photoshop"],
    deliverables: [
      "5x 15s TikTok / Reels Ad Variants (9:16)",
      "3x Carousel Video Loops (1:1 & 4:5)",
      "Complete After Effects Motion Caption Preset"
    ],
    duration: "00:15",
    year: "2025",
    aspectRatio: "9:16",
    featured: false,
    accentColor: "#f59e0b",
    theme: "social"
  },
  {
    id: "proj-5",
    slug: "the-silent-horizon-narrative-short",
    title: "THE SILENT HORIZON — Narrative Short",
    client: "Indie Film Collective (Demonstration Project)",
    category: "Cinematic Storytelling",
    shortDescription: "Meditative dramatic short film edit focusing on human vulnerability, environmental texture, and lingering emotional resonance.",
    creativeBrief: "Piece together over 14 hours of multi-camera documentary and narrative footage into a tight, emotionally resonant 12-minute short film.",
    role: "Narrative Film Editor & Sound Editor",
    techniques: [
      "Documentary Pacing & Story Arc Sculpting",
      "Dialogue Cleaning & Multi-Track Audio Balancing",
      "Subtle L-Cut and J-Cut Storytelling",
      "Color Temperature Grading for Emotional Arc",
      "Surround Sound Spatial Atmosphere Stems"
    ],
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "Adobe Audition"],
    deliverables: [
      "1x 12-Minute Festival Cut (DCP & ProRes 4444)",
      "1x 90s Official Theatrical Trailer",
      "Final Dialogue, Music & Effects (DME) Stems"
    ],
    duration: "12:00",
    year: "2024",
    aspectRatio: "2.39:1",
    featured: true,
    accentColor: "#10b981",
    theme: "narrative"
  },
  {
    id: "proj-6",
    slug: "spectra-matrix-pro-hardware",
    title: "SPECTRA MATRIX — Pro Hardware Spotlight",
    client: "Spectra Tech (Demonstration Project)",
    category: "Product Promotional Video",
    shortDescription: "Ultra-crisp macro product showcase spotlighting aerospace aluminum manufacturing, internal circuitry, and ergonomic craft.",
    creativeBrief: "Showcase the engineering brilliance and industrial design of a flagship studio recording microphone with macro precision.",
    role: "Commercial Video Editor & 3D Motion Artist",
    techniques: [
      "Macro Focus Stacking Edit Coordination",
      "Internal CAD Circuitry Exploded X-Ray Transitions",
      "Studio Reflection & Specular Highlight Enhancement",
      "Precision Sound Design for Mechanical Switches",
      "Clean Clean Spec Callouts & Dimension Overlays"
    ],
    tools: ["Adobe Premiere Pro", "Adobe After Effects", "Cinema 4D"],
    deliverables: [
      "1x 90s Website Hero Product Showcase",
      "4x 15s Feature Spotlight Shorts (9:16)",
      "Interactive 360 Video Loop Assets"
    ],
    duration: "01:30",
    year: "2025",
    aspectRatio: "16:9",
    featured: false,
    accentColor: "#6366f1",
    theme: "product"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "serv-1",
    title: "Commercial Video Editing",
    shortSubtitle: "High-retention visual storytelling that converts",
    description: "Every cut is placed with psychological intent. I craft rhythm-driven edits that grip the viewer from the opening second, establishing clear brand identity and emotional payoff.",
    valueDelivered: "Maximizes viewer watch-time, eliminates viewer drop-off, and elevates brand perception to international broadcast standards.",
    deliverables: ["TV & OTT Commercials", "Brand Launch Films", "Speed-Ramped Promos", "Director's Cut Editions"],
    iconName: "Film",
    keySoftware: ["Adobe Premiere Pro", "DaVinci Resolve"]
  },
  {
    id: "serv-2",
    title: "Motion Graphics & 2D/3D Animation",
    shortSubtitle: "Dynamic typography, kinetic visual systems & 3D depth",
    description: "Transform complex messages and static brand assets into kinetic, visually captivating motion systems. From bespoke title sequences to full 3D product animations.",
    valueDelivered: "Translates abstract concepts into immediate clarity, leaving an unforgettable visual impression on your target audience.",
    deliverables: ["Kinetic Typography", "Logo & Identity Animations", "UI/UX Product Walkthroughs", "Conference Title Sequences"],
    iconName: "Sparkles",
    keySoftware: ["Adobe After Effects", "Cinema 4D", "Illustrator"]
  },
  {
    id: "serv-3",
    title: "Commercial & Brand Advertising",
    shortSubtitle: "Bespoke campaigns tailored for brand prestige & scale",
    description: "Collaborating with creative agencies and ambitious founders to deliver high-production advertising that cuts through market noise and drives decisive consumer action.",
    valueDelivered: "Consistent narrative quality across multi-channel distribution, ensuring high return on production investment.",
    deliverables: ["Product Launch Spots", "Lifestyle Brand Anthems", "App & SaaS Promo Films", "Investor Pitch Videos"],
    iconName: "Megaphone",
    keySoftware: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve"]
  },
  {
    id: "serv-4",
    title: "Social Media Video Production",
    shortSubtitle: "Engineered for algorithmic hook retention & virality",
    description: "Short-form video is a science of milliseconds. I design 9:16 TikTok, Reels, and Shorts content with dynamic pacing, sound effects, and kinetic subtitles that command the feed.",
    valueDelivered: "Stops infinite scrolling, spikes completion rate, and turns casual scrollers into engaged followers and customers.",
    deliverables: ["High-Energy Reels & TikToks", "Custom Styled Subtitles", "E-commerce UGC Remasters", "Sound-Reactive Cutdowns"],
    iconName: "Smartphone",
    keySoftware: ["Adobe Premiere Pro", "After Effects"]
  },
  {
    id: "serv-5",
    title: "YouTube & Creator Content",
    shortSubtitle: "Retention-first long-form editing for high-growth channels",
    description: "Pacing, B-roll selection, meme-timed cuts, and visual gags crafted to keep audiences glued for 15+ minutes while maintaining creator brand authenticity.",
    valueDelivered: "Increases Average View Duration (AVD), boosts YouTube algorithm recommendations, and scales subscriber conversion.",
    deliverables: ["Full Documentary Edits", "Vlog & Challenge Polishing", "Custom Motion Graphics Packs", "High-CTR Thumbnail Frames"],
    iconName: "Video",
    keySoftware: ["Adobe Premiere Pro", "After Effects", "Photoshop"]
  },
  {
    id: "serv-6",
    title: "Cinematic Post-Production & Color",
    shortSubtitle: "Color grading, sound design, and finishing polish",
    description: "Complete post-production pipeline including tonal color grading, audio stem cleaning, atmospheric sound textures, and broadcast master exports.",
    valueDelivered: "Gives your raw camera footage an unmistakable theatrical texture and immersive sonic presence.",
    deliverables: ["Color Grading & LUT Creation", "Multi-Stem Sound Design", "Dialogue Restoration", "Archival Master Exports"],
    iconName: "Sliders",
    keySoftware: ["DaVinci Resolve Studio", "Adobe Audition", "iZotope RX"]
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Discover",
    summary: "Understand the brief, target audience, and emotional tone.",
    description: "We align on your creative vision, brand voice, reference films, and target distribution platforms. I analyze your raw footage, audio assets, and project deadlines to formulate a foolproof editing strategy.",
    milestones: [
      "Creative brief & moodboard analysis",
      "Footage review & media organization",
      "Pacing & soundtrack selection",
      "Timeline & milestone commitment"
    ]
  },
  {
    step: "02",
    title: "Develop",
    summary: "Plan the creative direction, assembly cut, and narrative arc.",
    description: "I construct the primary narrative backbone or commercial structure. We review the rough assembly to confirm the story arc, pacing, and visual rhythm before committing to fine effects.",
    milestones: [
      "Assembly cut & script synchronization",
      "A-roll dialogue selection & story flow",
      "Music tempo & beat-mapping",
      "First pass client alignment"
    ]
  },
  {
    step: "03",
    title: "Produce",
    summary: "Edit, animate, refine, color-grade, and sound-design.",
    description: "This is where the magic happens. I refine cuts to the frame, integrate kinetic motion graphics, paint the color grade for cinematic depth, and build a rich multi-layered sound design.",
    milestones: [
      "Frame-accurate match cutting & speed ramping",
      "2D/3D kinetic typography & visual effects",
      "Cinematic color grading & skin tone balancing",
      "Detailed sound design, foley & audio mastering"
    ]
  },
  {
    step: "04",
    title: "Deliver",
    summary: "Review feedback, polish revisions, and export masters.",
    description: "We review the edit via timestamped feedback. I execute precise refinements and export pristine, platform-optimized masters in all requested aspect ratios.",
    milestones: [
      "Frame-accurate feedback implementation",
      "Master export in ProRes, H.264 & DCI standards",
      "Multi-ratio deliverables (16:9, 9:16, 1:1)",
      "Project archive & organized project files handover"
    ]
  }
];

export const ABOUT_ME_DATA = {
  name: "Morsalin Ravi",
  headline: "Crafting visual rhythm, tension, and emotional connection across every frame.",
  bio: [
    "I am a passionate Video Editor and Motion Designer based in Bangladesh, collaborating seamlessly with international creators, production companies, and ambitious brands across North America, Europe, Asia, and the Middle East.",
    "Video editing is not simply assembling footage—it is sculpting human attention. By merging disciplined editorial pacing, bespoke motion design, tactile sound effects, and emotive color grading, I transform raw production footage into magnetic visual experiences that leave lasting impressions.",
    "Whether it is a 15-second high-conversion commercial or a 15-minute narrative documentary, my mission is singular: deliver post-production that elevates your brand, commands attention, and creates measurable impact."
  ],
  primaryTools: [
    { name: "Adobe Premiere Pro", level: "Primary Editing Suite", years: "Daily Driver", highlight: true },
    { name: "Adobe After Effects", level: "Motion Graphics & VFX", years: "Daily Driver", highlight: true },
    { name: "DaVinci Resolve Studio", level: "Color Grading & Finishing", years: "Specialist", highlight: false },
    { name: "Cinema 4D / Blender", level: "3D Elements & Kinetic Systems", years: "Workflow Asset", highlight: false },
    { name: "Adobe Audition", level: "Sound Design & Audio Cleaning", years: "Audio Suite", highlight: false },
    { name: "Adobe Photoshop / Illustrator", level: "Graphic Assets & Storyboards", years: "Design Kit", highlight: false }
  ],
  corePrinciples: [
    { title: "Rhythm Over Decoration", desc: "Every cut must have a narrative reason. Motion and effects serve the emotional arc, never distracting from the message." },
    { title: "Sound is 50% of the Picture", desc: "A great edit falls flat without immersive audio. I craft layered soundscapes with foley, risers, and subtle atmospheric textures." },
    { title: "Obsessive Attention to Timing", desc: "Milliseconds matter. Tightening two frames can turn an awkward pause into razor-sharp comedic or dramatic tension." },
    { title: "Frictionless Global Collaboration", desc: "Clear communication, reliable milestone delivery, organized project handoffs, and asynchronous cloud workflows." }
  ],
  stats: [
    { value: "48h", label: "Average First Cut Turnaround" },
    { value: "4K DCI", label: "Master Delivery Standard" },
    { value: "100%", label: "Remote Workflow Reliability" },
    { value: "GMT+6", label: "Flexible Timezone Coverage" }
  ]
};

// Testimonial placeholder structure for genuine client quotes
export const TESTIMONIALS_CONFIG = {
  enabled: true,
  notice: "Ready for authentic client reviews and agency recommendations. Real quotes can be directly populated below.",
  items: [
    {
      id: "t-1",
      quote: "Morsalin’s understanding of pacing and sound design completely transformed our product launch. He took raw footage and turned it into an international-caliber commercial that held our audience from frame one.",
      clientName: "David Sterling",
      clientRole: "Creative Director",
      company: "Sterling Vision Media (Sample Endorsement)",
      projectTitle: "HYPERDRIVE Commercial"
    },
    {
      id: "t-2",
      quote: "Collaborating remotely was effortless. Revisions were turned around within hours, communication was crystal clear, and the kinetic typography delivered exceeded our creative brief.",
      clientName: "Elena Rostova",
      clientRole: "Head of Marketing",
      company: "Aura Creative Agency (Sample Endorsement)",
      projectTitle: "Brand Campaign & Social Suite"
    },
    {
      id: "t-3",
      quote: "One of the sharpest motion designers and editors we have worked with. Morsalin doesn't just cut clips—he elevates the storytelling.",
      clientName: "Marcus Vance",
      clientRole: "Founder & Lead Producer",
      company: "Vance Production Studio (Sample Endorsement)",
      projectTitle: "Narrative Short Post-Production"
    }
  ]
};
