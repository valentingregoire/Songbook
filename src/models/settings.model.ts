export interface Settings {
  viewer: {
    sideButtonWidth: string;
    bottomButtonHeight: string;
    showButtons: boolean;
  },
  menu: {
    showMenu: boolean;
  }
}

export enum SettingsType {
  Default,
  User
}

export type SettingsMap = {
  [key in SettingsType]: Settings;
}