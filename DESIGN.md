---
name: Ayush Yadav Portfolio
description: A personal working paper for inspectable software projects.
colors:
  paper: "#f8f7f3"
  ink: "#292923"
  body-ink: "#505049"
  muted: "#6e6e63"
  rule: "#deddd4"
  link: "#365448"
  selection: "#dedfd3"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "62px"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  introduction:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "17px"
    lineHeight: 1.75
  title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.5
  heading:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.6
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "15px"
    lineHeight: 1.7
  link:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "13px"
  metadata:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "12px"
rounded:
  focus: "1px"
spacing:
  icon-gap: "5px"
  row-gap: "24px"
  section-gap: "36px"
components:
  profile-link:
    textColor: "{colors.link}"
    typography: "{typography.link}"
  project-row:
    padding: "25px 0"
  contact-link:
    textColor: "{colors.link}"
  information-section:
    padding: "36px 0 0"
---

# Design System: Ayush Yadav Portfolio

## Overview

**Creative North Star: "Personal working paper"**

A personal working paper: warm, untextured paper, readable ink, a serif name and quiet sans-serif supporting text. The layout leaves room for factual descriptions and direct links. Thin rules organize the document without introducing cards or decorative surfaces.

**Key Characteristics:**
- Untextured paper and restrained olive links
- One readable column with generous margins
- Serif identity, sans-serif detail
- Flat sections separated by fine rules

## Colors

### Primary

Restrained olive (`link`) marks profile and contact links; project arrows adopt it on hover.

### Neutral

Warm stock (`paper`) carries the whole page. Dark ink (`ink`) anchors identity and titles, softer ink (`body-ink`) supports reading, and muted ink (`muted`) identifies secondary details. Fine dividers (`rule`) structure the page. The selection tint (`selection`) pairs with dark ink for selected text.

**The Quiet Ink Rule.** Keep the palette focused on paper, ink and restrained link emphasis.

## Typography

Newsreader supplies the name; Geist supplies all supporting text. Both load through `next/font` with swap behavior and the fallbacks recorded above.

The name is the only display role. Project titles use the title role; section labels use heading; locations, dates and project tools use metadata. Body text inherits the body role; project descriptions use a more open line height (1.75), while information content uses (1.8). Introductory text uses the introduction role. Contact links are slightly larger (14px) than profile links.

At the mobile breakpoint, the name becomes `clamp(46px, 12.5vw, 64px)`, introduction text becomes (16px), project titles become (16px), and occupation text becomes (13px).

## Layout

The centered document has maximum width (760px), desktop side allowance (64px total), and top/bottom padding (94px / 48px). The introduction ends with open space (55px); its copy is capped at (590px). Project descriptions are capped at (64ch).

At widths up to (600px), side margins become (22px), top/bottom padding becomes (54px / 32px), the location moves beneath the name, and project row padding becomes (23px vertically). Information sections change from a (150px / remaining space) grid with a (28px) gap to a single column with a (13px) gap. Preserve the document's reading order.

## Elevation & Depth

There are no shadows or raised surfaces. Typography, whitespace and single-pixel rules provide hierarchy. Print switches paper to white and ink to black with darker supporting grays, removes outer padding, and avoids splitting project and information sections.

## Shapes

Sections remain open and rectangular. Dividers are fine horizontal rules, with no decorative rounding. The tiny focus radius belongs to keyboard focus only. Arrows are SVG strokes (16px square, stroke width 1.6); there are no shipping raster assets. The favicon is a file SVG.

## Components

**Profile navigation and contact.** Text links use olive ink and inline arrows. Profile navigation is a flex row with a (27px) gap, reduced to (24px) on mobile; link minimum height is (32px). Hover adds an underline. Contact uses a (6px) icon gap.

**Project rows.** Titles link across the row, with the arrow aligned at the far edge. Descriptions sit below, followed by small muted tools text. Each row ends in a fine rule. Hover underlines the title and moves the arrow (2px right / 2px up), transitioning transform and color over (160ms ease-out).

**Information sections.** Muted labels sit beside body content on desktop and above it on mobile. A top rule, margin and padding divide each section from its predecessor.

**Keyboard and motion.** All links receive an olive outline (2px) offset by (6px). The skip link becomes visible at the viewport's top-left on focus, with paper fill and an ink border. Smooth scrolling uses a (32px) top allowance. Reduced-motion preference removes smooth scrolling and arrow transitions; the hover arrow displacement itself remains instantaneous.

## Do's and Don'ts

### Do:
- Do preserve the paper background and a clear name at the top.
- Do use concise, factual descriptions and functioning contact and repository links.
- Do retain visible keyboard focus and the skip link.
- Do preserve reading order when information sections stack on mobile.

### Don't:
- Don't add textured paper, decorative hero artwork, cards or badges to this visual world.
- Don't invent skills, repository links or performance claims.
- Don't substitute raster artwork for the current text and SVG presentation.

## Compact portfolio update

The project selection contains three entries, with five concise feature bullets for private Patchwork Studio. Project tool metadata is omitted. Desktop top padding is 42px, project row padding 16px, and information sections use 17px top margin/padding. Mobile preserves readable body text with tighter section gaps.
