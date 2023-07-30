export class Settings {
  layout: {
    sideBar: {
      show?: boolean;
      labels?: boolean;
      width?: string;
    }
    animationSpeed?: number;
  } = {sideBar: {}};
  viewer: {
    sideButtonWidth?: string;
    bottomButtonHeight?: string;
    showButtons?: boolean;
  } = {};
}

export enum SettingsType {
  Default,
  User
}

export type SettingsMap = {
  [key in SettingsType]: Settings;
}