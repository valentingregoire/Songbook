<script lang="ts">
  import SideButton from "$lib/Viewer/SideButton.svelte";
  import BottomButton from "$lib/Viewer/BottomButton.svelte";
  import Sheet from "$lib/Viewer/Sheet.svelte";
  import { currentPageStore, currentSongStore, currentSongbookStore, currentSongIndexStore } from "../../stores";

  let page: number = 1;
  let currentSongIndex = 0;
  let currentSongbook;
  let currentSong;

  currentPageStore.subscribe((value) => page = value);
  currentSongIndexStore.subscribe((value) => currentSongIndex = value);
  currentSongbookStore.subscribe((s) => currentSongbook = s);
  currentSongStore.subscribe((s) => currentSong = s);

  function previousPage() {
    // if (page > 1) {
    //   page--;
    // } else if (currentSongIndexLocal > 0) {
    //   currentSongIndex.update((value) => value - 1);
    //   currentPage.update((value) => value + 1);
    // }
    currentPageStore.update((value) => value - 1);
  }

  function nextPage() {
    currentPageStore.update((value) => value + 1);
  }

  function previousSong() {
    currentSongIndexStore.update((value) => value - 1);
  }

  function nextSong() {
    currentSongIndexStore.update((value) => value + 1);
  }
</script>

<div class="flex h-full justify-center content-center">
  <Sheet {page} {currentSong}/>
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
