import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
        'in-relax': 'cubic-bezier(.55, .09, .68, .53)',
        'in-regular': 'cubic-bezier(.55, .06, .67, .19)',
        'in-strong': 'cubic-bezier(.89, .03, .68, .22)',
        'in-powerful': 'cubic-bezier(.75, .05, .85, .06)',
        'out-relax': 'cubic-bezier(.25, .46, .45, .94)',
        'out-regular': 'cubic-bezier(.21, .61, .35, 1)',
        'out-strong': 'cubic-bezier(.16, .84, .44, 1)',
        'out-powerful': 'cubic-bezier(.23, 1, .32, 1)',
        'in-out-relax': 'cubic-bezier(.45, .03, .51, .96)',
        'in-out-regular': 'cubic-bezier(.64, .05, .35, 1)',
        'in-out-strong': 'cubic-bezier(.77, 0, .17, 1)',
        'in-out-powerful': 'cubic-bezier(.86, 0, .07, 1)',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
