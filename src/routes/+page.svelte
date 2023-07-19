<script lang="ts">
  import { onMount, tick } from "svelte";
  import SongMap from "$models/song.model";
  import Song from "$models/song.model";
  import { get } from "$lib/api";
  import { settingsMapStore, songbooksStore, songsStore } from "$stores";
  import { goto } from "$app/navigation";
  import { ProgressBar } from "@skeletonlabs/skeleton";
  import { fly } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import type { Settings } from "$models/settings.model";
  import LoadingItem from "$lib/LoadingItem.svelte";
  import { ComponentType } from "$models/components.model";

  let songs: SongMap;
  let pagesToLoad: number = 0;

  // [component, [loaded, toLoad]]
  const loadingItems: Map<ComponentType, Array<number>> = new Map(
    [
      [ComponentType.Components, []],
      [ComponentType.Songs, []],
      [ComponentType.Songbooks, []],
      [ComponentType.Settings, []],
      [ComponentType.Pages, []]
    ]
  );

  // $:if (songs) {
  //   pagesToLoad = Object.values(songs).reduce((acc, cur) => +acc + cur?.pages?.length, 0);
  // }

  const progress = tweened(0, {
    duration: 100,
    easing: cubicOut
  });

  async function unitLoaded() {
    await tick();
    const pagesLoaded = loadingItems.get(ComponentType.Pages)[0] + 1;
    loadingItems.set(ComponentType.Pages, [pagesLoaded, pagesToLoad]);
    if (pagesLoaded >= pagesToLoad) {
      await goto("/home");
    } else {
      await progress.set(pagesLoaded / pagesToLoad * 100);
    }
  }

  onMount(async () => {
    get("api/songs").then(songs => {
      songsStore.set(songs);
      pagesToLoad = Object.values(songs).reduce((acc, cur) => +acc + cur?.pages?.length, 0);
      loadingItems.set(ComponentType.Pages, [0, pagesToLoad]);
      loadingItems.set(ComponentType.Songs, [1, 1]);
    });

    get("api/songbooks").then(songbooks => {
      loadingItems.set(ComponentType.Songbooks, [1, 2]);
      songbooks.forEach(songbook => songbook.songs = songbook.songs.map(song => songs[song] || new Song(song)));
      songbooksStore.set(songbooks);
      loadingItems.set(ComponentType.Songbooks, [2, 2]);
    });

    get("api/settings").then(settings => {
        settingsMapStore.set(settings);
        loadingItems.set(ComponentType.Settings, [1, 1]);
      }
    );
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
    <!--    <div class="grid grid-cols-1 absolute w-[240px] top-[458px] justify-items-center">-->
    <div class="w-full grid grid-cols-1 justify-items-center">
      <ProgressBar class="mt-8" track="bg-primary-200" meter="bg-primary-400" label="Loading..." value={$progress} />
      <div class="flex mt-3 text-primary-400 text-lg">
        <!--        <span class="badge-icon h-[22px] mt-1"><FaFileDownload /></span>-->
        <!--        <span class="badge-text"> {comment}</span>-->
        <ul class="list">
          {#if loadingItems}
            {#each loadingItems as [key, value]}
              <li>
                <div class="flex items-center">
                  <span><LoadingItem value={value[0] / value[1] * 100} /></span>
                  <span> {key}</span>
                </div>
              </li>
            {/each}
          {/if}
        </ul>
      </div>
    </div>
  </div>
</div>
