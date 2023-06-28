<script lang="ts">
  import SideButton from "$lib/Viewer/SideButton.svelte";
  import BottomButton from "$lib/Viewer/BottomButton.svelte";
  import Sheet from "$lib/Viewer/Sheet.svelte";
  import { currentPage, currentSongIndex } from "../../stores";

  let page: number = 1;
  let currentSongIndexLocal = 0;

  currentPage.subscribe((value) => page = value);
  currentSongIndex.subscribe((value) => currentSongIndexLocal = value);

  function previousPage() {
    // if (page > 1) {
    //   page--;
    // } else if (currentSongIndexLocal > 0) {
    //   currentSongIndex.update((value) => value - 1);
    //   currentPage.update((value) => value + 1);
    // }
    currentPage.update((value) => value - 1);
  }

  function nextPage() {
    currentPage.update((value) => value + 1);
  }

  function previousSong() {
    currentSongIndex.update((value) => value - 1);
  }

  function nextSong() {
    currentSongIndex.update((value) => value + 1);
  }
</script>

<div class="flex h-full justify-center content-center">
  <Sheet {page} />
  <SideButton
    classes="top-0 left-0"
    on:click={previousPage}>
  </SideButton>
  <SideButton
    classes="top-0 right-0"
    on:click={nextPage}>
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
