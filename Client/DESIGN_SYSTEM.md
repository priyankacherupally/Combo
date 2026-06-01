# Sea Project Design System

This design system defines the visual language for the Sea Project UI: typography, colors, spacing, buttons, layout, and effects. These guidelines are built from the provided reference visuals and current project token structures.

---

## 1. Brand and Visual Identity

- Font family: `Nunito`
- Core visual mood: calm, modern, ocean-inspired with crisp blue accents and soft neutrals.
- Primary accent color: blue for action states and information.
- Support palette includes neutral surfaces, success, warning, and danger states.

---

## 2. Typography

### 2.1 Font Stack

```scss
$font-family-primary: 'Nunito', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### 2.2 Heading Scale

- **Headline Large**
  - Size: `32px`
  - Line height: `44px`
  - Weight: `800`
  - Letter spacing: `-0.25px`

- **Headline Medium**
  - Size: `28px`
  - Line height: `38px`
  - Weight: `800`
  - Letter spacing: `-0.25px`

- **Headline Small**
  - Size: `24px`
  - Line height: `33px`
  - Weight: `800`
  - Letter spacing: `-0.25px`

### 2.3 Title Scale

- **Title Large**
  - Size: `24px`
  - Line height: `33px`
  - Weight: `400`
  - Letter spacing: `-0.25px`

- **Title Medium**
  - Size: `20px`
  - Line height: `27px`
  - Weight: `500`
  - Letter spacing: `-0.25px`

- **Title Small**
  - Size: `18px`
  - Line height: `25px`
  - Weight: `600`
  - Letter spacing: `-0.25px`

### 2.4 Label Scale

- **Label Large**
  - Size: `14px`
  - Line height: `19px`
  - Weight: `500`
  - Letter spacing: `-0.25px`

- **Label Medium**
  - Size: `12px`
  - Line height: `16px`
  - Weight: `500`
  - Letter spacing: `-0.25px`

- **Label Small**
  - Size: `11px`
  - Line height: `15px`
  - Weight: `500`
  - Letter spacing: `-0.25px`

### 2.5 Body Text

- **Body Large**
  - Size: `16px`
  - Line height: `22px`
  - Weight: `400`
  - Letter spacing: `-0.25px`

- **Body Medium**
  - Size: `16px`
  - Line height: `22px`
  - Weight: `600`
  - Letter spacing: `-0.25px`

- **Body Small**
  - Size: `14px`
  - Line height: `19px`
  - Weight: `400`
  - Letter spacing: `-0.25px`

### 2.6 Key Display Text

- **Welcome**
  - Size: `48px`
  - Weight: `700`

- **KPI Font Size 1**
  - Size: `64px`
  - Weight: `700`

- **KPI Font Size 2**
  - Size: `56px`
  - Weight: `700`

---

## 3. Color System

### 3.1 Core Palette

| Token | Use | Value |
|---|---|---|
| `--color-primary` | Primary actions, links, highlights | `#6366F1` |
| `--color-primary-deep` | Strong emphasis, hover, active states | `#4F46E5` |
| `--color-accent` | Secondary accent, complementary CTA | `#EC4899` |
| `--color-success` | Success messages, positive status | `#10B981` |
| `--color-warning` | Warnings, caution states | `#F59E0B` |
| `--color-danger` | Errors, destructive actions | `#EF4444` |
| `--color-info` | Informational accents | `#0EA5E9` |

### 3.2 Neutral and Surface Palette

| Token | Use | Value |
|---|---|---|
| `--bg-base` | Dark background, page shell | `#0F172A` |
| `--bg-soft` | Light surface, cards, panels | `#F8FAFC` |
| `--text-on-dark` | Text on dark surfaces | `#F8FAFC` |
| `--text-on-light` | Text on light surfaces | `#0F172A` |

### 3.3 Extended Sea Tones

- `--sea-light-1`: `#E8F0FF` (soft blue surface)
- `--sea-light-2`: `#DCE7FF` (lighter background shade)
- `--sand`: `#F3F7FB` (neutral surface)
- `--storm`: `#1E293B` (deep dark tone)

---

## 4. Spacing and Layout

### 4.1 Border Radius

- `--radius-sm`: `8px`
- `--radius-md`: `12px`
- `--radius-lg`: `16px`
- `--radius-xl`: `24px`

### 4.2 Shadow / Elevation

- `--shadow-sm`: `0 1px 2px rgba(15, 23, 42, 0.08)`
- `--shadow-md`: `0 8px 24px rgba(15, 23, 42, 0.08)`
- `--shadow-lg`: `0 16px 40px rgba(15, 23, 42, 0.12)`

### 4.3 Breakpoints

- **Mobile**: up to `768px`
- **Tablet**: `769px` to `1024px`
- **Desktop**: `1025px` and above

---

## 5. Button System

Button styles should be consistent across primary, secondary, and tertiary variants, with distinct states for default, hover, active, and disabled.

### 5.1 Button Sizes

| Size | Height | Padding |
|---|---|---|
| XS | `32px` | `0 12px` |
| S | `36px` | `0 14px` |
| M | `40px` | `0 16px` |
| L | `48px` | `0 18px` |

### 5.2 Button Variants

#### Primary

- Background: `var(--color-primary)`
- Hover: `var(--color-primary-deep)`
- Text: `#FFFFFF`
- Disabled: opacity `0.5`, background `#CBD5E1`

#### Secondary

- Border: `1px solid var(--color-primary)`
- Background: transparent
- Hover: `rgba(99, 102, 241, 0.08)`
- Text: `var(--color-primary)`
- Disabled: border `1px solid #CBD5E1`, text `#94A3B8`

#### Tertiary

- Background: transparent
- Text: `var(--color-primary)`
- Hover: `rgba(99, 102, 241, 0.08)`
- Disabled: text `#94A3B8`

---

## 6. Usage Guidelines

### 6.1 Text hierarchy

- Use **Headline Large** for page titles and major section headers.
- Use **Title** styles for section headings and card titles.
- Use **Body** text for general content and form labels.
- Use **Label** text for metadata, helper text, and tight UI labels.

### 6.2 Color usage

- Reserve `--color-primary` for primary CTAs, links, and interactive elements.
- Use `--bg-soft` for cards and surfaces on a dark page.
- Use `--color-success`, `--color-warning`, and `--color-danger` only for status messages and alerts.

### 6.3 Layout

- Keep horizontal padding consistent across breakpoints.
- Use the same border radius values across cards, buttons, and modals to maintain a cohesive feel.

---

## 7. Token Example

```scss
:root {
  --font-family: 'Nunito', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --color-primary: #6366F1;
  --color-primary-deep: #4F46E5;
  --color-accent: #EC4899;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-danger: #EF4444;
  --color-info: #0EA5E9;
  --bg-base: #0F172A;
  --bg-soft: #F8FAFC;
  --text-on-dark: #F8FAFC;
  --text-on-light: #0F172A;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.08);
  --shadow-md: 0 8px 24px rgba(15, 23, 42, 0.08);
  --shadow-lg: 0 16px 40px rgba(15, 23, 42, 0.12);
}
```

---

## 8. Notes

- If the Sea Project uses a darker shell, keep `--bg-base` as the main page background and use `--bg-soft` for elevated cards.
- For the welcome dashboard and KPI panels, use large display typography with strong blue accents to emphasize key metrics.
- Keep button styling simple and consistent across default, hover, pressed, and disabled states.
