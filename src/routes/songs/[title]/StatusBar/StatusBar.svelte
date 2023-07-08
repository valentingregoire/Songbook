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
<!--    <LeftPart>-->
      <CurrentInfo {song} {songbook}/>
<!--    </LeftPart>-->
  </svelte:fragment>
<!--  <MiddlePart>-->
    <ExtraInfo {song} />
<!--  </MiddlePart>-->
  <svelte:fragment slot="trail">
<!--    <RightPart>-->
      <NextSongInfo {currentSongIndex} {songbook}/>
      <SongNumber {currentSongIndex} {songbook}/>
      <PageNumber {song} {page}/>
<!--    </RightPart>-->
  </svelte:fragment>
</AppBar>
<!--<div class="flex justify-between absolute top-0 left-0 w-full">-->
<!--  <LeftPart>-->
<!--    <CurrentInfo {song} {songbook}/>-->
<!--  </LeftPart>-->
<!--  <MiddlePart>-->
<!--    <ExtraInfo {song} />-->
<!--  </MiddlePart>-->
<!--  <RightPart>-->
<!--    <NextSongInfo {currentSongIndex} {songbook}/>-->
<!--    <SongNumber {currentSongIndex} {songbook}/>-->
<!--    <PageNumber {song} {page}/>-->
<!--  </RightPart>-->
<!--</div>-->
