export class Settings {
  layout: {
    showSideBar?: boolean;
    animationSpeed?: number;
  } = {};
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