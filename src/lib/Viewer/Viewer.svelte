<script lang="ts">
  import Sheet from "./Sheet.svelte";
  import SideButton from "./SideButton.svelte";
  import BottomButton from "./BottomButton.svelte";
  import type Songbook from "$models/songbook.model";

  export let songbook: Songbook;
  export let songId: number;
  export let pageId: number;

  $: song = songbook?.songs[songId];
  $: songs = songbook?.songs;
  $: songbookSize = songs?.length;
  $: pages = songs[songId]?.pages.length;

  function previousPage() {
    if (pageId == 0) {
      previousSong(false);
    } else {
      pageId--;
    }
  }

  function nextPage() {
    if (pageId === pages - 1) {
      nextSong();
    } else {
      pageId++;
    }
  }

  function previousSong(start: boolean = true) {
    songId = (songId + songbookSize - 1) % songbookSize;
    if (start) pageId = 0; else pageId = pages - 1;
  }

  function nextSong() {
    songId = (songId + 1) % songbookSize;
    pageId = 0;
  }
</script>

<!--<div class="flex h-full w-full justify-center">-->
<div class="block mx-auto">
  <Sheet {song} {pageId} />
  <SideButton
    classes="top-0 left-0"
    on:click={previousSong}>
  </SideButton>
  <SideButton
    classes="top-0 right-0"
    on:click={nextSong}>
  </SideButton>
  <SideButton
    classes="bottom-0 left-0"
    on:click={previousPage}>
  </SideButton>
  <SideButton
    classes="bottom-0 right-0"
    on:click={nextPage}>
  </SideButton>
  <BottomButton />
</div>
