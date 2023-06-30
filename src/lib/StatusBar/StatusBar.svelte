<script lang="ts">
  import NextSongInfo from "$lib/StatusBar/NextSongInfo.svelte";
  import SongNumber from "$lib/StatusBar/SongNumber.svelte";
  import PageNumber from "$lib/StatusBar/PageNumber.svelte";
  import CurrentInfo from "$lib/StatusBar/CurrentInfo.svelte";
  import { currentPageStore, currentSongStore, currentSongbookStore, currentSongIndexStore } from "../../stores";
  import ExtraInfo from "./ExtraInfo.svelte";

  let page: number = 1;
  let currentSongIndex = 0;
  let currentSongbook;
  let currentSong;

  currentPageStore.subscribe((value) => page = value);
  currentSongIndexStore.subscribe((value) => currentSongIndex = value);
  currentSongbookStore.subscribe((s) => currentSongbook = s);
  currentSongStore.subscribe((s) => currentSong = s);
</script>

<div class="flex absolute top-0 left-0 w-full">
  <CurrentInfo {currentSong} {currentSongbook}/>
  <ExtraInfo {currentSong} />
  <NextSongInfo {currentSongIndex} {currentSongbook}/>
  <SongNumber {currentSongIndex} {currentSongbook}/>
  <PageNumber {currentSong} {page}/>
</div>
