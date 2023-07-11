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

  let songs: SongMap;
  let imagesToLoad: number = 0;
  let imagesLoaded: number = 0;
  let comment: string;

  const progress = tweened(0, {
    duration: 1,
    easing: cubicOut
  });

  onMount(async () => {
    comment = "Loading songs...";
    songs = await get("api/songs");
    songsStore.set(songs);
    comment = "Loading songbooks...";
    const songbooks: Array<Songbook> = await get("api/songbooks");
    songbooks.forEach(songbook => songbook.songs = songbook.songs.map(song => songs[song] || new Song(song)));
    songbooksStore.set(songbooks);
    comment = "Loading images...";
    await goto("/home");
  });

  $:if (songs) {
    imagesToLoad = Object.values(songs).reduce((acc, cur) => +acc + cur?.pages?.length, 0);
  }

  function imageLoaded() {
    imagesLoaded++;
    if (imagesToLoad > 0) progress.set(imagesLoaded / imagesToLoad * 100);
  }

</script>

<svelte:head>
  {#if songs}
    {#each Object.values(songs) as song}
      {#each song.pages as page}
        <link rel="preload" as="image" href="songs/{song.title}/{page}" on:load={imageLoaded} />
      {/each}
    {/each}
  {/if}
</svelte:head>

<!--{imagesLoaded} / {imagesToLoad} / {$progress}-->
<div class="grid grid-cols-1 h-full justify-items-center content-center"
     transition:fly={{y: 200, delay: 1000, duration: 250}}>
  <img src="icon.png" alt="logo" />
  <ProgressBar class="mt-8 w-[512px]" label="Loading data..." value={$progress} />
  {#if comment}
    <div class="flex mt-4">
      <span class="badge-icon"><FaFileDownload /></span>
      <span class="badge-text"> {comment}</span>
    </div>
  {/if}
</div>
