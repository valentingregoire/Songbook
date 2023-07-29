import { derived, writable } from "svelte/store";
import type Songbook from "$models/songbook.model";
import type { SongMap } from "$models/song.model";
import type { SettingsMap, Settings } from "$models/settings.model";
import { SettingsType } from "$models/settings.model";

// export let settings = writable({});
export const songbooksStore = writable<Songbook[]>([]);
export const songsStore = writable<SongMap>({});
// export let songbookNames = writable<string[]>([]);
// export let currentSongbook = writable<Songbook>();
export const currentSongbookStore = derived(songbooksStore, ($songbooks) => {
  return $songbooks.find((songbook) => songbook.default);
});
export const currentSongbookSizeStore = derived(currentSongbookStore, $currentSongbook => $currentSongbook?.songs?.length);
export const currentSongIndexStore = writable<number>(0);
export const currentPageStore = writable<number>(1);
export const currentSongStore = derived(
  [currentSongbookStore, currentSongIndexStore],
  ([$currentSongbook, $currentSongIndex]) => $currentSongbook?.songs[$currentSongIndex]);

export const settingsMapStore = writable<SettingsMap>();
export const settingsStore = derived(settingsMapStore, $settingsMap => {
  if (!$settingsMap) return;
  const settings: Settings = {
    layout: {
      ...$settingsMap[SettingsType.Default].layout,
      ...$settingsMap[SettingsType.User].layout
    },
    viewer: {
      ...$settingsMap[SettingsType.Default].viewer,
      ...$settingsMap[SettingsType.User].viewer
    }
  };
  return settings;
});