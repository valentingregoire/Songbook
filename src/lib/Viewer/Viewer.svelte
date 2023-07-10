<script lang="ts">
  import Sheet from "./Sheet.svelte";
  import SideButton from "./SideButton.svelte";
  import BottomButton from "./BottomButton.svelte";

  let page: number = 1;
  let currentSongIndex = 0;
  let currentSongbookSize;
  let currentSong;

  currentPageStore.subscribe((value) => page = value);
  currentSongIndexStore.subscribe((value) => currentSongIndex = value);
  currentSongbookSizeStore.subscribe((s) => currentSongbookSize = s);
  currentSongStore.subscribe((s) => currentSong = s);

  function previousPage() {
    if (page == 1) {
      currentSongIndexStore.update(value => (value + currentSongbookSize - 1) % currentSongbookSize);
      currentPageStore.set(currentSong.pages);
    } else {
      currentPageStore.update(value => (value + currentSong.pages - 1) % currentSong.pages);
    }
  }

  function nextPage() {
    if (page == currentSong.pages) {
      nextSong();
    } else {
      currentPageStore.update(value => value + 1);
    }
  }

  function previousSong() {
    currentSongIndexStore.update(value => (value + currentSongbookSize - 1) % currentSongbookSize);
    currentPageStore.set(1);
  }

  function nextSong() {
    currentSongIndexStore.update(value => (value + 1) % currentSongbookSize);
    currentPageStore.set(1);
  }
</script>

<div class="flex h-full justify-center content-center">
  <Sheet {page} {currentSong} />
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
