<script lang="ts">
  import { onMount } from "svelte";
  import SongMap from "../models/song.model";
  import Song from "../models/song.model";
  import { get } from "../lib/api";
  import { songbooksStore, songsStore } from "../stores";
  import Songbook from "../models/songbook.model";
  import { goto } from "$app/navigation";
  import { ProgressBar } from "@skeletonlabs/skeleton";
  import { fly } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import FaFileDownload from "svelte-icons/fa/FaFileDownload.svelte";

  // consider loading songs and songbooks as 5 in total
  const API_LOAD_WEIGHT: number = 2;

  let songs: SongMap;
  let unitsToLoad: number = 0;
  let unitsLoaded: number = 0;
  let comment: string = "Loading...";

  $:if (songs) {
    unitsToLoad = Object.values(songs).reduce((acc, cur) => +acc + cur?.pages?.length, API_LOAD_WEIGHT);
  }

  const progress = tweened(0, {
    duration: 100,
    easing: cubicOut
  });

  async function unitLoaded() {
    unitsLoaded++;
    if (unitsToLoad > 0) await progress.set(unitsLoaded / unitsToLoad * 100);
    if (unitsLoaded >= unitsToLoad) {
      comment = "Loading complete!";
      await goto("/home");
    }
  }

  onMount(async () => {
    comment = "Loading songs...";
    songs = await get("api/songs");
    songsStore.set(songs);
    await unitLoaded();
    comment = "Loading songbooks...";
    const songbooks: Array<Songbook> = await get("api/songbooks");
    songbooks.forEach(songbook => songbook.songs = songbook.songs.map(song => songs[song] || new Song(song)));
    songbooksStore.set(songbooks);
    await unitLoaded();
    comment = "Loading pages...";
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

<!--{unitsLoaded} / {unitsToLoad} / {$progress}-->
<div class="grid grid-cols-1 h-full justify-items-center content-center"
     transition:fly={{y: 200, duration: 250}}>
  <img src="icon.png" alt="logo" />
  <ProgressBar class="mt-8 w-[512px]" label="Loading..." value={$progress} />
  {#if comment}
    <div class="flex mt-4">
      <span class="badge-icon"><FaFileDownload /></span>
      <span class="badge-text"> {comment}</span>
    </div>
  {/if}
</div>
