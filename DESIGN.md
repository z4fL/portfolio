---
name: "Z4FL Portfolio"
description: "A personal full-stack developer portfolio with a terminal-inspired workbench character."
colors:
  base: "#ECE8E1"
  charcoal: "#393E46"
  midnight: "#131A2A"
  highlight: "#F9564F"
typography:
  display:
    fontFamily: "GeneralSans, sans-serif"
    fontSize: "clamp(3rem, 7vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  body:
    fontFamily: "GeneralSans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Fira Code, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  full: "9999px"
spacing:
  compact: "0.75rem"
  standard: "1rem"
  roomy: "1.5rem"
  section: "3.75rem"
components:
  button-primary:
    backgroundColor: "{colors.midnight}"
    textColor: "{colors.highlight}"
    rounded: "0"
    padding: "15px 20px"
  button-primary-hover:
    backgroundColor: "{colors.highlight}"
    textColor: "{colors.midnight}"
    rounded: "0"
    padding: "15px 20px"
  button-secondary:
    backgroundColor: "{colors.base}"
    textColor: "{colors.midnight}"
    rounded: "0"
    padding: "15px 20px"
---

# Design System: Z4FL Portfolio

## Overview

**Creative North Star: "The Developer’s Workbench"**

This portfolio is a focused, midnight-dark workspace where the work is the evidence. Large, humanist display type establishes professional confidence; monospaced labels, terminal windows, code-like section markers, and fine rules make the developer craft tangible without turning the page into a novelty interface.

The system balances restraint with selective expression. Pale text and quiet slate structural lines carry nearly all of the interface, while the coral highlight is reserved for headings, interaction, status, and decisive action. Panels remain flat and border-led, prioritizing inspectability over decorative depth.

**Key Characteristics:**

- Dark, technical, and editorial rather than glossy or futuristic.
- One saturated coral accent against midnight and slate neutrals.
- General Sans for confident reading; Fira Code for code-adjacent metadata.
- Square-edged containers, fine borders, and deliberate, low-friction motion.

## Colors

The palette treats midnight as the working surface, warm off-white as the contrast material, and coral as a scarce signal color.

### Primary

- **Workbench Coral:** interaction and emphasis accent; use for active text, section rules, button reveals, and small status details.

### Neutral

- **Midnight Workspace:** primary site field and dark panel surface.
- **Warm Paper:** bright text and light button fill; its slightly warm cast keeps the dark UI from feeling clinical.
- **Graphite Rail:** restrained structural color for borders, dividers, and inactive chrome.

### Named Rules

**The Signal, Not Fill Rule.** Coral is an intentional signal, not a background system: keep it focused on state, action, and emphasis rather than flooding a full section.

## Typography

**Display Font:** General Sans (with sans-serif fallback)
**Body Font:** General Sans (with sans-serif fallback)
**Label/Mono Font:** Fira Code (with monospace fallback)

**Character:** General Sans provides the portfolio’s confident, approachable professional voice. Fira Code adds a compact, technical annotation layer for roles, section names, tags, filenames, and supporting interface metadata.

### Hierarchy

- **Display** (700, responsive 3rem–5.5rem, 1.05): hero name only; tight tracking creates the strongest visual anchor.
- **Headline** (600–700, 1.25rem–1.5rem, compact): project and skill-group titles.
- **Title** (600, 1.25rem, compact): numbered, uppercase section headings in Fira Code.
- **Body** (400, 1rem–1.125rem, 1.5): biography and project explanation; use muted light text on dark surfaces.
- **Label** (600, 0.625rem–0.75rem, 0.1em tracking, uppercase): technology stacks, controls, and coded interface cues.

### Named Rules

**The Two-Voice Rule.** Use General Sans for human, explanatory, and persuasive copy; use Fira Code only when the text behaves like a label, command, filename, tag, or system annotation.

## Layout

The page uses a single reading column with a broad responsive container, increasing side padding from 1.5rem on small screens to 10rem on extra-large screens. Sections are vertically paced at approximately 3.75rem and marked by a monospace title with a coral-tinted bottom rule.

The hero is a two-column composition from the medium breakpoint upward: narrative and actions stay left, while a compact 72px-wide terminal/gallery module sits to the right. The social rail becomes fixed on large screens; on smaller screens, social links join the hero flow. Skills compress from four columns to two, and project cards move from two columns to a single readable stack.

## Elevation & Depth

This is a flat system. Depth comes from tonal separation—midnight page field, darker terminal/project cards, pale skill cards—and fine slate borders rather than cast shadows. Hover states use coral border shifts, modest icon translation, image scaling, and button reveals rather than lifted surfaces.

### Named Rules

**The Flat-By-Default Rule.** Do not introduce ambient card shadows; borders, surface tone, and motion communicate grouping and interaction.

## Shapes

The prevailing form is square and workmanlike: buttons, cards, terminal frames, selects, and section dividers use crisp, unrounded edges. The only rounded geometry is functional micro-chrome, such as terminal window controls and scrollbar thumbs, where a full pill shape improves recognition.

## Components

### Buttons

The CTA is a coded control rather than a soft pill.

- **Shape:** square-edged (0px) nested panel.
- **Primary:** midnight fill, coral text and hairline inset border, with 15px × 20px inner padding.
- **Hover / Focus:** a skewed coral wipe expands beneath the label; the label changes to warm paper. Preserve a visible keyboard focus treatment when extending the component.
- **Secondary:** warm-paper fill with midnight text; it uses the same wipe interaction.

### Cards / Containers

- **Corner Style:** square-edged (0px).
- **Background:** skill cards use warm paper; project cards and terminal frames use darker midnight/slate surfaces.
- **Shadow Strategy:** none; use a slate border for separation.
- **Border:** thin, muted slate; hover can shift the border toward coral.
- **Internal Padding:** compact to roomy (0.75rem–1.5rem), expanding at large breakpoints.

### Navigation

- **Style:** a fixed left social rail on large screens, reducing to inline hero icons on narrow screens.
- **Typography:** email is vertical Fira Code with wide tracking; icons remain simple monochrome marks.
- **States:** inactive links are muted slate; hover changes to coral and moves the mark upward slightly.

### Terminal Window

- **Style:** a square, bordered frame with a narrow title bar, three colored control dots, a monospace filename, and overflow-hidden content.
- **Behavior:** it is a compact visual proof module for terminal output, profile photography, and brand mark—not a general-purpose dashboard card.

## Do's and Don'ts

### Do:

- **Do** use the midnight field, pale text, slate border structure, and coral signal color as the core palette roles.
- **Do** reserve Fira Code for technical labels, code-like framing, controls, and metadata.
- **Do** keep project evidence image-forward, using square cards and thin borders.
- **Do** use concise transitions for button wipes, image scale, border color, and small icon movement.

### Don't:

- **Don't** add rounded cards, pills, or soft glassmorphism to the primary layout.
- **Don't** introduce ambient drop shadows as the main grouping mechanism.
- **Don't** use coral as a dominant page background or replace the midnight working surface with a light theme by default.
- **Don't** use monospaced type for long-form biography or project narrative.
