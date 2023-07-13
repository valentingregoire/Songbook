<script lang="ts">
  import Sheet from "./Sheet.svelte";
  import SideButton from "./SideButton.svelte";
  import BottomButton from "./BottomButton.svelte";
  import type Songbook from "$models/songbook.model";
  import { Drawer, type DrawerSettings, drawerStore } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { tick } from "svelte";

  export let songbook: Songbook;
  export let songId: number;
  export let pageId: number;

  $: song = songbook?.songs[songId];
  $: songs = songbook?.songs;
  $: songbookSize = songs?.length;
  $: pages = song?.pages?.length;

  function previousPage() {
    if (pageId == 0) {
      previousSong(false);
    } else {
      pageId--;
    }
    navigate();
  }

  async function nextPage(): Promise<void> {
    if (pageId === +pages - 1) {
      await nextSong();
    } else {
      pageId++;
    }
    await navigate();
  }

  async function previousSong(start: boolean = true): Promise<void> {
    songId = (songId + +songbookSize - 1) % +songbookSize;
    if (start)
      pageId = 0;
    else
      await tick();
    pageId = +pages - 1;
    await navigate();
  }

  async function nextSong(): Promise<void> {
    songId = (songId + 1) % +songbookSize;
    pageId = 0;
    await navigate();
  }

  async function navigate(): Promise<void> {
    $page.url.searchParams.set("pageId", String(pageId));
    await tick();
    await goto(`/songbooks/${songbook?.name}/songs/${songId}?${$page.url.searchParams}`, { replaceState: true });
  }

  function openBottomDrawer(): void {
    const drawerSettings: DrawerSettings = {
      id: "bottom-drawer",
      position: "bottom",
      // bgDrawer: 'bg-purple-900 text-white',
      // bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
      // width: 'w-[280px] md:w-[480px]',
      height: "h-[80%]",
      padding: "px-4 pt-4",
      rounded: "rounded-t-xl"
    };
    drawerStore.open(drawerSettings);
  }
</script>

<!--{JSON.stringify(song)} - {pageId} - {pages}-->
<div class="grid grid-cols-1 w-full relative h-screen justify-items-center">
  <Sheet {song} {pageId} />
  <div class="block w-full h-full">
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
    <BottomButton on:click={openBottomDrawer} />
  </div>
  <Drawer>
    Klik buiten het veld om te sluiten.
  </Drawer>
</div>
