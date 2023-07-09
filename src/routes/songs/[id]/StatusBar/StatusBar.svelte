<script lang="ts">
  import ExtraInfo from "./ExtraInfo.svelte";
  import CurrentInfo from "./CurrentInfo.svelte";
  import NextSongInfo from "./NextSongInfo.svelte";
  import SongNumber from "./SongNumber.svelte";
  import PageNumber from "./PageNumber.svelte";
  import { currentPageStore, currentSongbookStore, currentSongIndexStore, currentSongStore } from "../../../../stores";
  import { AppBar } from "@skeletonlabs/skeleton";
  import type Songbook from "../../../../models/songbook.model";
  import type Song from "../../../../models/song.model";

  export let song: Song;
  let page: number = 1;
  let currentSongIndex = 0;
  let songbook: Songbook;

  currentPageStore.subscribe((value) => page = value);
  currentSongIndexStore.subscribe((value) => currentSongIndex = value);
  currentSongbookStore.subscribe((s) => songbook = s);
</script>

<AppBar>
  <svelte:fragment slot="lead">
      <CurrentInfo {song} {songbook}/>
  </svelte:fragment>
    <ExtraInfo {song} />
  <svelte:fragment slot="trail">
      <NextSongInfo {currentSongIndex} {songbook}/>
      <SongNumber {currentSongIndex} {songbook}/>
      <PageNumber {song} {page}/>
  </svelte:fragment>
</AppBar>
