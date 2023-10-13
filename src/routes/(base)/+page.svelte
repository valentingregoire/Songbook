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

  let songMap: Map<string, Song> = new Map();
  let totalLoaded: number = 0;
  let totalToLoad: number = 1;
  let totalProgress: number = 0;

  // [component, [loaded, toLoad]]
  const loadingItems: Map<ComponentType, number[]> = new Map([
      [ComponentType.Songs, [1, 1]],
      [ComponentType.Songbooks, [1, 1]],
      [ComponentType.Settings, [1, 1]],
      [ComponentType.Pages, [1, 1]]
    ]
  );

  $: loadingProgress = new Map([...loadingItems].map(([item, progress]) => {
    return [item, progress.length == 2 ? (progress[0] / progress[1]) * 100 : undefined];
  }));

  const progress = tweened(0, {
    duration: 300,
    easing: cubicOut
  });

  $: if (loadingItems.get(ComponentType.Pages)?.length === 2) {
    // TODO: rewrite with Map support instead of simple objects
    (async () => {
      const values = Array.from(loadingItems.values());
      totalLoaded = values.reduce((acc, cur) => {
        return +acc + cur[0];
      }, 0);
      totalToLoad = values.reduce((acc, cur) => {
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
    // loadingItems?.get(ComponentType.Pages)[0]++;
    totalProgress = (totalLoaded / totalToLoad) * 100;
    await progress.set(totalProgress);
  }

  onMount(async () => {
    loadingItems.get(ComponentType.Settings)?.push(0, 1);
    get("api/settings").then((settings: Map<SettingsType, Settings>) => {
      console.log("settings", settings);
      settingsMapStore.set(
        new Map<SettingsType, Settings>(
          Object.entries(settings) as [SettingsType, Settings][]
        )
      );
      loadingItems.set(ComponentType.Settings, [1, 1]);
      settingsMapStore.subscribe(s => console.log("settings2", s));
    });

    loadingItems.set(ComponentType.Songs, [0, 2]);
    await get("api/songs").then((songs: Map<string, Song>) => {
      loadingItems.set(ComponentType.Songs, [1, 2]);
      console.log("songs", songs);
      songMap = new Map<string, Song>(
        Object.entries(songs) as Array<[string, Song]>
      );
      songsStore.set(songMap);
      const pagesToLoad = [...songMap.values()].reduce(
        (acc: number, cur: Song) => +acc + cur.pages?.length,
        0
      );
      loadingItems.set(ComponentType.Pages, [0, pagesToLoad]);
      loadingItems.set(ComponentType.Songs, [2, 2]);
    });

    loadingItems.set(ComponentType.Songbooks, [0, 2]);
    get("api/songbooks").then((songbooks: Map<string, Songbook>) => {
      loadingItems.set(ComponentType.Songbooks, [1, 2]);
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
      loadingItems.set(ComponentType.Songbooks, [2, 2]);
    });
  });
</script>

<svelte:head>
  {#if loadingProgress.get(ComponentType.Songs) === 100}
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
            <!--{#each Object.entries(loadingItems) as [key, value]}-->
            {#each loadingItems as [key, value]}
              <li>
                <div class="flex items-center">
                  <span>
                    <LoadingItem value={loadingProgress.get(key)} />
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
