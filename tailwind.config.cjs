import { join } from "path";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    join(
      __dirname,
      "src/**/!(*.stories|*.spec).{astro,html,js,jsx,md,svelte,ts,tsx,vue}"
    ),
  ],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
  theme: {
    colors: {
      "base-black": "var(--colors-base-black)",
      "base-transparent": "var(--colors-base-transparent)",
      "base-white": "var(--colors-base-white)",
      gray: {
        25: "var(--colors-gray-25)",
        50: "var(--colors-gray-50)",
        100: "var(--colors-gray-100)",
        200: "var(--colors-gray-200)",
        300: "var(--colors-gray-300)",
        400: "var(--colors-gray-400)",
        500: "var(--colors-gray-500)",
        600: "var(--colors-gray-600)",
        700: "var(--colors-gray-700)",
        800: "var(--colors-gray-800)",
        900: "var(--colors-gray-900)",
        950: "var(--colors-gray-950)",
      },
      brand: {
        25: "var(--colors-brand-25)",
        50: "var(--colors-brand-50)",
        100: "var(--colors-brand-100)",
        200: "var(--colors-brand-200)",
        300: "var(--colors-brand-300)",
        400: "var(--colors-brand-400)",
        500: "var(--colors-brand-500)",
        600: "var(--colors-brand-600)",
        700: "var(--colors-brand-700)",
        800: "var(--colors-brand-800)",
        900: "var(--colors-brand-900)",
        950: "var(--colors-brand-950)",
      },
      error: {
        25: "var(--colors-error-25)",
        50: "var(--colors-error-50)",
        100: "var(--colors-error-100)",
        200: "var(--colors-error-200)",
        300: "var(--colors-error-300)",
        400: "var(--colors-error-400)",
        500: "var(--colors-error-500)",
        600: "var(--colors-error-600)",
        700: "var(--colors-error-700)",
        800: "var(--colors-error-800)",
        900: "var(--colors-error-900)",
        950: "var(--colors-error-950)",
      },
      warning: {
        25: "var(--colors-warning-25)",
        50: "var(--colors-warning-50)",
        100: "var(--colors-warning-100)",
        200: "var(--colors-warning-200)",
        300: "var(--colors-warning-300)",
        400: "var(--colors-warning-400)",
        500: "var(--colors-warning-500)",
        600: "var(--colors-warning-600)",
        700: "var(--colors-warning-700)",
        800: "var(--colors-warning-800)",
        900: "var(--colors-warning-900)",
        950: "var(--colors-warning-950)",
      },
      success: {
        25: "var(--colors-success-25)",
        50: "var(--colors-success-50)",
        100: "var(--colors-success-100)",
        200: "var(--colors-success-200)",
        300: "var(--colors-success-300)",
        400: "var(--colors-success-400)",
        500: "var(--colors-success-500)",
        600: "var(--colors-success-600)",
        700: "var(--colors-success-700)",
        800: "var(--colors-success-800)",
        900: "var(--colors-success-900)",
        950: "var(--colors-success-950)",
      },
      grayblue: {
        25: "var(--colors-grayblue-25)",
        50: "var(--colors-grayblue-50)",
        100: "var(--colors-grayblue-100)",
        200: "var(--colors-grayblue-200)",
        300: "var(--colors-grayblue-300)",
        400: "var(--colors-grayblue-400)",
        500: "var(--colors-grayblue-500)",
        600: "var(--colors-grayblue-600)",
        700: "var(--colors-grayblue-700)",
        800: "var(--colors-grayblue-800)",
        900: "var(--colors-grayblue-900)",
        950: "var(--colors-grayblue-950)",
      },
      graycool: {
        25: "var(--colors-graycool-25)",
        50: "var(--colors-graycool-50)",
        100: "var(--colors-graycool-100)",
        200: "var(--colors-graycool-200)",
        300: "var(--colors-graycool-300)",
        400: "var(--colors-graycool-400)",
        500: "var(--colors-graycool-500)",
        600: "var(--colors-graycool-600)",
        700: "var(--colors-graycool-700)",
        800: "var(--colors-graycool-800)",
        900: "var(--colors-graycool-900)",
        950: "var(--colors-graycool-950)",
      },
      graymodern: {
        25: "var(--colors-graymodern-25)",
        50: "var(--colors-graymodern-50)",
        100: "var(--colors-graymodern-100)",
        200: "var(--colors-graymodern-200)",
        300: "var(--colors-graymodern-300)",
        400: "var(--colors-graymodern-400)",
        500: "var(--colors-graymodern-500)",
        600: "var(--colors-graymodern-600)",
        700: "var(--colors-graymodern-700)",
        800: "var(--colors-graymodern-800)",
        900: "var(--colors-graymodern-900)",
        950: "var(--colors-graymodern-950)",
      },
      grayneutral: {
        25: "var(--colors-grayneutral-25)",
        50: "var(--colors-grayneutral-50)",
        100: "var(--colors-grayneutral-100)",
        200: "var(--colors-grayneutral-200)",
        300: "var(--colors-grayneutral-300)",
        400: "var(--colors-grayneutral-400)",
        500: "var(--colors-grayneutral-500)",
        600: "var(--colors-grayneutral-600)",
        700: "var(--colors-grayneutral-700)",
        800: "var(--colors-grayneutral-800)",
        900: "var(--colors-grayneutral-900)",
        950: "var(--colors-grayneutral-950)",
      },
      grayiron: {
        25: "var(--colors-grayiron-25)",
        50: "var(--colors-grayiron-50)",
        100: "var(--colors-grayiron-100)",
        200: "var(--colors-grayiron-200)",
        300: "var(--colors-grayiron-300)",
        400: "var(--colors-grayiron-400)",
        500: "var(--colors-grayiron-500)",
        600: "var(--colors-grayiron-600)",
        700: "var(--colors-grayiron-700)",
        800: "var(--colors-grayiron-800)",
        900: "var(--colors-grayiron-900)",
        950: "var(--colors-grayiron-950)",
      },
      graytrue: {
        25: "var(--colors-graytrue-25)",
        50: "var(--colors-graytrue-50)",
        100: "var(--colors-graytrue-100)",
        200: "var(--colors-graytrue-200)",
        300: "var(--colors-graytrue-300)",
        400: "var(--colors-graytrue-400)",
        500: "var(--colors-graytrue-500)",
        600: "var(--colors-graytrue-600)",
        700: "var(--colors-graytrue-700)",
        800: "var(--colors-graytrue-800)",
        900: "var(--colors-graytrue-900)",
        950: "var(--colors-graytrue-950)",
      },
      graywarm: {
        25: "var(--colors-graywarm-25)",
        50: "var(--colors-graywarm-50)",
        100: "var(--colors-graywarm-100)",
        200: "var(--colors-graywarm-200)",
        300: "var(--colors-graywarm-300)",
        400: "var(--colors-graywarm-400)",
        500: "var(--colors-graywarm-500)",
        600: "var(--colors-graywarm-600)",
        700: "var(--colors-graywarm-700)",
        800: "var(--colors-graywarm-800)",
        900: "var(--colors-graywarm-900)",
        950: "var(--colors-graywarm-950)",
      },
      moss: {
        25: "var(--colors-moss-25)",
        50: "var(--colors-moss-50)",
        100: "var(--colors-moss-100)",
        200: "var(--colors-moss-200)",
        300: "var(--colors-moss-300)",
        400: "var(--colors-moss-400)",
        500: "var(--colors-moss-500)",
        600: "var(--colors-moss-600)",
        700: "var(--colors-moss-700)",
        800: "var(--colors-moss-800)",
        900: "var(--colors-moss-900)",
        950: "var(--colors-moss-950)",
      },
      greenlight: {
        25: "var(--colors-greenlight-25)",
        50: "var(--colors-greenlight-50)",
        100: "var(--colors-greenlight-100)",
        200: "var(--colors-greenlight-200)",
        300: "var(--colors-greenlight-300)",
        400: "var(--colors-greenlight-400)",
        500: "var(--colors-greenlight-500)",
        600: "var(--colors-greenlight-600)",
        700: "var(--colors-greenlight-700)",
        800: "var(--colors-greenlight-800)",
        900: "var(--colors-greenlight-900)",
        950: "var(--colors-greenlight-950)",
      },
      green: {
        25: "var(--colors-green-25)",
        50: "var(--colors-green-50)",
        100: "var(--colors-green-100)",
        200: "var(--colors-green-200)",
        300: "var(--colors-green-300)",
        400: "var(--colors-green-400)",
        500: "var(--colors-green-500)",
        600: "var(--colors-green-600)",
        700: "var(--colors-green-700)",
        800: "var(--colors-green-800)",
        900: "var(--colors-green-900)",
        950: "var(--colors-green-950)",
      },
      teal: {
        25: "var(--colors-teal-25)",
        50: "var(--colors-teal-50)",
        100: "var(--colors-teal-100)",
        200: "var(--colors-teal-200)",
        300: "var(--colors-teal-300)",
        400: "var(--colors-teal-400)",
        500: "var(--colors-teal-500)",
        600: "var(--colors-teal-600)",
        700: "var(--colors-teal-700)",
        800: "var(--colors-teal-800)",
        900: "var(--colors-teal-900)",
        950: "var(--colors-teal-950)",
      },
      cyan: {
        25: "var(--colors-cyan-25)",
        50: "var(--colors-cyan-50)",
        100: "var(--colors-cyan-100)",
        200: "var(--colors-cyan-200)",
        300: "var(--colors-cyan-300)",
        400: "var(--colors-cyan-400)",
        500: "var(--colors-cyan-500)",
        600: "var(--colors-cyan-600)",
        700: "var(--colors-cyan-700)",
        800: "var(--colors-cyan-800)",
        900: "var(--colors-cyan-900)",
        950: "var(--colors-cyan-950)",
      },
      bluelight: {
        25: "var(--colors-bluelight-25)",
        50: "var(--colors-bluelight-50)",
        100: "var(--colors-bluelight-100)",
        200: "var(--colors-bluelight-200)",
        300: "var(--colors-bluelight-300)",
        400: "var(--colors-bluelight-400)",
        500: "var(--colors-bluelight-500)",
        600: "var(--colors-bluelight-600)",
        700: "var(--colors-bluelight-700)",
        800: "var(--colors-bluelight-800)",
        900: "var(--colors-bluelight-900)",
        950: "var(--colors-bluelight-950)",
      },
      blue: {
        25: "var(--colors-blue-25)",
        50: "var(--colors-blue-50)",
        100: "var(--colors-blue-100)",
        200: "var(--colors-blue-200)",
        300: "var(--colors-blue-300)",
        400: "var(--colors-blue-400)",
        500: "var(--colors-blue-500)",
        600: "var(--colors-blue-600)",
        700: "var(--colors-blue-700)",
        800: "var(--colors-blue-800)",
        900: "var(--colors-blue-900)",
        950: "var(--colors-blue-950)",
      },
      bluedark: {
        25: "var(--colors-bluedark-25)",
        50: "var(--colors-bluedark-50)",
        100: "var(--colors-bluedark-100)",
        200: "var(--colors-bluedark-200)",
        300: "var(--colors-bluedark-300)",
        400: "var(--colors-bluedark-400)",
        500: "var(--colors-bluedark-500)",
        600: "var(--colors-bluedark-600)",
        700: "var(--colors-bluedark-700)",
        800: "var(--colors-bluedark-800)",
        900: "var(--colors-bluedark-900)",
        950: "var(--colors-bluedark-950)",
      },
      indigo: {
        25: "var(--colors-indigo-25)",
        50: "var(--colors-indigo-50)",
        100: "var(--colors-indigo-100)",
        200: "var(--colors-indigo-200)",
        300: "var(--colors-indigo-300)",
        400: "var(--colors-indigo-400)",
        500: "var(--colors-indigo-500)",
        600: "var(--colors-indigo-600)",
        700: "var(--colors-indigo-700)",
        800: "var(--colors-indigo-800)",
        900: "var(--colors-indigo-900)",
        950: "var(--colors-indigo-950)",
      },
      violet: {
        25: "var(--colors-violet-25)",
        50: "var(--colors-violet-50)",
        100: "var(--colors-violet-100)",
        200: "var(--colors-violet-200)",
        300: "var(--colors-violet-300)",
        400: "var(--colors-violet-400)",
        500: "var(--colors-violet-500)",
        600: "var(--colors-violet-600)",
        700: "var(--colors-violet-700)",
        800: "var(--colors-violet-800)",
        900: "var(--colors-violet-900)",
        950: "var(--colors-violet-950)",
      },
      purple: {
        25: "var(--colors-purple-25)",
        50: "var(--colors-purple-50)",
        100: "var(--colors-purple-100)",
        200: "var(--colors-purple-200)",
        300: "var(--colors-purple-300)",
        400: "var(--colors-purple-400)",
        500: "var(--colors-purple-500)",
        600: "var(--colors-purple-600)",
        700: "var(--colors-purple-700)",
        800: "var(--colors-purple-800)",
        900: "var(--colors-purple-900)",
        950: "var(--colors-purple-950)",
      },
      fuchsia: {
        25: "var(--colors-fuchsia-25)",
        50: "var(--colors-fuchsia-50)",
        100: "var(--colors-fuchsia-100)",
        200: "var(--colors-fuchsia-200)",
        300: "var(--colors-fuchsia-300)",
        400: "var(--colors-fuchsia-400)",
        500: "var(--colors-fuchsia-500)",
        600: "var(--colors-fuchsia-600)",
        700: "var(--colors-fuchsia-700)",
        800: "var(--colors-fuchsia-800)",
        900: "var(--colors-fuchsia-900)",
        950: "var(--colors-fuchsia-950)",
      },
      pink: {
        25: "var(--colors-pink-25)",
        50: "var(--colors-pink-50)",
        100: "var(--colors-pink-100)",
        200: "var(--colors-pink-200)",
        300: "var(--colors-pink-300)",
        400: "var(--colors-pink-400)",
        500: "var(--colors-pink-500)",
        600: "var(--colors-pink-600)",
        700: "var(--colors-pink-700)",
        800: "var(--colors-pink-800)",
        900: "var(--colors-pink-900)",
        950: "var(--colors-pink-950)",
      },
      rose: {
        25: "var(--colors-rosé-25)",
        50: "var(--colors-rosé-50)",
        100: "var(--colors-rosé-100)",
        200: "var(--colors-rosé-200)",
        300: "var(--colors-rosé-300)",
        400: "var(--colors-rosé-400)",
        500: "var(--colors-rosé-500)",
        600: "var(--colors-rosé-600)",
        700: "var(--colors-rosé-700)",
        800: "var(--colors-rosé-800)",
        900: "var(--colors-rosé-900)",
        950: "var(--colors-rosé-950)",
      },
      orangedark: {
        25: "var(--colors-orangedark-25)",
        50: "var(--colors-orangedark-50)",
        100: "var(--colors-orangedark-100)",
        200: "var(--colors-orangedark-200)",
        300: "var(--colors-orangedark-300)",
        400: "var(--colors-orangedark-400)",
        500: "var(--colors-orangedark-500)",
        600: "var(--colors-orangedark-600)",
        700: "var(--colors-orangedark-700)",
        800: "var(--colors-orangedark-800)",
        900: "var(--colors-orangedark-900)",
        950: "var(--colors-orangedark-950)",
      },
      orange: {
        25: "var(--colors-orange-25)",
        50: "var(--colors-orange-50)",
        100: "var(--colors-orange-100)",
        200: "var(--colors-orange-200)",
        300: "var(--colors-orange-300)",
        400: "var(--colors-orange-400)",
        500: "var(--colors-orange-500)",
        600: "var(--colors-orange-600)",
        700: "var(--colors-orange-700)",
        800: "var(--colors-orange-800)",
        900: "var(--colors-orange-900)",
        950: "var(--colors-orange-950)",
      },
      yellow: {
        25: "var(--colors-yellow-25)",
        50: "var(--colors-yellow-50)",
        100: "var(--colors-yellow-100)",
        200: "var(--colors-yellow-200)",
        300: "var(--colors-yellow-300)",
        400: "var(--colors-yellow-400)",
        500: "var(--colors-yellow-500)",
        600: "var(--colors-yellow-600)",
        700: "var(--colors-yellow-700)",
        800: "var(--colors-yellow-800)",
        900: "var(--colors-yellow-900)",
        950: "var(--colors-yellow-950)",
      },
      // Semantic colors
      text: {
        primary: "var(--colors-text-text-primary)",
        "primary_on-brand": "var(--colors-text-text-primary_on-brand)",
        secondary: "var(--colors-text-text-secondary)",
        secondary_hover: "var(--colors-text-text-secondary_hover)",
        "secondary_on-brand": "var(--colors-text-text-secondary_on-brand)",
        tertiary: "var(--colors-text-text-tertiary)",
        tertiary_hover: "var(--colors-text-text-tertiary_hover)",
        "tertiary_on-brand": "var(--colors-text-text-tertiary_on-brand)",
        quaternary: "var(--colors-text-text-quaternary)",
        "quaternary_on-brand": "var(--colors-text-text-quaternary_on-brand)",
        white: "var(--colors-text-text-white)",
        disabled: "var(--colors-text-text-disabled)",
        placeholder: "var(--colors-text-text-placeholder)",
        placeholder_subtle: "var(--colors-text-text-placeholder_subtle)",
        "brand-primary": "var(--colors-text-text-brand-primary)",
        "brand-secondary": "var(--colors-text-text-brand-secondary)",
        "brand-tertiary": "var(--colors-text-text-brand-tertiary)",
        "brand-tertiary_alt": "var(--colors-text-text-brand-tertiary_alt)",
        "error-primary": "var(--colors-text-text-error-primary)",
        "warning-primary": "var(--colors-text-text-warning-primary)",
        "success-primary": "var(--colors-text-text-success-primary)",
      },
      border: {
        primary: "var(--colors-border-border-primary)",
        secondary: "var(--colors-border-border-secondary)",
        tertiary: "var(--colors-border-border-tertiary)",
        disabled: "var(--colors-border-border-disabled)",
        disabled_subtle: "var(--colors-border-border-disabled_subtle)",
        brand: "var(--colors-border-border-brand)",
        brand_alt: "var(--colors-border-border-brand_alt)",
        error: "var(--colors-border-border-error)",
        error_subtle: "var(--colors-border-border-error_subtle)",
      },
      foreground: {
        primary: "var(--colors-foreground-fg-primary)",
        secondary: "var(--colors-foreground-fg-secondary)",
        secondary_hover: "var(--colors-foreground-fg-secondary_hover)",
        tertiary: "var(--colors-foreground-fg-tertiary)",
        tertiary_hover: "var(--colors-foreground-fg-tertiary_hover)",
        quaternary: "var(--colors-foreground-fg-quaternary)",
        quaternary_hover: "var(--colors-foreground-fg-quaternary_hover)",
        quinary: "var(--colors-foreground-fg-quinary)",
        quinary_hover: "var(--colors-foreground-fg-quinary_hover)",
        senary: "var(--colors-foreground-fg-senary)",
        white: "var(--colors-foreground-fg-white)",
        disabled: "var(--colors-foreground-fg-disabled)",
        disabled_subtle: "var(--colors-foreground-fg-disabled_subtle)",
        "brand-primary": "var(--colors-foreground-fg-brand-primary)",
        "brand-primary_alt": "var(--colors-foreground-fg-brand-primary_alt)",
        "brand-secondary": "var(--colors-foreground-fg-brand-secondary)",
        "error-primary": "var(--colors-foreground-fg-error-primary)",
        "error-secondary": "var(--colors-foreground-fg-error-secondary)",
        "warning-primary": "var(--colors-foreground-fg-warning-primary)",
        "warning-secondary": "var(--colors-foreground-fg-warning-secondary)",
        "success-primary": "var(--colors-foreground-fg-success-primary)",
        "success-secondary": "var(--colors-foreground-fg-success-secondary)",
      },
      background: {
        primary: "var(--colors-background-bg-background-primary)",
        primary_alt: "var(--colors-background-bg-primary_alt)",
        primary_hover: "var(--colors-background-bg-primary_hover)",
        "primary-solid": "var(--colors-background-bg-background-primary-solid)",
        secondary: "var(--colors-background-bg-secondary)",
        secondary_alt: "var(--colors-background-bg-secondary_alt)",
        secondary_hover: "var(--colors-background-bg-secondary_hover)",
        secondary_subtle: "var(--colors-background-bg-secondary_subtle)",
        "secondary-solid": "var(--colors-background-bg-secondary-solid)",
        tertiary: "var(--colors-background-bg-tertiary)",
        quaternary: "var(--colors-background-bg-quaternary)",
        active: "var(--colors-background-bg-active)",
        disabled: "var(--colors-background-bg-disabled)",
        disabled_subtle: "var(--colors-background-bg-disabled_subtle)",
        overlay: "var(--colors-background-bg-overlay)",
        "brand-primary": "var(--colors-background-bg-brand-primary)",
        "brand-primary_alt": "var(--colors-background-bg-brand-primary_alt)",
        "brand-secondary": "var(--colors-background-bg-brand-secondary)",
        "brand-solid": "var(--colors-background-bg-brand-solid)",
        "brand-solid_hover": "var(--colors-background-bg-brand-solid_hover)",
        "brand-section": "var(--colors-background-bg-brand-section)",
        "brand-section_subtle":
          "var(--colors-background-bg-brand-section_subtle)",
        "error-primary": "var(--colors-background-bg-error-primary)",
        "error-secondary": "var(--colors-background-bg-error-secondary)",
        "error-solid": "var(--colors-background-bg-error-solid)",
        "warning-primary": "var(--colors-background-bg-warning-primary)",
        "warning-secondary": "var(--colors-background-bg-warning-secondary)",
        "warning-solid": "var(--colors-background-bg-warning-solid)",
        "success-primary": "var(--colors-background-bg-success-primary)",
        "success-secondary": "var(--colors-background-bg-success-secondary)",
        "success-solid": "var(--colors-background-bg-success-solid)",
      },
    },
    spacing: {
      0: "var(--spacing-0)",
      0.5: "var(--spacing-0․5)",
      1: "var(--spacing-1)",
      1.5: "var(--spacing-1․5)",
      2: "var(--spacing-2)",
      3: "var(--spacing-3)",
      4: "var(--spacing-4)",
      5: "var(--spacing-5)",
      6: "var(--spacing-6)",
      8: "var(--spacing-8)",
      10: "var(--spacing-10)",
      12: "var(--spacing-12)",
      16: "var(--spacing-16)",
      20: "var(--spacing-20)",
      24: "var(--spacing-24)",
      32: "var(--spacing-32)",
      40: "var(--spacing-40)",
      48: "var(--spacing-48)",
      56: "var(--spacing-56)",
      64: "var(--spacing-64)",
      80: "var(--spacing-80)",
      96: "var(--spacing-96)",
      120: "var(--spacing-120)",
      140: "var(--spacing-140)",
      160: "var(--spacing-160)",
      180: "var(--spacing-180)",
      192: "var(--spacing-192)",
      256: "var(--spacing-256)",
      320: "var(--spacing-320)",
      360: "var(--spacing-360)",
      400: "var(--spacing-400)",
      480: "var(--spacing-480)",
    },
    fontFamily: {
      sans: ["var(--fontfamily-body)", "sans-serif"],
      display: ["var(--fontfamily-display)", "sans-serif"],
      body: ["var(--fontfamily-body)", "sans-serif"],
    },
    fontWeight: {
      regular: "var(--fontweight-regular)",
      "regular-italic": "var(--fontweight-regular-italic)",
      medium: "var(--fontweight-medium)",
      "medium-italic": "var(--fontweight-medium-italic)",
      semibold: "var(--fontweight-semibold)",
      "semibold-italic": "var(--fontweight-semibold-italic)",
      bold: "var(--fontweight-bold)",
      "bold-italic": "var(--fontweight-bold-italic)",
    },
    fontSize: {
      xs: [
        "var(--fontsize-text-xs)",
        { lineHeight: "var(--lineheight-text-xs)" },
      ],
      sm: [
        "var(--fontsize-text-sm)",
        { lineHeight: "var(--lineheight-text-sm)" },
      ],
      md: [
        "var(--fontsize-text-md)",
        { lineHeight: "var(--lineheight-text-md)" },
      ],
      lg: [
        "var(--fontsize-text-lg)",
        { lineHeight: "var(--lineheight-text-lg)" },
      ],
      xl: [
        "var(--fontsize-text-xl)",
        { lineHeight: "var(--lineheight-text-xl)" },
      ],
      "display-xs": [
        "var(--fontsize-display-xs)",
        { lineHeight: "var(--lineheight-display-xs)" },
      ],
      "display-sm": [
        "var(--fontsize-display-sm)",
        { lineHeight: "var(--lineheight-display-sm)" },
      ],
      "display-md": [
        "var(--fontsize-display-md)",
        { lineHeight: "var(--lineheight-display-md)" },
      ],
      "display-lg": [
        "var(--fontsize-display-lg)",
        { lineHeight: "var(--lineheight-display-lg)" },
      ],
      "display-xl": [
        "var(--fontsize-display-xl)",
        { lineHeight: "var(--lineheight-display-xl)" },
      ],
      "display-2xl": [
        "var(--fontsize-display-2xl)",
        { lineHeight: "var(--lineheight-display-2xl)" },
      ],
    },
    borderRadius: {
      none: "var(--radius-none)",
      xxs: "var(--radius-xxs)",
      xs: "var(--radius-xs)",
      sm: "var(--radius-sm)",
      md: "var(--radius-md)",
      lg: "var(--radius-lg)",
      xl: "var(--radius-xl)",
      "2xl": "var(--radius-2xl)",
      "3xl": "var(--radius-3xl)",
      "4xl": "var(--radius-4xl)",
      full: "var(--radius-full)",
    },
    boxShadow: {
      xs: "0 1px 2px 0 var(--colors-effects-shadows-shadow-xs)",
      sm: "0 1px 3px 0 var(--colors-effects-shadows-shadow-sm_01), 0 1px 2px 0 var(--colors-effects-shadows-shadow-sm_02)",
      md: "0 4px 8px -2px var(--colors-effects-shadows-shadow-md_01), 0 2px 4px -2px var(--colors-effects-shadows-shadow-md_02)",
      lg: "0 12px 16px -4px var(--colors-effects-shadows-shadow-lg_01), 0 4px 6px -2px var(--colors-effects-shadows-shadow-lg_02)",
      xl: "0 20px 24px -4px var(--colors-effects-shadows-shadow-xl_01), 0 8px 8px -4px var(--colors-effects-shadows-shadow-xl_02)",
      "2xl": "0 24px 48px -12px var(--colors-effects-shadows-shadow-2xl)",
      "3xl": "0px 32px 64px -16px var(--colors-effects-shadows-shadow-3xl)",
      "inner-skeumorphic":
        "var(--colors-effects-shadows-shadow-skeumorphic-inner)",
      "inner-skeumorphic-border":
        "var(--colors-effects-shadows-shadow-skeumorphic-inner-border)",
    },
    extend: {
      width: {
        xxs: "var(--width-xxs)",
        xs: "var(--width-xs)",
        sm: "var(--width-sm)",
        md: "var(--width-md)",
        lg: "var(--width-lg)",
        xl: "var(--width-xl)",
        "2xl": "var(--width-2xl)",
        "3xl": "var(--width-3xl)",
        "4xl": "var(--width-4xl)",
        "5xl": "var(--width-5xl)",
        "6xl": "var(--width-6xl)",
      },
      maxWidth: {
        paragraph: "var(--paragraph-max-width)",
        "container-desktop": "var(--container-max-width-desktop)",
      },
      padding: {
        "container-mobile": "var(--container-padding-mobile)",
        "container-desktop": "var(--container-padding-desktop)",
      },
      colors: {
        component: {
          alpha: {
            "white-10": "var(--componentcolors-alpha-alpha-white-10)",
            "white-20": "var(--componentcolors-alpha-alpha-white-20)",
            "white-30": "var(--componentcolors-alpha-alpha-white-30)",
            "white-40": "var(--componentcolors-alpha-alpha-white-40)",
            "white-50": "var(--componentcolors-alpha-alpha-white-50)",
            "white-60": "var(--componentcolors-alpha-alpha-white-60)",
            "white-70": "var(--componentcolors-alpha-alpha-white-70)",
            "white-80": "var(--componentcolors-alpha-alpha-white-80)",
            "white-90": "var(--componentcolors-alpha-alpha-white-90)",
            "white-100": "var(--componentcolors-alpha-alpha-white-100)",
            "black-10": "var(--componentcolors-alpha-alpha-black-10)",
            "black-20": "var(--componentcolors-alpha-alpha-black-20)",
            "black-30": "var(--componentcolors-alpha-alpha-black-30)",
            "black-40": "var(--componentcolors-alpha-alpha-black-40)",
            "black-50": "var(--componentcolors-alpha-alpha-black-50)",
            "black-60": "var(--componentcolors-alpha-alpha-black-60)",
            "black-70": "var(--componentcolors-alpha-alpha-black-70)",
            "black-80": "var(--componentcolors-alpha-alpha-black-80)",
            "black-90": "var(--componentcolors-alpha-alpha-black-90)",
            "black-100": "var(--componentcolors-alpha-alpha-black-100)",
          },
          utility: {
            "gray-50": "var(--componentcolors-utility-gray-utility-gray-50)",
            "gray-100": "var(--componentcolors-utility-gray-utility-gray-100)",
            "gray-200": "var(--componentcolors-utility-gray-utility-gray-200)",
            "gray-300": "var(--componentcolors-utility-gray-utility-gray-300)",
            "gray-400": "var(--componentcolors-utility-gray-utility-gray-400)",
            "gray-500": "var(--componentcolors-utility-gray-utility-gray-500)",
            "gray-600": "var(--componentcolors-utility-gray-utility-gray-600)",
            "gray-700": "var(--componentcolors-utility-gray-utility-gray-700)",
            "gray-800": "var(--componentcolors-utility-gray-utility-gray-800)",
            "gray-900": "var(--componentcolors-utility-gray-utility-gray-900)",
            "brand-50": "var(--componentcolors-utility-brand-utility-brand-50)",
            "brand-50-alt":
              "var(--componentcolors-utility-brand-utility-brand-50_alt)",
            "brand-100":
              "var(--componentcolors-utility-brand-utility-brand-100)",
            "brand-100-alt":
              "var(--componentcolors-utility-brand-utility-brand-100_alt)",
            "brand-200":
              "var(--componentcolors-utility-brand-utility-brand-200)",
            "brand-200-alt":
              "var(--componentcolors-utility-brand-utility-brand-200_alt)",
            "brand-300":
              "var(--componentcolors-utility-brand-utility-brand-300)",
            "brand-300-alt":
              "var(--componentcolors-utility-brand-utility-brand-300_alt)",
            "brand-400":
              "var(--componentcolors-utility-brand-utility-brand-400)",
            "brand-400-alt":
              "var(--componentcolors-utility-brand-utility-brand-400_alt)",
            "brand-500":
              "var(--componentcolors-utility-brand-utility-brand-500)",
            "brand-500-alt":
              "var(--componentcolors-utility-brand-utility-brand-500_alt)",
            "brand-600":
              "var(--componentcolors-utility-brand-utility-brand-600)",
            "brand-600-alt":
              "var(--componentcolors-utility-brand-utility-brand-600_alt)",
            "brand-700":
              "var(--componentcolors-utility-brand-utility-brand-700)",
            "brand-700-alt":
              "var(--componentcolors-utility-brand-utility-brand-700_alt)",
            "brand-800":
              "var(--componentcolors-utility-brand-utility-brand-800)",
            "brand-800-alt":
              "var(--componentcolors-utility-brand-utility-brand-800_alt)",
            "brand-900":
              "var(--componentcolors-utility-brand-utility-brand-900)",
            "brand-900-alt":
              "var(--componentcolors-utility-brand-utility-brand-900_alt)",
            "error-50": "var(--componentcolors-utility-error-utility-error-50)",
            "error-100":
              "var(--componentcolors-utility-error-utility-error-100)",
            "error-200":
              "var(--componentcolors-utility-error-utility-error-200)",
            "error-300":
              "var(--componentcolors-utility-error-utility-error-300)",
            "error-400":
              "var(--componentcolors-utility-error-utility-error-400)",
            "error-500":
              "var(--componentcolors-utility-error-utility-error-500)",
            "error-600":
              "var(--componentcolors-utility-error-utility-error-600)",
            "error-700":
              "var(--componentcolors-utility-error-utility-error-700)",
            "warning-50":
              "var(--componentcolors-utility-warning-utility-warning-50)",
            "warning-100":
              "var(--componentcolors-utility-warning-utility-warning-100)",
            "warning-200":
              "var(--componentcolors-utility-warning-utility-warning-200)",
            "warning-300":
              "var(--componentcolors-utility-warning-utility-warning-300)",
            "warning-400":
              "var(--componentcolors-utility-warning-utility-warning-400)",
            "warning-500":
              "var(--componentcolors-utility-warning-utility-warning-500)",
            "warning-600":
              "var(--componentcolors-utility-warning-utility-warning-600)",
            "warning-700":
              "var(--componentcolors-utility-warning-utility-warning-700)",
            "success-50":
              "var(--componentcolors-utility-success-utility-success-50)",
            "success-100":
              "var(--componentcolors-utility-success-utility-success-100)",
            "success-200":
              "var(--componentcolors-utility-success-utility-success-200)",
            "success-300":
              "var(--componentcolors-utility-success-utility-success-300)",
            "success-400":
              "var(--componentcolors-utility-success-utility-success-400)",
            "success-500":
              "var(--componentcolors-utility-success-utility-success-500)",
            "success-600":
              "var(--componentcolors-utility-success-utility-success-600)",
            "success-700":
              "var(--componentcolors-utility-success-utility-success-700)",
            "grayblue-50":
              "var(--componentcolors-utility-grayblue-utility-gray-blue-50)",
            "grayblue-100":
              "var(--componentcolors-utility-grayblue-utility-gray-blue-100)",
            "grayblue-200":
              "var(--componentcolors-utility-grayblue-utility-gray-blue-200)",
            "grayblue-300":
              "var(--componentcolors-utility-grayblue-utility-gray-blue-300)",
            "grayblue-400":
              "var(--componentcolors-utility-grayblue-utility-gray-blue-400)",
            "grayblue-500":
              "var(--componentcolors-utility-grayblue-utility-gray-blue-500)",
            "grayblue-600":
              "var(--componentcolors-utility-grayblue-utility-gray-blue-600)",
            "grayblue-700":
              "var(--componentcolors-utility-grayblue-utility-gray-blue-700)",
            "bluelight-50":
              "var(--componentcolors-utility-bluelight-utility-blue-light-50)",
            "bluelight-100":
              "var(--componentcolors-utility-bluelight-utility-blue-light-100)",
            "bluelight-200":
              "var(--componentcolors-utility-bluelight-utility-blue-light-200)",
            "bluelight-300":
              "var(--componentcolors-utility-bluelight-utility-blue-light-300)",
            "bluelight-400":
              "var(--componentcolors-utility-bluelight-utility-blue-light-400)",
            "bluelight-500":
              "var(--componentcolors-utility-bluelight-utility-blue-light-500)",
            "bluelight-600":
              "var(--componentcolors-utility-bluelight-utility-blue-light-600)",
            "bluelight-700":
              "var(--componentcolors-utility-bluelight-utility-blue-light-700)",
            "blue-50": "var(--componentcolors-utility-blue-utility-blue-50)",
            "blue-100": "var(--componentcolors-utility-blue-utility-blue-100)",
            "blue-200": "var(--componentcolors-utility-blue-utility-blue-200)",
            "blue-300": "var(--componentcolors-utility-blue-utility-blue-300)",
            "blue-400": "var(--componentcolors-utility-blue-utility-blue-400)",
            "blue-500": "var(--componentcolors-utility-blue-utility-blue-500)",
            "blue-600": "var(--componentcolors-utility-blue-utility-blue-600)",
            "blue-700": "var(--componentcolors-utility-blue-utility-blue-700)",
            "bluedark-50":
              "var(--componentcolors-utility-bluedark-utility-blue-dark-50)",
            "bluedark-100":
              "var(--componentcolors-utility-bluedark-utility-blue-dark-100)",
            "bluedark-200":
              "var(--componentcolors-utility-bluedark-utility-blue-dark-200)",
            "bluedark-300":
              "var(--componentcolors-utility-bluedark-utility-blue-dark-300)",
            "bluedark-400":
              "var(--componentcolors-utility-bluedark-utility-blue-dark-400)",
            "bluedark-500":
              "var(--componentcolors-utility-bluedark-utility-blue-dark-500)",
            "bluedark-600":
              "var(--componentcolors-utility-bluedark-utility-blue-dark-600)",
            "bluedark-700":
              "var(--componentcolors-utility-bluedark-utility-blue-dark-700)",
            "indigo-50":
              "var(--componentcolors-utility-indigo-utility-indigo-50)",
            "indigo-100":
              "var(--componentcolors-utility-indigo-utility-indigo-100)",
            "indigo-200":
              "var(--componentcolors-utility-indigo-utility-indigo-200)",
            "indigo-300":
              "var(--componentcolors-utility-indigo-utility-indigo-300)",
            "indigo-400":
              "var(--componentcolors-utility-indigo-utility-indigo-400)",
            "indigo-500":
              "var(--componentcolors-utility-indigo-utility-indigo-500)",
            "indigo-600":
              "var(--componentcolors-utility-indigo-utility-indigo-600)",
            "indigo-700":
              "var(--componentcolors-utility-indigo-utility-indigo-700)",
            "purple-50":
              "var(--componentcolors-utility-purple-utility-purple-50)",
            "purple-100":
              "var(--componentcolors-utility-purple-utility-purple-100)",
            "purple-200":
              "var(--componentcolors-utility-purple-utility-purple-200)",
            "purple-300":
              "var(--componentcolors-utility-purple-utility-purple-300)",
            "purple-400":
              "var(--componentcolors-utility-purple-utility-purple-400)",
            "purple-500":
              "var(--componentcolors-utility-purple-utility-purple-500)",
            "purple-600":
              "var(--componentcolors-utility-purple-utility-purple-600)",
            "purple-700":
              "var(--componentcolors-utility-purple-utility-purple-700)",
            "fuchsia-50":
              "var(--componentcolors-utility-fuchsia-utility-fuchsia-50)",
            "fuchsia-100":
              "var(--componentcolors-utility-fuchsia-utility-fuchsia-100)",
            "fuchsia-200":
              "var(--componentcolors-utility-fuchsia-utility-fuchsia-200)",
            "fuchsia-300":
              "var(--componentcolors-utility-fuchsia-utility-fuchsia-300)",
            "fuchsia-400":
              "var(--componentcolors-utility-fuchsia-utility-fuchsia-400)",
            "fuchsia-500":
              "var(--componentcolors-utility-fuchsia-utility-fuchsia-500)",
            "fuchsia-600":
              "var(--componentcolors-utility-fuchsia-utility-fuchsia-600)",
            "fuchsia-700":
              "var(--componentcolors-utility-fuchsia-utility-fuchsia-700)",
            "pink-50": "var(--componentcolors-utility-pink-utility-pink-50)",
            "pink-100": "var(--componentcolors-utility-pink-utility-pink-100)",
            "pink-200": "var(--componentcolors-utility-pink-utility-pink-200)",
            "pink-300": "var(--componentcolors-utility-pink-utility-pink-300)",
            "pink-400": "var(--componentcolors-utility-pink-utility-pink-400)",
            "pink-500": "var(--componentcolors-utility-pink-utility-pink-500)",
            "pink-600": "var(--componentcolors-utility-pink-utility-pink-600)",
            "pink-700": "var(--componentcolors-utility-pink-utility-pink-700)",
            "orangedark-50":
              "var(--componentcolors-utility-orangedark-utility-orange-dark-50)",
            "orangedark-100":
              "var(--componentcolors-utility-orangedark-utility-orange-dark-100)",
            "orangedark-200":
              "var(--componentcolors-utility-orangedark-utility-orange-dark-200)",
            "orangedark-300":
              "var(--componentcolors-utility-orangedark-utility-orange-dark-300)",
            "orangedark-400":
              "var(--componentcolors-utility-orangedark-utility-orange-dark-400)",
            "orangedark-500":
              "var(--componentcolors-utility-orangedark-utility-orange-dark-500)",
            "orangedark-600":
              "var(--componentcolors-utility-orangedark-utility-orange-dark-600)",
            "orangedark-700":
              "var(--componentcolors-utility-orangedark-utility-orange-dark-700)",
            "orange-50":
              "var(--componentcolors-utility-orange-utility-orange-50)",
            "orange-100":
              "var(--componentcolors-utility-orange-utility-orange-100)",
            "orange-200":
              "var(--componentcolors-utility-orange-utility-orange-200)",
            "orange-300":
              "var(--componentcolors-utility-orange-utility-orange-300)",
            "orange-400":
              "var(--componentcolors-utility-orange-utility-orange-400)",
            "orange-500":
              "var(--componentcolors-utility-orange-utility-orange-500)",
            "orange-600":
              "var(--componentcolors-utility-orange-utility-orange-600)",
            "orange-700":
              "var(--componentcolors-utility-orange-utility-orange-700)",
          },
          appStoreBadges: {
            border:
              "var(--componentcolors-components-appstorebadges-app-store-badge-border)",
          },
          applicationNavigation: {
            navItem: {
              buttonIcon: {
                fg: "var(--componentcolors-components-applicationnavigation-nav-item-button-icon-fg)",
                fg_active:
                  "var(--componentcolors-components-applicationnavigation-nav-item-button-icon-fg_active)",
              },
              icon: {
                fg: "var(--componentcolors-components-applicationnavigation-nav-item-icon-fg)",
                fg_active:
                  "var(--componentcolors-components-applicationnavigation-nav-item-icon-fg_active)",
              },
            },
          },
          avatar: {
            bg: "var(--componentcolors-components-avatars-avatar-bg)",
            profilePhotoBorder:
              "var(--componentcolors-components-avatars-avatar-profile-photo-border)",
            contrastBorder:
              "var(--componentcolors-components-avatars-avatar-contrast-border)",
            styles: {
              bgNeutral:
                "var(--componentcolors-components-avatars-avatar-styles-bg-neutral)",
            },
          },
          breadcrumb: {
            fg: "var(--componentcolors-components-breadcrumbs-breadcrumb-fg)",
            fg_hover:
              "var(--componentcolors-components-breadcrumbs-breadcrumb-fg_hover)",
            bg_hover:
              "var(--componentcolors-components-breadcrumbs-breadcrumb-bg_hover)",
            brand: {
              fg_hover:
                "var(--componentcolors-components-breadcrumbs-breadcrumb-brand-fg_hover)",
              bg_hover:
                "var(--componentcolors-components-breadcrumbs-breadcrumb-brand-bg_hover)",
            },
            icon: {
              fg: "var(--componentcolors-components-breadcrumbs-breadcrumb-icon-fg)",
              fg_hover:
                "var(--componentcolors-components-breadcrumbs-breadcrumb-icon-fg_hover)",
              brand: {
                fg_hover:
                  "var(--componentcolors-components-breadcrumbs-breadcrumb-brand-icon-fg_hover)",
              },
            },
          },
          button: {
            primary: {
              fg: "var(--componentcolors-components-buttons-primary-button-primary-fg)",
              fg_hover:
                "var(--componentcolors-components-buttons-primary-button-primary-fg_hover)",
              bg: "var(--componentcolors-components-buttons-primary-button-primary-bg)",
              bg_hover:
                "var(--componentcolors-components-buttons-primary-button-primary-bg_hover)",
            },
            secondary: {
              fg: "var(--componentcolors-components-buttons-secondary-button-secondary-fg)",
              fg_hover:
                "var(--componentcolors-components-buttons-secondary-button-secondary-fg_hover)",
              bg: "var(--componentcolors-components-buttons-secondary-button-secondary-bg)",
              bg_hover:
                "var(--componentcolors-components-buttons-secondary-button-secondary-bg_hover)",
              border:
                "var(--componentcolors-components-buttons-secondary-button-secondary-border)",
              border_hover:
                "var(--componentcolors-components-buttons-secondary-button-secondary-border_hover)",
            },
            secondaryColor: {
              fg: "var(--componentcolors-components-buttons-secondarycolor-button-secondary-color-fg)",
              fg_hover:
                "var(--componentcolors-components-buttons-secondarycolor-button-secondary-color-fg_hover)",
              bg: "var(--componentcolors-components-buttons-secondarycolor-button-secondary-color-bg)",
              bg_hover:
                "var(--componentcolors-components-buttons-secondarycolor-button-secondary-color-bg_hover)",
              border:
                "var(--componentcolors-components-buttons-secondarycolor-button-secondary-color-border)",
              border_hover:
                "var(--componentcolors-components-buttons-secondarycolor-button-secondary-color-border_hover)",
            },
            tertiary: {
              fg: "var(--componentcolors-components-buttons-tertiary-button-tertiary-fg)",
              fg_hover:
                "var(--componentcolors-components-buttons-tertiary-button-tertiary-fg_hover)",
              bg_hover:
                "var(--componentcolors-components-buttons-tertiary-button-tertiary-bg_hover)",
            },
            tertiaryColor: {
              fg: "var(--componentcolors-components-buttons-tertiarycolor-button-tertiary-color-fg)",
              fg_hover:
                "var(--componentcolors-components-buttons-tertiarycolor-button-tertiary-color-fg_hover)",
              bg_hover:
                "var(--componentcolors-components-buttons-tertiarycolor-button-tertiary-color-bg_hover)",
            },
            primaryError: {
              fg: "var(--componentcolors-components-buttons-primaryerror-button-primary-error-fg)",
              fg_hover:
                "var(--componentcolors-components-buttons-primaryerror-button-primary-error-fg_hover)",
              bg: "var(--componentcolors-components-buttons-primaryerror-button-primary-error-bg)",
              bg_hover:
                "var(--componentcolors-components-buttons-primaryerror-button-primary-error-bg_hover)",
            },
            secondaryError: {
              fg: "var(--componentcolors-components-buttons-secondaryerror-button-secondary-error-fg)",
              fg_hover:
                "var(--componentcolors-components-buttons-secondaryerror-button-secondary-error-fg_hover)",
              bg: "var(--componentcolors-components-buttons-secondaryerror-button-secondary-error-bg)",
              bg_hover:
                "var(--componentcolors-components-buttons-secondaryerror-button-secondary-error-bg_hover)",
              border:
                "var(--componentcolors-components-buttons-secondaryerror-button-secondary-error-border)",
              border_hover:
                "var(--componentcolors-components-buttons-secondaryerror-button-secondary-error-border_hover)",
            },
            tertiaryError: {
              fg: "var(--componentcolors-components-buttons-tertiaryerror-button-tertiary-error-fg)",
              fg_hover:
                "var(--componentcolors-components-buttons-tertiaryerror-button-tertiary-error-fg_hover)",
              bg_hover:
                "var(--componentcolors-components-buttons-tertiaryerror-button-tertiary-error-bg_hover)",
            },
          },
          footer: {
            button: {
              fg: "var(--componentcolors-components-footers-footer-button-fg)",
              fg_hover:
                "var(--componentcolors-components-footers-footer-button-fg_hover)",
            },
            badge: {
              fg: "var(--componentcolors-components-footers-footer-badge-fg)",
              bg: "var(--componentcolors-components-footers-footer-badge-bg)",
              border:
                "var(--componentcolors-components-footers-footer-badge-border)",
            },
          },
          headerSection: {
            abstract: {
              50: {
                bg: "var(--componentcolors-components-headersections-header-abstract-50-bg)",
              },
              100: {
                bg: "var(--componentcolors-components-headersections-header-abstract-100-bg)",
              },
              200: {
                bg: "var(--componentcolors-components-headersections-header-abstract-200-bg)",
              },
              300: {
                bg: "var(--componentcolors-components-headersections-header-abstract-300-bg)",
              },
            },
          },
          icon: {
            fg: {
              brand:
                "var(--componentcolors-components-icons-icons-icon-fg-brand)",
              brand_onBrand:
                "var(--componentcolors-components-icons-icons-icon-fg-brand_on-brand)",
            },
            featured: {
              light: {
                fg: {
                  brand:
                    "var(--componentcolors-components-icons-featuredicons-light-featured-icon-light-fg-brand)",
                  gray: "var(--componentcolors-components-icons-featuredicons-light-featured-icon-light-fg-gray)",
                  error:
                    "var(--componentcolors-components-icons-featuredicons-light-featured-icon-light-fg-error)",
                  warning:
                    "var(--componentcolors-components-icons-featuredicons-light-featured-icon-light-fg-warning)",
                  success:
                    "var(--componentcolors-components-icons-featuredicons-light-featured-icon-light-fg-success)",
                },
              },
              dark: {
                fg: {
                  brand:
                    "var(--componentcolors-components-icons-featuredicons-dark-featured-icon-dark-fg-brand)",
                  gray: "var(--componentcolors-components-icons-featuredicons-dark-featured-icon-dark-fg-gray)",
                  error:
                    "var(--componentcolors-components-icons-featuredicons-dark-featured-icon-dark-fg-error)",
                  warning:
                    "var(--componentcolors-components-icons-featuredicons-dark-featured-icon-dark-fg-warning)",
                  success:
                    "var(--componentcolors-components-icons-featuredicons-dark-featured-icon-dark-fg-success)",
                },
              },
              modern: {
                border:
                  "var(--componentcolors-components-icons-featuredicons-modern-featured-icon-modern-border)",
              },
            },
            social: {
              fg: {
                x: "var(--componentcolors-components-icons-socialicons-social-icon-fg-x)",
                instagram:
                  "var(--componentcolors-components-icons-socialicons-social-icon-fg-instagram)",
                apple:
                  "var(--componentcolors-components-icons-socialicons-social-icon-fg-apple)",
                github:
                  "var(--componentcolors-components-icons-socialicons-social-icon-fg-github)",
                angellist:
                  "var(--componentcolors-components-icons-socialicons-social-icon-fg-angellist)",
                tumblr:
                  "var(--componentcolors-components-icons-socialicons-social-icon-fg-tumblr)",
              },
            },
          },
          mockup: {
            screen: {
              border:
                "var(--componentcolors-components-mockups-screen-mockup-border)",
            },
          },
          slider: {
            handle: {
              bg: "var(--componentcolors-components-sliders-slider-handle-bg)",
              border:
                "var(--componentcolors-components-sliders-slider-handle-border)",
            },
          },
          thumbnail: {
            badge: {
              brand: {
                fg: "var(--componentcolors-components-thumbnail-thumbnail-badge-brand-fg)",
              },
              success: {
                fg: "var(--componentcolors-components-thumbnail-thumbnail-badge-success-fg)",
              },
            },
          },
          toggle: {
            button: {
              fg_disabled:
                "var(--componentcolors-components-toggles-toggle-button-fg_disabled)",
            },
          },
          tooltip: {
            supportingText:
              "var(--componentcolors-components-tooltips-tooltip-supporting-text)",
          },
          wysiwygEditor: {
            icon: {
              fg: "var(--componentcolors-components-wysiwygeditor-wysiwyg-editor-icon-fg)",
              fg_active:
                "var(--componentcolors-components-wysiwygeditor-wysiwyg-editor-icon-fg_active)",
            },
          },
        },
      },
    },
  },
};
