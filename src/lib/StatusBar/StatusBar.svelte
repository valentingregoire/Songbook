<script lang="ts">
  import ExtraInfo from "./ExtraInfo.svelte";
  import CurrentInfo from "./CurrentInfo.svelte";
  import NextSongInfo from "./NextSongInfo.svelte";
  import SongNumber from "./SongNumber.svelte";
  import PageNumber from "./PageNumber.svelte";
  import { AppBar } from "@skeletonlabs/skeleton";
  import type Songbook from "$models/songbook.model";

  export let songId: number;
  export let songbook: Songbook;
  export let pageId: number;

  // currentPageStore.subscribe((value) => page = value);
  // currentSongIndexStore.subscribe((value) => currentSongIndex = value);
  // currentSongbookStore.subscribe((s) => songbook = s);
  $: song = songbook?.songs[songId];
</script>

<AppBar>
  <svelte:fragment slot="lead">
      <CurrentInfo {song} {songbook}/>
  </svelte:fragment>
    <ExtraInfo {song} />
  <svelte:fragment slot="trail">
      <NextSongInfo {songId} {songbook}/>
      <SongNumber {songId} {songbook}/>
      <PageNumber {song} {pageId}/>
  </svelte:fragment>
</AppBar>
