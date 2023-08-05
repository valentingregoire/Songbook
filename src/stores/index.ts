import { derived, writable } from "svelte/store";
import type Song from "$models/song.model";
import type { Settings } from "$models/settings.model";
import { SettingsType } from "$models/settings.model";
import type Songbook from "$models/songbook.model";

export const songsStore = writable<Map<string, Song>>();
export const songbooksStore = writable<Map<string, Songbook>>();

export const settingsMapStore = writable<Map<SettingsType, Settings>>();
export const settingsStore = derived(
  settingsMapStore,
  ($settingsMap: Map<SettingsType, Settings>) => {
    if (!$settingsMap) return;
    const defaultSettings = $settingsMap.get(SettingsType.Default);
    const userSettings = $settingsMap.get(SettingsType.User);
    return {
      ...defaultSettings,
      ...userSettings,
      layout: {
        ...defaultSettings?.layout,
        ...userSettings?.layout,
        sideBar: {
          ...defaultSettings?.layout?.sideBar,
          ...userSettings?.layout?.sideBar,
        },
      },
      viewer: {
        ...defaultSettings?.viewer,
        ...userSettings?.viewer,
      },
    } as Settings;
  }
);
