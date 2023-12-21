<script lang="ts">
  import { onMount, tick } from "svelte";
  import { get } from "$lib/api";
  import { settingsMapStore, songbooksStore, songsStore } from "$stores";
  import { ProgressBar } from "@skeletonlabs/skeleton";
  import { fly } from "svelte/transition";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import LoadingItem from "$lib/LoadingItem.svelte";
  import { ComponentProgress, ComponentType } from "$models/components.model";
  import type Songbook from "$models/songbook.model";
  import Song from "$models/song.model";
  import type { Settings, SettingsType } from "$models/settings.model";
  import { navigate } from "$lib/utils";

  let songMap: Map<string, Song> = new Map();

  const loadingItems: ComponentProgress = new ComponentProgress();

  $: loadingProgress = loadingItems;

  const progress = tweened(0, {
    duration: 300,
    easing: cubicOut
  });

  async function songPageLoaded() {
    await tick();
    loadingItems.load(ComponentType.Pages);
    await progress.set(loadingItems.loadingItems[ComponentType.Pages]?.progress || 0);
  }

  onMount(async () => {
    loadingItems.load(ComponentType.Components);
    await get("api/settings").then((settings: Map<SettingsType, Settings>) => {
      settingsMapStore.set(
        new Map<SettingsType, Settings>(
          Object.entries(settings) as [SettingsType, Settings][]
        )
      );
      loadingItems.load(ComponentType.Settings);
    });

    await get("api/songs").then((songs: Map<string, Song>) => {
      songMap = new Map<string, Song>(
        Object.entries(songs) as Array<[string, Song]>
      );
      songsStore.set(songMap);
      const pagesToLoad = [...songMap.values()].reduce(
        (acc: number, cur: Song) => +acc + cur.pages?.length,
        0
      );
      loadingItems.setToLoad(ComponentType.Pages, pagesToLoad);
      loadingItems.load(ComponentType.Songs);
    });

    await get("api/songbooks").then((songbooks: Map<string, Songbook>) => {
      const songbookMap: Map<string, Songbook> = new Map(
        Object.entries(songbooks) as Array<[string, Songbook]>
      );
      loadingItems.loadingItems[ComponentType.Songbooks].toLoad = songbookMap.size;
      songbookMap.forEach((songbook: Songbook) => {
        songbook.songObjects = songbook.songs.map(
          (songTitle: string) =>
            (songMap.get(songTitle) as Song) || new Song(songTitle, "N/A")
        );
        loadingItems.load(ComponentType.Songbooks);
      });
      songbooksStore.set(songbookMap);
    });
    await tick();
    await progress.set(100);
    await navigate();
  });
</script>

<svelte:head>
  {#if loadingItems.loadingItems[ComponentType.Songs]?.progress === 100}
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
            {#each Object.entries(loadingProgress.loadingItems) as [key, value]}
              <li>
                <div class="flex items-center">
                  <LoadingItem value={value.progress} />
                  <span class="ml-2">{key}</span>
                </div>
              </li>
            {/each}
          {/if}
        </ul>
      </div>
    </div>
    {#key loadingItems.progress}
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
