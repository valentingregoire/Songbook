<script lang="ts">
  import Sheet from "./Sheet.svelte";
  import SideButton from "./SideButton.svelte";
  import BottomButton from "./BottomButton.svelte";
  import type Songbook from "$models/songbook.model";
  import { Drawer, type DrawerSettings, drawerStore } from "@skeletonlabs/skeleton";
  import { goto } from "$app/navigation";
  import { tick } from "svelte";
  import Menu from "./Menu.svelte";

  export let songbook: Songbook;
  export let songId: number;
  export let pageId: number;

  let menu: Drawer;

  $: song = songbook?.songs[songId];
  $: songs = songbook?.songs;
  $: songbookSize = songs?.length;
  $: pages = song?.pages?.length || 1;

  async function previousPage() {
    const songIdNew = pageId == 0 ? (songId + songbookSize - 1) % songbookSize : songId;
    const pageIdNew = pageId == 0 ? songs[songIdNew].pages?.length - 1 || 0 : pageId - 1;
    await navigate(songIdNew, pageIdNew);
  }

  async function nextPage(): Promise<void> {
    const songIdNew = pageId == pages - 1 ? (songId + 1) % songbookSize : songId;
    const pageIdNew = pageId == pages - 1 ? 0 : pageId + 1;
    await navigate(songIdNew, pageIdNew);
  }

  async function previousSong(): Promise<void> {
    // const songIdNew = songId === 0 ? songbookSize - 1 : songId - 1;
    const songIdNew = (songId + songbookSize - 1) % +songbookSize;
    await navigate(songIdNew);
  }

  async function nextSong(): Promise<void> {
    const songIdNew = (songId + 1) % +songbookSize;
    await navigate(songIdNew);
  }

  async function navigate(songId: number, pageId: number = 0): Promise<void> {
    // $page.url.searchParams.set("pageId", String(pageId));
    await tick();
    await goto(`/songbooks/${songbook?.name}/songs/${songId}?pageId=${pageId}`, { replaceState: true });
  }

</script>

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
    <BottomButton on:click={menu.openMenuDrawer} />
    <Menu bind:this={menu} {songs} songbookName={songbook.name} />
  </div>
</div>
