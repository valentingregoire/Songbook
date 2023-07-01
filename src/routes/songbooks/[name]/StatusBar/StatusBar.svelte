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
  let currentSongbook;
  let currentSong;

  currentPageStore.subscribe((value) => page = value);
  currentSongIndexStore.subscribe((value) => currentSongIndex = value);
  currentSongbookStore.subscribe((s) => currentSongbook = s);
  currentSongStore.subscribe((s) => currentSong = s);
</script>

<div class="flex justify-between absolute top-0 left-0 w-full">
  <LeftPart>
    <CurrentInfo {currentSong} {currentSongbook}/>
  </LeftPart>
  <MiddlePart>
    <ExtraInfo {currentSong} />
  </MiddlePart>
  <RightPart>
    <NextSongInfo {currentSongIndex} {currentSongbook}/>
    <SongNumber {currentSongIndex} {currentSongbook}/>
    <PageNumber {currentSong} {page}/>
  </RightPart>
</div>
