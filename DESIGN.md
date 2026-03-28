```markdown
# Design System Specification: Clinical Precision & Tonal Depth

## 1. Overview & Creative North Star
**The Creative North Star: "The Clinical Atelier"**

This design system moves away from the sterile, boxed-in nature of traditional healthcare software. Instead, it adopts the persona of a high-end, bespoke architectural firm. The goal is to convey absolute security and professional authority through **Atmospheric Space** rather than rigid lines. 

We achieve a "High-End Editorial" feel by using intentional asymmetry, generous white space (inspired by Swiss grid systems), and a sophisticated layering of surfaces. By eliminating 1px borders and heavy shadows, we create a UI that feels like light passing through frosted glass—modern, clean, and unfailingly precise.

---

## 2. Colors & The "No-Line" Rule
The palette is anchored in a deep, authoritative `primary` (#001944) and balanced by the calming, clinical `secondary` (#046b5e). 

### The "No-Line" Rule
To achieve a premium aesthetic, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through:
*   **Background Shifts:** Use `surface-container-low` (#f3f4f5) for a side rail sitting against a `surface` (#f8f9fa) main body.
*   **Tonal Transitions:** Define workspace areas by shifting from `surface_container_lowest` (#ffffff) to `surface_container` (#edeeef).

### Glass & Gradient Implementation
*   **Signature CTAs:** Main action buttons or high-level hero sections should utilize a subtle linear gradient transitioning from `primary` (#001944) to `primary_container` (#002c6e) at a 135-degree angle. This adds "soul" and depth to the flat navy.
*   **Glassmorphism:** Floating panels (like document previews or quick-action modals) must use `surface_container_lowest` at 85% opacity with a `backdrop-blur` of 12px. This ensures the clinical data underneath is felt but not distracting.

---

## 3. Typography: The Editorial Hierarchy
We utilize a dual-typeface system to balance high-density data readability with an authoritative brand voice.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision and wide apertures. Use `display-lg` (3.5rem) and `headline-md` (1.75rem) with tighter letter-spacing (-0.02em) to create an "Editorial" impact in dashboard summaries.
*   **Body & UI (Inter):** The workhorse for clinical data. Use `body-md` (0.875rem) for all table data and form labels. The high x-height of Inter ensures legibility in high-density document management screens.
*   **Semantic Labels:** Use `label-sm` (0.6875rem) in `all-caps` with 0.05em tracking for metadata or "Compliance Status" indicators to create a clear visual distinction from interactive text.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "heavy" for a modern healthcare platform. We use **Tonal Layering** to define hierarchy.

*   **The Layering Principle:** 
    *   **Base:** `surface` (#f8f9fa)
    *   **Sectioning:** `surface-container-low` (#f3f4f5)
    *   **Interactive Cards:** `surface-container-lowest` (#ffffff)
*   **Ambient Shadows:** If a component must "float" (e.g., a critical alert or a dropdown), use a shadow with a 24px blur, 0% spread, and 6% opacity of `on_surface` (#191c1d). It should look like a natural atmospheric occlusion, not a digital effect.
*   **The Ghost Border:** For high-density tables where separation is mandatory, use a "Ghost Border": `outline_variant` (#c6c5d4) at 15% opacity.

---

## 5. Components & Primitive Styling

### Cards & Metric Modules
*   **Style:** No borders. Use `surface_container_lowest` (#ffffff) background on a `surface_container` (#edeeef) page. 
*   **Layout:** Use `spacing-6` (1.5rem) internal padding. Metrics should be justified left with a `secondary` (#046b5e) accent bar (2px width) on the far left to denote "Clinical" areas.

### Tables (Clinical Files)
*   **Forbid Dividers:** Do not use horizontal lines between rows. Instead, use a alternating background shift: `surface_container_lowest` for even rows and `surface_container_low` for hover states.
*   **Header:** Use `label-md` in `on_surface_variant` (#454652) with a background of `surface_dim` (#d9dadb).

### High-End Buttons
*   **Primary:** `primary` (#001944) background with `on_primary` (#ffffff) text. Corner radius: `md` (0.375rem).
*   **Secondary (Clinical):** `secondary_container` (#9defde) background with `on_secondary_container` (#0f6f62) text. Use this specifically for "Add Patient" or "New Record."

### Input Fields & Document Uploads
*   **Inputs:** `surface_container_low` background with a `ghost border` that turns into a 2px `secondary` (#046b5e) bottom-only border on focus. 
*   **Upload Zones:** Use a dashed `outline` (#767683) at 30% opacity with a `surface_bright` center.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical spacing. Allow for a "wide" left margin (e.g., `spacing-16`) and a "tighter" right content area to create a modern, editorial rhythm.
*   **Do** use `secondary_fixed` (#a0f2e1) for positive status indicators. It feels more "clinical/professional" than a standard bright green.
*   **Do** leverage `surface_tint` (#2b5bb5) at very low opacities (3-5%) as an overlay for selected states in lists.

### Don’t
*   **Don’t** use pure black (#000000). Always use `on_surface` (#191c1d) for text to maintain a high-end, softer contrast.
*   **Don’t** use standard "Warning Yellow." Use the tertiary tones (`tertiary_fixed`) for sophisticated, non-alarming compliance notifications.
*   **Don’t** crowd the interface. If a screen feels full, increase the page height and use `spacing-12` (3rem) to separate major sections. Space is a luxury; use it.

### Accessibility Note
Ensure all text combinations meet a minimum 4.5:1 contrast ratio. When using `secondary` (teal) text on `white`, verify the specific tint provides enough legibility for clinical users in high-glare environments.```