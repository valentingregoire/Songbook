export interface Settings {
  viewer: {
    sideButtonWidth: string;
    bottomButtonHeight: string;
  };
}

export enum SettingsType {
  Default,
  User
}

export type SettingsMap = {
  [key in SettingsType]: Settings;
}