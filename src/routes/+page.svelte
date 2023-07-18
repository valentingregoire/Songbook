<script lang="ts">
  import { onMount, tick } from "svelte";
  import SongMap from "$models/song.model";
  import Song from "$models/song.model";
  import { get } from "$lib/api";
  import { settingsMapStore, songbooksStore, songsStore } from "$stores";
  import Songbook from "$models/songbook.model";
  import { goto } from "$app/navigation";
  import { ProgressBar } from "@skeletonlabs/skeleton";
  import { fly } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import type { Settings } from "$models/settings.model";

  let songs: SongMap;
  let unitsToLoad: number = 0;
  let unitsLoaded: number = 0;
  let settings: Settings;
  let comment: string = "Loading components";

  $:if (songs) {
    unitsToLoad = Object.values(songs).reduce((acc, cur) => +acc + cur?.pages?.length, 0);
  }

  const progress = tweened(0, {
    duration: 100,
    easing: cubicOut
  });

  async function unitLoaded() {
    unitsLoaded++;
    await tick();
    if (unitsToLoad > 0) await progress.set(unitsLoaded / unitsToLoad * 100);
    if (unitsLoaded >= unitsToLoad) {
      comment = "Loading complete!";
      await goto("/home");
    }
  }

  onMount(async () => {
    comment += "\nLoading songs";
    songs = await get("api/songs");
    songsStore.set(songs);

    comment += "\nLoading songbooks";
    const songbooks: Array<Songbook> = await get("api/songbooks");
    songbooks.forEach(songbook => songbook.songs = songbook.songs.map(song => songs[song] || new Song(song)));
    songbooksStore.set(songbooks);

    comment += "\Loading settings";
    settings = await get("api/settings");
    settingsMapStore.set(settings);

    comment += "\Loading pages";
  });
</script>

<svelte:head>
  {#if songs}
    {#each Object.values(songs) as song}
      {#each song.pages as page}
        <link rel="preload" as="image" href="songs/{song.title}/{page}" on:load={unitLoaded} />
      {/each}
    {/each}
  {/if}
</svelte:head>

<div class="flex w-screen h-screen justify-center">
  <div class="grid grid-cols-1 h-full w-[512px] justify-items-center content-center"
       transition:fly={{y: 200, duration: 250}}>
    <img src="icon.png" alt="logo" />
    <div class="grid grid-cols-1 absolute w-[240px] top-[458px] justify-items-center">
      <ProgressBar class="mt-8" height="h-10" track="bg-primary-200" meter="bg-primary-400" label="Loading..." value={$progress} />
      <div class="flex mt-3 text-primary-400 text-lg">
<!--        <span class="badge-icon h-[22px] mt-1"><FaFileDownload /></span>-->
        <span class="badge-text"> {comment}</span>
      </div>
    </div>
    {#if comment}
    {/if}
  </div>
</div>
