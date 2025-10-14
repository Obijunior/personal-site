/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
            colors: {
                'light-background': 'var(--light-background)',
            },
            cursor: {
                'black': 'url(/cursors/black-cursor.svg), auto',
                'blue': 'url(/cursors/blue-cursor.svg), auto',
                'white': 'url(/cursors/white-cursor.svg), auto',
                'black-dot': 'url(/cursors/black-dot-cursor.svg), auto',
            },
            fontFamily: {
                // utility: `font-jetbrains`
                jetbrains: [
                    '"JetBrains Mono"',
                    'ui-monospace',
                    'SFMono-Regular',
                    'Menlo',
                    'Monaco',
                    'monospace',
                ],
            },
        },
    },
    plugins: [],
}
