import { derived, writable } from "svelte/store";
import type { Songbook } from "../models/songbook.model";

// export let settings = writable({});
export const songbooks = writable<Songbook[]>([]);
// export let songbookNames = writable<string[]>([]);
// export let currentSongbook = writable<Songbook>();
export const currentSongbook = derived(songbooks, ($songbooks) => {
  return $songbooks.find((songbook) => songbook.default)
});
export const currentSongIndex = writable<number>(0);
export const currentPage = writable<number>(1);
export const currentSong = derived(
  [currentSongbook, currentSongIndex],
  ([$currentSongbook, $currentSongIndex]) => {
    console.log("---", $currentSongbook, $currentSongIndex);
    return $currentSongbook?.songs[$currentSongIndex];
  }
);

// function getDefaultSongbook() Vjj{
//   return songbooks.get().find((songbook) => songbook.default);
// }