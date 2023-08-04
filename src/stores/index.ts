import { derived, writable } from "svelte/store";
import type Song from "$models/song.model";
import type { Settings } from "$models/settings.model";
import { SettingsType } from "$models/settings.model";
import type Songbook from "$models/songbook.model";

export const songsStore = writable<Map<string, Song>>();
export const songbooksStore = writable<Map<string, Songbook>>();

export const settingsMapStore = writable<Map<SettingsType, Settings>>();
export const settingsStore = derived(settingsMapStore, ($settingsMap: Map<SettingsType, Settings>) => {
  if (!$settingsMap) return;
  return {
    ...$settingsMap.get(SettingsType.Default),
    ...$settingsMap.get(SettingsType.User)
  } as Settings;
});
