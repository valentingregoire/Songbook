<script lang="ts">
  import Sheet from "./Sheet.svelte";
  import SideButton from "./SideButton.svelte";
  import BottomButton from "./BottomButton.svelte";
  import type Songbook from "$models/songbook.model";
  import { goto } from "$app/navigation";
  import { tick } from "svelte";
  import { Direction, Subject } from "$models/layout.model";
  import { type Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
  import Menu from "$lib/Viewer/Menu.svelte";

  const drawerStore = getDrawerStore();

  export let songbook: Songbook;
  export let songId: number;
  export let pageId: number;

  $: song = songbook?.songObjects[songId];
  $: songbookSize = songbook?.songs?.length;
  $: pages = song?.pages?.length || 1;

  async function previousPage() {
    const songIdNew =
      pageId == 0 ? (songId + songbookSize - 1) % songbookSize : songId;
    const pageIdNew =
      pageId == 0
        ? songbook?.songObjects[songIdNew].pages?.length - 1 || 0
        : pageId - 1;
    await navigate(songIdNew, pageIdNew, Subject.Page, Direction.Previous);
  }

  async function nextPage(): Promise<void> {
    const songIdNew =
      pageId == pages - 1 ? (songId + 1) % songbookSize : songId;
    const pageIdNew = pageId == pages - 1 ? 0 : pageId + 1;
    await navigate(songIdNew, pageIdNew, Subject.Page, Direction.Next);
  }

  async function previousSong(): Promise<void> {
    const songIdNew = (songId + songbookSize - 1) % +songbookSize;
    await navigate(songIdNew, 0, Subject.Song, Direction.Previous);
  }

  async function nextSong(): Promise<void> {
    const songIdNew = (songId + 1) % +songbookSize;
    await navigate(songIdNew, 0, Subject.Song, Direction.Next);
  }

  async function navigate(
    songId: number,
    pageId: number,
    subject: Subject,
    direction: Direction
  ): Promise<void> {
    await tick();
    await goto(
      `/songbooks/${songbook?.name}/songs/${songId}?pageId=${pageId}&subject=${subject}&direction=${direction}`,
      { replaceState: true }
    );
  }

  function openDrawer(): void {
    const drawerSettings = {
      id: "drawer",
      // position: "bottom",
      meta: {
        "data-test": "drawer"
      }
    }
    console.log("closing")
    drawerStore.close();
    console.log("opening")
    drawerStore.open(drawerSettings);
    console.log("opened")
  }
</script>

<div class="grid grid-cols-1 w-full relative h-screen justify-items-center">
  <Sheet {song} {pageId} />
  <div class="block w-full h-full">
    <SideButton classes="top-0 left-0" on:click={previousSong} />
    <SideButton classes="top-0 right-0" on:click={nextSong} />
    <SideButton classes="bottom-0 left-0" on:click={previousPage} />
    <SideButton classes="bottom-0 right-0" on:click={nextPage} />
    <BottomButton on:click={openDrawer} />
<!--    <Menu-->
<!--      bind:this={drawer}-->
<!--      songs={songbook?.songs}-->
<!--      songbookName={songbook?.name}-->
<!--    />-->
  </div>
</div>
