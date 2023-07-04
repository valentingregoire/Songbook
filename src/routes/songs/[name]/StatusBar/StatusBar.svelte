<script lang="ts">
  import ExtraInfo from "./ExtraInfo.svelte";
  import MiddlePart from "./MiddlePart.svelte";
  import LeftPart from "./LeftPart.svelte";
  import CurrentInfo from "./CurrentInfo.svelte";
  import RightPart from "./RightPart.svelte";
  import NextSongInfo from "./NextSongInfo.svelte";
  import SongNumber from "./SongNumber.svelte";
  import PageNumber from "./PageNumber.svelte";
  import { currentPageStore, currentSongbookStore, currentSongIndexStore, currentSongStore } from "../../../../stores";

  let page: number = 1;
  let currentSongIndex = 0;
  export let songbook;
  export let song;

  currentPageStore.subscribe((value) => page = value);
  currentSongIndexStore.subscribe((value) => currentSongIndex = value);
  currentSongbookStore.subscribe((s) => songbook = s);
  currentSongStore.subscribe((s) => song = s);
</script>

<div class="flex justify-between absolute top-0 left-0 w-full">
  <LeftPart>
    <CurrentInfo {song} {songbook}/>
  </LeftPart>
  <MiddlePart>
    <ExtraInfo {song} />
  </MiddlePart>
  <RightPart>
    <NextSongInfo {currentSongIndex} {songbook}/>
    <SongNumber {currentSongIndex} {songbook}/>
    <PageNumber {song} {page}/>
  </RightPart>
</div>
