// This file is used to inject Tailwind styles without using the @tailwind directives
import { injectGlobal } from '@emotion/css';

// Function to inject Tailwind styles
export function injectTailwindStyles() {
  // This is a placeholder function that will be replaced by the actual Tailwind styles during build
  // The PostCSS plugin will process this file and inject the actual Tailwind styles
  injectGlobal`
    /* Tailwind base styles will be injected here */
    /* Tailwind component styles will be injected here */
    /* Tailwind utility styles will be injected here */
  `;
}
