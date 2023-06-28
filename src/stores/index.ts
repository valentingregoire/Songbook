import { derived, writable } from "svelte/store";
import type { Songbook } from "../models/songbook.model";

// export let settings = writable({});
export let songbooks = writable<Songbook[]>([]);

export let currentSongbook = writable<Songbook>();
export let currentSongIndex = writable<number>(0);
export let currentSong = derived(
  [currentSongbook, currentSongIndex],
  ([$currentSongbook, $currentSongIndex]) =>
    $currentSongbook.songs[$currentSongIndex]
);
export let currentPage = writable<number>(1);
