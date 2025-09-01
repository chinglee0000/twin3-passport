# Figma to HTML/Tailwind Conversion Guide

## Overview
This document outlines the conversion of the Twin3 Passport dashboard design from Figma to HTML and Tailwind CSS.

## Files Created
1. `figma-dashboard.html` - Basic HTML layout
2. `figma-dashboard-detailed.html` - Detailed responsive layout
3. `figma-design-system.css` - Extracted design system
4. `fetch-figma.js` - Figma API data fetcher

## Design Structure Analysis

### Main Frame: `1440px`
- **Type**: FRAME
- **Layout**: Vertical scrolling container
- **Width**: 1440px (desktop-first)
- **Background**: Dark theme with gradient overlay

### Key Components Identified

#### 1. Header Section (`Section 1`)
- **Background**: Semi-transparent black with backdrop blur
- **Layout**: Horizontal flex with space-between
- **Padding**: 64px horizontal, 16px vertical

#### 2. Profile Section
- **Avatar**: 64x64px circular image with edit icon
- **User Info**: Name + career badge
- **Fonts**: Kanit (Light 300) for name, Roboto for labels

#### 3. Wallet Section
- **Background**: Glass morphism effect
- **Content**: Truncated wallet address with copy icon
- **Typography**: Kanit ExtraLight (275 weight)

## Layer Name Mapping

### Figma Layer → HTML Class
```
Container → .max-w-7xl.mx-auto
Profile → .profile-section
Avatar → .avatar-container
user-name → .user-name
Career-title → .career-badge
wallet-address → .wallet-address
earned-badges → .earned-badge
```

## Typography System

### Font Families
- **Kanit**: Primary UI text (Light 300, ExtraLight 275)
- **Inter**: Secondary text and headings
- **Roboto**: Form labels and system text

### Font Sizes (from Figma)
- User Name: 24px (line-height: 32px)
- Wallet Address: 14px (line-height: 21px)
- Badge Text: 12px, 14px, 16px

## Color Palette

### Background Colors
- Primary: `#0a0a0a` (dark background)
- Glass: `rgba(255, 255, 255, 0.1)` (10% white)
- Glass Border: `rgba(255, 255, 255, 0.2)` (20% white)

### Badge Colors
- Success: `#dcfce7` background, `#166534` text
- Coin: `#fef3c7` background, `#92400e` text  
- Matrix: `#e0e7ff` background, `#3730a3` text

## Layout System

### Grid Structure
```html
<div class="w-full max-w-[1440px] mx-auto">
  <header class="flex justify-between items-center">
    <div class="profile-section">
      <!-- Avatar + User Info -->
    </div>
    <div class="wallet-section">
      <!-- Wallet Address -->
    </div>
  </header>
</div>
```

### Spacing (from Figma variables)
- Item spacing: 24px, 32px
- Padding: 64px (desktop), 16px (mobile)
- Gap between elements: 8px, 16px, 24px

## Responsive Breakpoints

### Desktop (1440px+)
- Full layout with all elements visible
- 64px horizontal padding

### Tablet (768px - 1024px)
- Reduced padding to 32px
- Maintained horizontal layout

### Mobile (< 768px)
- Stack profile and wallet sections vertically
- Reduced avatar size to 48px
- 16px horizontal padding

## Interactive Elements

### Edit Icon
- Position: Absolute bottom-right of avatar
- Size: 20x20px
- Background: `#414751` with black border

### Copy Button
- Icon-only button next to wallet address
- Hover state with opacity change

### Badges
- Rounded corners (16px radius)
- Icon + text layout
- Color-coded by type

## Implementation Notes

### Glass Morphism Effect
```css
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
backdrop-filter: blur(8px);
```

### Avatar with Edit Icon
```html
<div class="relative">
  <img class="w-16 h-16 rounded-full" />
  <div class="absolute -bottom-1 -right-1 edit-icon">
    <!-- Edit SVG -->
  </div>
</div>
```

### Career Badge Component
```html
<div class="inline-flex items-center px-3 py-1 rounded-2xl bg-success-bg text-success-text">
  <svg class="w-4 h-4 mr-1"><!-- Star icon --></svg>
  Junior Developer
</div>
```

## Accessibility Considerations

1. **Alt text** for avatar images
2. **ARIA labels** for interactive buttons
3. **Focus states** for keyboard navigation
4. **Color contrast** meets WCAG guidelines
5. **Semantic HTML** structure

## Browser Support

- Modern browsers with CSS Grid and Flexbox
- Backdrop-filter support (Safari 9+, Chrome 76+)
- CSS custom properties support

## Next Steps

1. Add remaining dashboard sections
2. Implement interactive functionality
3. Add animations and transitions
4. Optimize for performance
5. Add dark/light theme toggle
