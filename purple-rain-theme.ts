
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const purpleRainTheme: CustomThemeConfig = {
  name: 'purple-rain-theme',
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    "--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "0px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "255 255 255",
    "--on-secondary": "0 0 0",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "0 0 0",
    "--on-surface": "0 0 0",
    // =~= Theme Colors  =~=
    // primary | #8c54d9
    "--color-primary-50": "238 229 249", // #eee5f9
    "--color-primary-100": "232 221 247", // #e8ddf7
    "--color-primary-200": "226 212 246", // #e2d4f6
    "--color-primary-300": "209 187 240", // #d1bbf0
    "--color-primary-400": "175 135 228", // #af87e4
    "--color-primary-500": "140 84 217", // #8c54d9
    "--color-primary-600": "126 76 195", // #7e4cc3
    "--color-primary-700": "105 63 163", // #693fa3
    "--color-primary-800": "84 50 130", // #543282
    "--color-primary-900": "69 41 106", // #45296a
    // secondary | #8ea747
    "--color-secondary-50": "238 242 227", // #eef2e3
    "--color-secondary-100": "232 237 218", // #e8edda
    "--color-secondary-200": "227 233 209", // #e3e9d1
    "--color-secondary-300": "210 220 181", // #d2dcb5
    "--color-secondary-400": "176 193 126", // #b0c17e
    "--color-secondary-500": "142 167 71", // #8ea747
    "--color-secondary-600": "128 150 64", // #809640
    "--color-secondary-700": "107 125 53", // #6b7d35
    "--color-secondary-800": "85 100 43", // #55642b
    "--color-secondary-900": "70 82 35", // #465223
    // tertiary | #c352de
    "--color-tertiary-50": "246 229 250", // #f6e5fa
    "--color-tertiary-100": "243 220 248", // #f3dcf8
    "--color-tertiary-200": "240 212 247", // #f0d4f7
    "--color-tertiary-300": "231 186 242", // #e7baf2
    "--color-tertiary-400": "213 134 232", // #d586e8
    "--color-tertiary-500": "195 82 222", // #c352de
    "--color-tertiary-600": "176 74 200", // #b04ac8
    "--color-tertiary-700": "146 62 167", // #923ea7
    "--color-tertiary-800": "117 49 133", // #753185
    "--color-tertiary-900": "96 40 109", // #60286d
    // success | #b87bdb
    "--color-success-50": "244 235 250", // #f4ebfa
    "--color-success-100": "241 229 248", // #f1e5f8
    "--color-success-200": "237 222 246", // #eddef6
    "--color-success-300": "227 202 241", // #e3caf1
    "--color-success-400": "205 163 230", // #cda3e6
    "--color-success-500": "184 123 219", // #b87bdb
    "--color-success-600": "166 111 197", // #a66fc5
    "--color-success-700": "138 92 164", // #8a5ca4
    "--color-success-800": "110 74 131", // #6e4a83
    "--color-success-900": "90 60 107", // #5a3c6b
    // warning | #ae6592
    "--color-warning-50": "243 232 239", // #f3e8ef
    "--color-warning-100": "239 224 233", // #efe0e9
    "--color-warning-200": "235 217 228", // #ebd9e4
    "--color-warning-300": "223 193 211", // #dfc1d3
    "--color-warning-400": "198 147 179", // #c693b3
    "--color-warning-500": "174 101 146", // #ae6592
    "--color-warning-600": "157 91 131", // #9d5b83
    "--color-warning-700": "131 76 110", // #834c6e
    "--color-warning-800": "104 61 88", // #683d58
    "--color-warning-900": "85 49 72", // #553148
    // error | #86f1e6
    "--color-error-50": "237 253 251", // #edfdfb
    "--color-error-100": "231 252 250", // #e7fcfa
    "--color-error-200": "225 252 249", // #e1fcf9
    "--color-error-300": "207 249 245", // #cff9f5
    "--color-error-400": "170 245 238", // #aaf5ee
    "--color-error-500": "134 241 230", // #86f1e6
    "--color-error-600": "121 217 207", // #79d9cf
    "--color-error-700": "101 181 173", // #65b5ad
    "--color-error-800": "80 145 138", // #50918a
    "--color-error-900": "66 118 113", // #427671
    // surface | #c380cb
    "--color-surface-50": "246 236 247", // #f6ecf7
    "--color-surface-100": "243 230 245", // #f3e6f5
    "--color-surface-200": "240 223 242", // #f0dff2
    "--color-surface-300": "231 204 234", // #e7ccea
    "--color-surface-400": "213 166 219", // #d5a6db
    "--color-surface-500": "195 128 203", // #c380cb
    "--color-surface-600": "176 115 183", // #b073b7
    "--color-surface-700": "146 96 152", // #926098
    "--color-surface-800": "117 77 122", // #754d7a
    "--color-surface-900": "96 63 99", // #603f63

  }
}