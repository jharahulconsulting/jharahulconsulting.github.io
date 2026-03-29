# Design System Documentation

## 1. Overview & Creative North Star: "The Curated Authority"
This design system rejects the "commodity SaaS" aesthetic in favor of a high-end editorial experience. Our Creative North Star is **The Curated Authority**. It combines the technical precision of a global software provider with the sophisticated spatial awareness of a premium architectural journal.

To break the "template" look, we move away from rigid, boxed-in grids. Instead, we utilize **intentional asymmetry**, where large typography overlaps subtle background shifts, and white space is treated as a structural element rather than a void. This creates a rhythmic flow that feels intentional, bespoke, and premium.

---

## 2. Colors: Tonal Architecture
The palette is built on "Trustworthy Blues" and "Professional Grays," but its application must be sophisticated. We do not use color to decorate; we use it to architect space.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or separate content blocks. 
*   **The Technique:** Boundaries must be established through background color shifts. For example, a section using `surface-container-low` (#f5f3f3) sitting directly against the main `surface` (#fbf9f9). 
*   **The Goal:** This creates a seamless, "molded" look that feels integrated and expensive.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to create nested depth:
1.  **Base:** `surface` (#fbf9f9)
2.  **Sectioning:** `surface-container-low` (#f5f3f3) for large layout blocks.
3.  **Interaction/Cards:** `surface-container-lowest` (#ffffff) for high-priority floating elements.
4.  **Emphasis:** `surface-container-high` (#e9e8e7) for recessed utility areas or sidebars.

### The "Glass & Gradient" Rule
To elevate the "Modern" brand pillar:
*   **Glassmorphism:** For floating navigation or overlay menus, use semi-transparent `surface` colors with a `backdrop-blur` of 12px to 20px. 
*   **Signature Gradients:** For primary CTAs and hero backgrounds, utilize a subtle linear gradient from `primary` (#003b93) to `primary_container` (#0051c3) at a 135-degree angle. This adds "soul" and depth that a flat fill cannot provide.

---

## 3. Typography: Editorial Rhythm
We use **Inter** as our primary typeface. Its geometric clarity conveys a "tech-forward" reliability. The hierarchy is designed to be high-contrast to mimic high-end print media.

*   **Display Scale (`display-lg` to `display-sm`):** These are your "statements." Use them with tight letter-spacing (-0.02em) and high-contrast placement. Don't be afraid to let a `display-lg` headline occupy 60% of a hero section's width.
*   **Headline & Title:** Use `headline-lg` (2rem) for section entries. Titles should be used for card headings and sub-sections to maintain a clear, authoritative path for the eye.
*   **Body & Label:** Use `body-lg` (1rem) for readability. `body-sm` and `label-md` should be reserved for metadata or secondary supporting text to ensure the UI remains uncluttered.
*   **The Monospace Accent:** Occasionally use a `monospace` font at a `label-sm` scale for technical data points or serial numbers to reinforce the "Software & Services" brand identity.

---

## 4. Elevation & Depth: Tonal Layering
Depth is achieved through "stacking" rather than artificial lighting effects.

*   **The Layering Principle:** Place a `surface-container-lowest` card (Pure White) on a `surface-container-low` (Pale Gray) background. This creates a soft, natural "lift" without the need for a shadow.
*   **Ambient Shadows:** If a shadow is required for a floating state (like a dropdown or an active card), it must be **Ambient**. 
    *   **Specs:** Blur: 24px–40px, Spread: -4px, Opacity: 4%–8%. 
    *   **Color:** Use a tinted version of `on-surface` (#1b1c1c) rather than pure black to mimic natural light.
*   **The "Ghost Border" Fallback:** If accessibility requires a container definition, use the `outline-variant` (#c3c6d6) at **10% to 20% opacity**. 100% opaque borders are strictly forbidden as they "trap" the design.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), `on_primary` text, `lg` (0.5rem) roundedness.
*   **Secondary:** Ghost style. No background, `outline-variant` at 20% opacity, `primary` text.
*   **Tertiary:** Text-only with a 2px underline appearing only on hover.

### Cards & Lists
*   **Strict Rule:** No divider lines between list items or card sections.
*   **Separation:** Use `spacing-8` (2rem) or `spacing-10` (2.5rem) to create clear content groups.
*   **Style:** `surface-container-lowest` background with `lg` (0.5rem) corner radius.

### Input Fields
*   **Structure:** Minimalist. No heavy boxes. Use a `surface-container-high` background with a `md` (0.375rem) corner radius.
*   **Focus State:** Transition the background to `surface-container-lowest` and add a 2px `primary` bottom-border.

### Service Hero Tiles (Custom Component)
Large-format tiles for service offerings. Use an `asymmetric` layout: Icon in the top-right, `title-lg` in the bottom-left, using `primary_fixed` (#dae2ff) as a subtle hover background shift.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme white space. If a section feels "full," add 2rem of padding.
*   **Do** overlap elements. Let an image slightly bleed into the margin or a headline overlap a background container.
*   **Do** prioritize typography over icons. Let the words do the heavy lifting.
*   **Do** use `secondary` (#b71507) as a precision tool—only for critical alerts, "live" indicators, or a single high-impact call to action.

### Don't
*   **Don't** use 1px solid borders to separate sections. (Refer to the No-Line Rule).
*   **Don't** use default Material Design shadows. They are too heavy for this premium aesthetic.
*   **Don't** center-align everything. Use left-aligned editorial layouts to keep the "Curated Authority" feel.
*   **Don't** use "Blue" for everything. Use the "Professional Grays" (`surface` tiers) for 80% of the UI to make the "Trustworthy Blues" feel more impactful when they appear.