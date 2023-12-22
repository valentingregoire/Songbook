import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const forestTheme: CustomThemeConfig = {
  name: "forest-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    "--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "2px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "0 0 0",
    "--on-secondary": "255 255 255",
    "--on-tertiary": "0 0 0",
    "--on-success": "255 255 255",
    "--on-warning": "0 0 0",
    "--on-error": "0 0 0",
    "--on-surface": "0 0 0",
    // =~= Theme Colors  =~=
    // primary | #76a451
    "--color-primary-50": "234 241 229", // #eaf1e5
    "--color-primary-100": "228 237 220", // #e4eddc
    "--color-primary-200": "221 232 212", // #dde8d4
    "--color-primary-300": "200 219 185", // #c8dbb9
    "--color-primary-400": "159 191 133", // #9fbf85
    "--color-primary-500": "118 164 81", // #76a451
    "--color-primary-600": "106 148 73", // #6a9449
    "--color-primary-700": "89 123 61", // #597b3d
    "--color-primary-800": "71 98 49", // #476231
    "--color-primary-900": "58 80 40", // #3a5028
    // secondary | #2f1994
    "--color-secondary-50": "224 221 239", // #e0ddef
    "--color-secondary-100": "213 209 234", // #d5d1ea
    "--color-secondary-200": "203 198 228", // #cbc6e4
    "--color-secondary-300": "172 163 212", // #aca3d4
    "--color-secondary-400": "109 94 180", // #6d5eb4
    "--color-secondary-500": "47 25 148", // #2f1994
    "--color-secondary-600": "42 23 133", // #2a1785
    "--color-secondary-700": "35 19 111", // #23136f
    "--color-secondary-800": "28 15 89", // #1c0f59
    "--color-secondary-900": "23 12 73", // #170c49
    // tertiary | #e0571a
    "--color-tertiary-50": "250 230 221", // #fae6dd
    "--color-tertiary-100": "249 221 209", // #f9ddd1
    "--color-tertiary-200": "247 213 198", // #f7d5c6
    "--color-tertiary-300": "243 188 163", // #f3bca3
    "--color-tertiary-400": "233 137 95", // #e9895f
    "--color-tertiary-500": "224 87 26", // #e0571a
    "--color-tertiary-600": "202 78 23", // #ca4e17
    "--color-tertiary-700": "168 65 20", // #a84114
    "--color-tertiary-800": "134 52 16", // #863410
    "--color-tertiary-900": "110 43 13", // #6e2b0d
    // success | #094a1d
    "--color-success-50": "218 228 221", // #dae4dd
    "--color-success-100": "206 219 210", // #cedbd2
    "--color-success-200": "194 210 199", // #c2d2c7
    "--color-success-300": "157 183 165", // #9db7a5
    "--color-success-400": "83 128 97", // #538061
    "--color-success-500": "9 74 29", // #094a1d
    "--color-success-600": "8 67 26", // #08431a
    "--color-success-700": "7 56 22", // #073816
    "--color-success-800": "5 44 17", // #052c11
    "--color-success-900": "4 36 14", // #04240e
    // warning | #05b269
    "--color-warning-50": "218 243 233", // #daf3e9
    "--color-warning-100": "205 240 225", // #cdf0e1
    "--color-warning-200": "193 236 218", // #c1ecda
    "--color-warning-300": "155 224 195", // #9be0c3
    "--color-warning-400": "80 201 150", // #50c996
    "--color-warning-500": "5 178 105", // #05b269
    "--color-warning-600": "5 160 95", // #05a05f
    "--color-warning-700": "4 134 79", // #04864f
    "--color-warning-800": "3 107 63", // #036b3f
    "--color-warning-900": "2 87 51", // #025733
    // error | #8c699a
    "--color-error-50": "238 233 240", // #eee9f0
    "--color-error-100": "232 225 235", // #e8e1eb
    "--color-error-200": "226 218 230", // #e2dae6
    "--color-error-300": "209 195 215", // #d1c3d7
    "--color-error-400": "175 150 184", // #af96b8
    "--color-error-500": "140 105 154", // #8c699a
    "--color-error-600": "126 95 139", // #7e5f8b
    "--color-error-700": "105 79 116", // #694f74
    "--color-error-800": "84 63 92", // #543f5c
    "--color-error-900": "69 51 75", // #45334b
    // surface | #a4a2f1
    "--color-surface-50": "241 241 253", // #f1f1fd
    "--color-surface-100": "237 236 252", // #edecfc
    "--color-surface-200": "232 232 252", // #e8e8fc
    "--color-surface-300": "219 218 249", // #dbdaf9
    "--color-surface-400": "191 190 245", // #bfbef5
    "--color-surface-500": "164 162 241", // #a4a2f1
    "--color-surface-600": "148 146 217", // #9492d9
    "--color-surface-700": "123 122 181", // #7b7ab5
    "--color-surface-800": "98 97 145", // #626191
    "--color-surface-900": "80 79 118" // #504f76

  }
};