# Theme System Documentation

## Overview
This project uses a custom CSS variable-based theme system that overrides DaisyUI's default colors. All primary colors (buttons, backgrounds, text, borders) are unified under theme variables for easy switching.

## Architecture

### Theme Variables (`src/app.css`)
Located in `:root`, these 8 variables control the entire theme:

```css
--theme-primary: #D4AF37;        /* Main buttons, links, accents */
--theme-primary-dark: #B8860B;   /* Hover/focus states */
--theme-primary-light: #FFD700;  /* Highlights, gradients */
--theme-secondary: #B8860B;      /* Secondary elements */
--theme-accent: #FFD700;         /* Special highlights */
--theme-neutral: #1a1a1a;        /* Dark grays */
--theme-base: #000000;           /* Base background */
--theme-text-on-primary: #000000; /* Text color on primary backgrounds */
```

### Component Overrides
These CSS classes override DaisyUI defaults using the theme variables:

- `.btn-primary` - Primary buttons
- `.bg-primary` - Primary backgrounds
- `.text-primary` - Primary text color
- `.border-primary` - Primary borders

## How to Switch Themes

### Method 1: Quick Theme Switch
Edit the 8 theme variables in `src/app.css` under the "THEME SWITCHER" comment.

### Method 2: Pre-built Themes
Uncomment one of the example themes in `src/app.css`:

- **Gold Theme** (current): Luxury gold/black
- **Blue Theme**: Professional blue
- **Green Theme**: Modern green

### Method 3: Create New Theme
1. Define 8 new `--theme-*` variables
2. Test contrast ratios for accessibility
3. Update `--theme-text-on-primary` for proper text contrast

## Files Involved

- `src/app.css` - Theme variables and overrides
- `src/app.html` - Has `data-theme="luxury"` (can be removed if not using DaisyUI themes)
- `src/features/shared/components/` - All UI components (Button, Card, etc.)

## Component Usage

### Buttons
```svelte
<Button variant="primary" glow>Get Started</Button>
```
Automatically uses theme colors with glow effect.

### Backgrounds
```svelte
<div class="bg-primary">Themed background</div>
```

### Text
```svelte
<span class="text-primary">Themed text</span>
```

## Glow Effects

The system includes gold glow effects:
- `glow-primary` - Gold glow shadow
- `glow-accent` - Intense gold glow

## Important Notes

- All overrides use `!important` to ensure DaisyUI compliance
- Theme switching is instant (CSS variables)
- Test on all breakpoints when changing themes
- Maintain WCAG contrast ratios (4.5:1 minimum)
- The `data-theme="luxury"` in HTML can be removed if not using DaisyUI's built-in themes

## Current Theme: Luxury Gold
- Primary: #D4AF37 (Gold)
- Background: Black with animated gradients
- Text: White/Gray on dark, Black on gold
- Glassmorphism effects with gold accents

## Troubleshooting

**Buttons still wrong color?**
- Check if CSS variables are loading
- Verify `!important` declarations
- Restart dev server after CSS changes

**Theme not applying?**
- Clear browser cache
- Check for conflicting CSS
- Verify variable names match

**Need new themed component?**
- Add CSS override using `var(--theme-primary)`
- Use `!important` if overriding DaisyUI
- Test hover/focus states
