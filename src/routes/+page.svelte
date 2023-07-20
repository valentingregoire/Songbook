<script lang="ts">
  import { onMount, tick } from "svelte";
  import SongMap from "$models/song.model";
  import Song from "$models/song.model";
  import { get } from "$lib/api";
  import { settingsMapStore, songbooksStore, songsStore } from "$stores";
  import { ProgressBar } from "@skeletonlabs/skeleton";
  import { fly } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import LoadingItem from "$lib/LoadingItem.svelte";
  import { ComponentType } from "$models/components.model";

  let songMap: SongMap;
  let pagesToLoad: number = 0;
  let totalLoaded = 0;
  let totalToLoad = 1;

  // [component, [loaded, toLoad]]
  const loadingItems = {
    [ComponentType.Components]: false,
    [ComponentType.Songs]: false,
    [ComponentType.Songbooks]: false,
    [ComponentType.Settings]: false,
    [ComponentType.Pages]: false
  };

  function getProgress(component: ComponentType) {
    return typeof loadingItems[component] !== "boolean" && loadingItems[component].length === 2 ? loadingItems[component][0] / loadingItems[component][1] * 100 : 0;
  }

  $: progress = {
    [ComponentType.Components]: false,
    [ComponentType.Songs]: getProgress(ComponentType.Songs),
    [ComponentType.Songbooks]: loadingItems[ComponentType.Songbooks].length === 2 ? loadingItems[ComponentType.Songbooks][0] / loadingItems[ComponentType.Songbooks][1] * 100 : 0,
    [ComponentType.Settings]: loadingItems[ComponentType.Settings].length === 2 ? loadingItems[ComponentType.Settings][0] / loadingItems[ComponentType.Settings][1] * 100 : 0,
    [ComponentType.Pages]: loadingItems[ComponentType.Pages].length === 2 ? loadingItems[ComponentType.Pages][0] / loadingItems[ComponentType.Pages][1] * 100 : 0
  };

  $: if (loadingItems[ComponentType.Pages]?.length === 2) {
    totalLoaded = Object.values(loadingItems).reduce((acc, cur) => +acc + cur[0], 0);
    totalToLoad = Object.values(loadingItems).reduce((acc, cur) => +acc + cur[1], 0);
  }

  $: isSongsLoaded = progress[ComponentType.Songs] === 100;

  const progressAnimation = tweened(0, {
    duration: 100,
    easing: cubicOut
  });

  async function unitLoaded() {
    await tick();
    const pagesLoaded = loadingItems[ComponentType.Pages][0] + 1;
    loadingItems[ComponentType.Pages] = [pagesLoaded, pagesToLoad];
    if (pagesLoaded >= pagesToLoad) {
      // await goto("/home");
    } else {
      await progressAnimation.set(pagesLoaded / pagesToLoad * 100);
    }
  }

  onMount(async () => {
    await get("api/songs").then(songs => {
      songMap = songs;
      songsStore.set(songs);
      pagesToLoad = Object.values(songs).reduce((acc, cur) => +acc + cur?.pages?.length, 0);
      loadingItems[ComponentType.Pages] = [0, pagesToLoad];
      loadingItems[ComponentType.Songs] = [1, 1];
    });

    get("api/songbooks").then(songbooks => {
      loadingItems[ComponentType.Songbooks] = [1, 2];
      songbooks.forEach(songbook => songbook.songs = songbook.songs.map(song => songMap[song] || new Song(song)));
      songbooksStore.set(songbooks);
      loadingItems[ComponentType.Songbooks] = [2, 2];
    });

    get("api/settings").then(settings => {
        settingsMapStore.set(settings);
        loadingItems[ComponentType.Settings] = [1, 1];
      }
    );
  });
</script>

<svelte:head>
  {#if isSongsLoaded}
    {#each Object.values(songMap) as song}
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
    <div class="w-full grid grid-cols-1 justify-items-center">
      <div class="flex mt-3 text-primary-400 text-lg">
        <ul class="list">
          {#if loadingItems}
            {#each Object.entries(loadingItems) as [key, value]}
              <li>
                <div class="flex items-center">
                  <span>
                    <LoadingItem value={progress[key]} />
                  </span>
                  <span class="ml-2">{key}</span>
                </div>
              </li>
            {/each}
          {/if}
        </ul>
      </div>
    </div>
    <ProgressBar class="mt-4 w-[80%]" track="bg-primary-200" meter="bg-primary-400" label="Loading..."
                 value={totalLoaded / totalToLoad * 100} />
  </div>
</div>
