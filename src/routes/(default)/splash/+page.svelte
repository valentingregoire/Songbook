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
  import { goto } from "$app/navigation";
  import Icon from "$lib/Icon.svelte";
  import { fade } from "svelte/transition";

  let songMap: SongMap;
  let totalLoaded = 0;
  let totalToLoad = 1;
  let totalProgress = 0;

  // [component, [loaded, toLoad]]
  const loadingItems = {
    [ComponentType.Songs]: [],
    [ComponentType.Songbooks]: [],
    [ComponentType.Settings]: [],
    [ComponentType.Pages]: []
  };

  $: loadingProgress = Object.fromEntries(Object.entries(loadingItems).map(([key, value]) => {
    return [key, value.length == 2 ? value[0] / value[1] * 100 : undefined];
  }));

  const progress = tweened(0, {
    duration: 100,
    easing: cubicOut
  });

  $: if (loadingItems[ComponentType.Pages]?.length === 2) {
    (async () => {
      totalLoaded = Object.values(loadingItems).reduce((acc, cur) => {
        return +acc + cur[0];
      }, 0);
      totalToLoad = Object.values(loadingItems).reduce((acc, cur) => {
        return +acc + cur[1];
      }, 0);
      totalProgress = totalLoaded / totalToLoad * 100;
      await progress.set(totalProgress);
      // if (totalProgress === 100 && loadingItems[ComponentType.Pages][1] > 0) {
      //   await tick();
      //   await goto("/home");
      // }
    })();
  }

  async function songPageLoaded() {
    await tick();
    loadingItems[ComponentType.Pages][0]++;
  }

  onMount(async () => {
    loadingItems[ComponentType.Songs] = [0, 2];
    await get("api/songs").then(songs => {
      loadingItems[ComponentType.Songs] = [1, 2];
      songMap = songs;
      songsStore.set(songs);
      const pagesToLoad = Object.values(songs).reduce((acc, cur) => +acc + cur?.pages?.length, 0);
      loadingItems[ComponentType.Pages] = [0, pagesToLoad];
      loadingItems[ComponentType.Songs] = [2, 2];
    });

    loadingItems[ComponentType.Songbooks] = [0, 2];
    get("api/songbooks").then(songbooks => {
      loadingItems[ComponentType.Songbooks] = [1, 2];
      songbooks.forEach(songbook => songbook.songs = songbook.songs.map(song => songMap[song] || new Song(song)));
      songbooksStore.set(songbooks);
      loadingItems[ComponentType.Songbooks] = [2, 2];
    });

    loadingItems[ComponentType.Settings] = [0, 1];
    get("api/settings").then(settings => {
        settingsMapStore.set(settings);
        loadingItems[ComponentType.Settings] = [1, 1];
      }
    );
  });
</script>


<svelte:head>
  {#if loadingProgress[ComponentType.Songs] === 100}
    {#each Object.values(songMap) as song}
      {#each song.pages as page}
        <link rel="preload" as="image" href="songs/{song.title}/{page}" on:load={songPageLoaded} />
      {/each}
    {/each}
  {/if}
</svelte:head>

<div class="flex w-screen h-screen justify-center" transition:fly={{y: 200, duration: 250}}>
  <div class="grid grid-cols-1 h-full w-[512px] justify-items-center content-center">
    <img src="icon.png" alt="logo" />
    <div class="w-full grid grid-cols-1 justify-items-center">
      <div class="flex mt-3 text-lg">
        <ul class="list">
          {#if loadingItems}
            {#each Object.entries(loadingItems) as [key, value]}
              <li>
                <div class="flex items-center">
                  <span>
                    <LoadingItem value={loadingProgress[key]} />
                  </span>
                  <span class="ml-2">{key}</span>
                </div>
              </li>
            {/each}
          {/if}
        </ul>
      </div>
    </div>
    {#key totalProgress}
      <ProgressBar class="mt-4 w-[80%]"
                   track="bg-primary-300"
                   meter="bg-primary-500"
                   label="Loading..."
                   value={$progress}
                   on:transitionend={goto("/home")}
      />
    {/key}
  </div>
</div>
