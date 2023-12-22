import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const gardenTheme: CustomThemeConfig = {
  name: "garden-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    "--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "255 255 255",
    "--on-secondary": "0 0 0",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "0 0 0",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #4c6cd9
    "--color-primary-50": "228 233 249", // #e4e9f9
    "--color-primary-100": "219 226 247", // #dbe2f7
    "--color-primary-200": "210 218 246", // #d2daf6
    "--color-primary-300": "183 196 240", // #b7c4f0
    "--color-primary-400": "130 152 228", // #8298e4
    "--color-primary-500": "76 108 217", // #4c6cd9
    "--color-primary-600": "68 97 195", // #4461c3
    "--color-primary-700": "57 81 163", // #3951a3
    "--color-primary-800": "46 65 130", // #2e4182
    "--color-primary-900": "37 53 106", // #25356a
    // secondary | #e1d244
    "--color-secondary-50": "251 248 227", // #fbf8e3
    "--color-secondary-100": "249 246 218", // #f9f6da
    "--color-secondary-200": "248 244 208", // #f8f4d0
    "--color-secondary-300": "243 237 180", // #f3edb4
    "--color-secondary-400": "234 224 124", // #eae07c
    "--color-secondary-500": "225 210 68", // #e1d244
    "--color-secondary-600": "203 189 61", // #cbbd3d
    "--color-secondary-700": "169 158 51", // #a99e33
    "--color-secondary-800": "135 126 41", // #877e29
    "--color-secondary-900": "110 103 33", // #6e6721
    // tertiary | #f2ad8b
    "--color-tertiary-50": "253 243 238", // #fdf3ee
    "--color-tertiary-100": "252 239 232", // #fcefe8
    "--color-tertiary-200": "252 235 226", // #fcebe2
    "--color-tertiary-300": "250 222 209", // #faded1
    "--color-tertiary-400": "246 198 174", // #f6c6ae
    "--color-tertiary-500": "242 173 139", // #f2ad8b
    "--color-tertiary-600": "218 156 125", // #da9c7d
    "--color-tertiary-700": "182 130 104", // #b68268
    "--color-tertiary-800": "145 104 83", // #916853
    "--color-tertiary-900": "119 85 68", // #775544
    // success | #e08043
    "--color-success-50": "250 236 227", // #faece3
    "--color-success-100": "249 230 217", // #f9e6d9
    "--color-success-200": "247 223 208", // #f7dfd0
    "--color-success-300": "243 204 180", // #f3ccb4
    "--color-success-400": "233 166 123", // #e9a67b
    "--color-success-500": "224 128 67", // #e08043
    "--color-success-600": "202 115 60", // #ca733c
    "--color-success-700": "168 96 50", // #a86032
    "--color-success-800": "134 77 40", // #864d28
    "--color-success-900": "110 63 33", // #6e3f21
    // warning | #be7954
    "--color-warning-50": "245 235 229", // #f5ebe5
    "--color-warning-100": "242 228 221", // #f2e4dd
    "--color-warning-200": "239 222 212", // #efded4
    "--color-warning-300": "229 201 187", // #e5c9bb
    "--color-warning-400": "210 161 135", // #d2a187
    "--color-warning-500": "190 121 84", // #be7954
    "--color-warning-600": "171 109 76", // #ab6d4c
    "--color-warning-700": "143 91 63", // #8f5b3f
    "--color-warning-800": "114 73 50", // #724932
    "--color-warning-900": "93 59 41", // #5d3b29
    // error | #f71038
    "--color-error-50": "254 219 225", // #fedbe1
    "--color-error-100": "253 207 215", // #fdcfd7
    "--color-error-200": "253 195 205", // #fdc3cd
    "--color-error-300": "252 159 175", // #fc9faf
    "--color-error-400": "249 88 116", // #f95874
    "--color-error-500": "247 16 56", // #f71038
    "--color-error-600": "222 14 50", // #de0e32
    "--color-error-700": "185 12 42", // #b90c2a
    "--color-error-800": "148 10 34", // #940a22
    "--color-error-900": "121 8 27", // #79081b
    // surface | #162e7c
    "--color-surface-50": "220 224 235", // #dce0eb
    "--color-surface-100": "208 213 229", // #d0d5e5
    "--color-surface-200": "197 203 222", // #c5cbde
    "--color-surface-300": "162 171 203", // #a2abcb
    "--color-surface-400": "92 109 163", // #5c6da3
    "--color-surface-500": "22 46 124", // #162e7c
    "--color-surface-600": "20 41 112", // #142970
    "--color-surface-700": "17 35 93", // #11235d
    "--color-surface-800": "13 28 74", // #0d1c4a
    "--color-surface-900": "11 23 61" // #0b173d

  }
};