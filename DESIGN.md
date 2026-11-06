---
name: Ayush Yadav Portfolio
description: A compact personal note with an interactive pixel companion.
colors:
  paper: "#faf9f6"
  ink: "#272723"
  body-ink: "#4d4d47"
  muted: "#727269"
  rule: "#e2e1d9"
  link: "#385448"
  selection: "#dce5dc"
  pixel-black: "#30322f"
  pixel-white: "#e5e5dc"
  pixel-gold: "#ba843d"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "32px"
    fontWeight: 550
    lineHeight: 1.2
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "15px"
    lineHeight: 1.65
  introduction:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "17px"
    lineHeight: 1.65
  title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 550
  label:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 450
spacing:
  section: "27px"
  project: "17px"
  label-gap: "12px"
components:
  profile-link:
    textColor: "{colors.link}"
    height: "36px"
  pixel-companion:
    backgroundColor: "transparent"
    width: "48px"
    height: "54px"
    padding: "0"
---

# Design System: Ayush Yadav Portfolio

## Overview

**Creative North Star: "A compact personal note"**

A compact personal note on warm paper, with a small sans-serif name, direct links and short factual sections. An original pixel penguin beside the name adds a small, optional interaction while the text remains the main experience.

**Key Characteristics:**
- Warm paper and quiet green links
- One compact reading column
- Geist sans-serif throughout visible text
- A tiny interactive pixel companion

## Colors

### Primary
Quiet green gives contact links, hover feedback and keyboard focus a recognizable emphasis.

### Neutral
Warm paper supports dark identity text, softer reading ink, muted labels and a fine footer rule. Selection uses a light green tint. The companion uses charcoal, pale cream and muted gold pixels.

## Typography

Geist supplies all visible text with Arial and sans-serif fallbacks. The name is modest and slightly tightened; project titles carry the same medium weight. Section labels are small and muted. The introductory paragraph is slightly larger than body copy. At the mobile breakpoint the name becomes 29px and the introduction 16px. Footer copy is 12px; the private-project annotation is 11px.

## Layout

A centered column uses `min(100% - 48px, 620px)`, with 58px top padding and 36px bottom padding. The name and companion share a flex row with an 18px gap. Introduction copy is capped at 55ch. Contact links use a 23px gap. Sections follow a compact vertical rhythm; project headings wrap naturally. At widths of 600px or less, top padding becomes 28px and section spacing becomes 24px. Print uses the full width and hides the companion and skip link.

## Elevation & Depth

The current page is flat, with no shadows. Text hierarchy and whitespace organize the content; a fine rule separates the education footer.

## Shapes

Text sections remain open. The companion is a crisp, square-pixel SVG in a transparent button. Its original 16×18 sprite renders at 32×36px within a 48×54px interaction target.

## Components

- Profile navigation: three text links with a 36px minimum height; green text and a quiet underline.
- Project entry: linked name and short description, or a small private-project annotation when no repository exists.
- Information section: muted heading above body copy, with the same single-column reading order on mobile.
- Education footer: two small text lines below a fine rule.
- Pixel companion: one 3.6-second stepped arrival; activation triggers a 480ms hop. Pointer dragging is bounded to ±32px horizontally and ±20px vertically. Arrow keys move in 8px steps and Home resets position. Reduced motion disables animation and transitions. The static preview in the sidecar represents the sprite; application event handlers supply movement.

Links and buttons use a 2px green focus outline with 5px offset. The skip link becomes visible on focus.

## Do's and Don'ts

- Do keep the name, introduction and project descriptions concise.
- Do preserve visible focus, the skip link and reduced-motion support.
- Do keep companion movement bounded and available from the keyboard.
- Don't invent project claims, skills or repository destinations.
- Don't make the companion a prerequisite for reading or navigation.
