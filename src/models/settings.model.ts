export interface Settings {
  layout?: LayoutSettings;
  viewer?: ViewerSettings;
}

interface LayoutSettings {
  sideBar?: SideBarSettings;
  animationSpeed?: number;
}

interface SideBarSettings {
  show?: boolean;
  labels?: boolean;
  width?: string;
}

interface ViewerSettings {
  sideButtonWidth?: string;
  bottomButtonHeight?: string;
  showButtons?: boolean;
}

export enum SettingsType {
  Default = "DEFAULT",
  User = "USER"
}