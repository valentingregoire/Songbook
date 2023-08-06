<script lang="ts">
  import { onMount, tick } from "svelte";
  import { get } from "$lib/api";
  import { settingsMapStore, songbooksStore, songsStore } from "$stores";
  import { ProgressBar } from "@skeletonlabs/skeleton";
  import { fly } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import LoadingItem from "$lib/LoadingItem.svelte";
  import { ComponentType } from "$models/components.model";
  import type Songbook from "$models/songbook.model";
  import Song from "$models/song.model";
  import type { Settings, SettingsType } from "$models/settings.model";
  import { navigate } from "$lib/utils";

  let songMap: Map<string, Song>;
  let totalLoaded: number = 0;
  let totalToLoad: number = 1;
  let totalProgress: number = 0;

  // [component, [loaded, toLoad]]
  const loadingItems = {
    [ComponentType.Songs]: [],
    [ComponentType.Songbooks]: [],
    [ComponentType.Settings]: [],
    [ComponentType.Pages]: [],
  };

  $: loadingProgress = Object.fromEntries(
    Object.entries(loadingItems).map(([key, value]) => {
      return [key, value.length == 2 ? (value[0] / value[1]) * 100 : undefined];
    })
  );

  const progress = tweened(0, {
    duration: 300,
    easing: cubicOut,
  });

  $: if (loadingItems[ComponentType.Pages]?.length === 2) {
    (async () => {
      totalLoaded = Object.values(loadingItems).reduce((acc, cur) => {
        return +acc + cur[0];
      }, 0);
      totalToLoad = Object.values(loadingItems).reduce((acc, cur) => {
        return +acc + cur[1];
      }, 0);
      totalProgress = (totalLoaded / totalToLoad) * 100;
      if (totalProgress === 100) {
        await tick();
        await progress.set(100);
        await navigate();
      }
    })();
  }

  async function songPageLoaded() {
    await tick();
    loadingItems[ComponentType.Pages][0]++;
    totalProgress = (totalLoaded / totalToLoad) * 100;
    await progress.set(totalProgress);
  }

  onMount(async () => {
    loadingItems[ComponentType.Settings] = [0, 1];
    get("api/settings").then((settings: Map<SettingsType, Settings>) => {
      settingsMapStore.set(
        new Map<SettingsType, Settings>(
          Object.entries(settings) as [SettingsType, Settings][]
        )
      );
      loadingItems[ComponentType.Settings] = [1, 1];
    });

    loadingItems[ComponentType.Songs] = [0, 2];
    await get("api/songs").then((songs: Map<string, Song>) => {
      loadingItems[ComponentType.Songs] = [1, 2];
      songMap = new Map();
      songMap = new Map<string, Song>(
        Object.entries(songs) as Array<[string, Song]>
      );
      songsStore.set(songMap);
      const pagesToLoad = [...songMap.values()].reduce(
        (acc: number, cur: Song) => +acc + cur.pages?.length,
        0
      );
      loadingItems[ComponentType.Pages] = [0, pagesToLoad];
      loadingItems[ComponentType.Songs] = [2, 2];
    });

    loadingItems[ComponentType.Songbooks] = [0, 2];
    get("api/songbooks").then((songbooks: Map<string, Songbook>) => {
      loadingItems[ComponentType.Songbooks] = [1, 2];
      const songbookMap: Map<string, Songbook> = new Map(
        Object.entries(songbooks) as Array<[string, Songbook]>
      );
      songbookMap.forEach((songbook: Songbook) => {
        // Object.values(songbooks).forEach((songbook: Songbook) => {
        songbook.songObjects = songbook.songs.map(
          (songTitle: string) =>
            (songMap.get(songTitle) as Song) || new Song(songTitle, "N/A")
        );
      });
      songbooksStore.set(songbookMap);
      loadingItems[ComponentType.Songbooks] = [2, 2];
    });
  });
</script>

<svelte:head>
  {#if loadingProgress[ComponentType.Songs] === 100}
    {#each songMap.values() as song}
      {#each song.pages as page}
        <link
          rel="preload"
          as="image"
          href="songs/{song.title}/{page}"
          on:load={songPageLoaded}
        />
      {/each}
    {/each}
  {/if}
</svelte:head>

<div
  class="flex w-screen h-screen justify-center"
  in:fly={{ y: 200, duration: 250 }}
>
  <div
    class="grid grid-cols-1 h-full w-[512px] justify-items-center content-center"
  >
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
      <ProgressBar
        class="mt-4 w-[80%]"
        track="bg-primary-300"
        meter="bg-primary-500"
        label="Loading..."
        value={$progress}
      />
    {/key}
  </div>
</div>
