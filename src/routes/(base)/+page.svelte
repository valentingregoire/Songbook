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
    let pagesLoaded: boolean = false;

    const loadingItems = new ComponentProgress();

    // [component, [loaded, toLoad]]
    // const loadingItems: Map<ComponentType, number[]> = new Map();

    // $: loadingProgress = new Map([...loadingItems].map(([item, progress]) => {
    //   console.log("loading", item, progress);
    //   return [item, progress.length == 2 ? (progress[0] / progress[1]) * 100 : undefined];
    // }));
    // $: loadingProgress = new Map(Array.from(loadingItems, ([item, progress]) => {
    //   console.log("loadingItems", loadingItems);
    //   console.log("loading", item, progress);
    //   // return new Map([[item, progress.length == 2 ? (progress[0] / progress[1]) * 100 : undefined]]);
    // }
    // }))

    // $: loadingProgress = new Map(
    //   Array.from(loadingItems, ([item, prog]) => {
    //     console.log("loading", item, prog);
    //     return [item, prog.length == 2 ? (prog[0] / prog[1]) * 100 : undefined];
    //   })
    // );

    // $: loadingProgress = Object.fromEntries(loadingItems.entries()).map(([item, prog]) => {
    //   console.log("loading", item, prog);
    //   return [item, prog.length == 2 ? (prog[0] / prog[1]) * 100 : undefined];
    // }));

    // $: loadingProgress = Array.from(loadingItems).reduce((obj: LoadingProgress, [ct, prog]) => {
    //   ob
    //   obj[ct] = prog && prog.length == 2 ? prog[0] / prog[1] * 100 : 0;
    //   return obj;
    // }, {});))
    // $: loadingProgress = Array.from(loadingItems).reduce((obj: Record<ComponentType, number[]>, [ct, prog]) => {
    //   obj[ct] = prog && prog.length == 2 ? prog[0] / prog[1] * 100 : 0;
    //   return obj;
    // }, {});

    $: loadingProgress = loadingItems;

    const progress = tweened(0, {
        duration: 300,
        easing: cubicOut
    });

    $: if (pagesLoaded) {
        (async () => {
            if (loadingItems.progress.progress === 100) {
                await tick();
                await progress.set(100);
                await navigate();
            }
        })();
    }

    async function songPageLoaded() {
        await tick();
        loadingItems.loadingItems.get(ComponentType.Pages)?.load();
        await progress.set(loadingItems.loadingItems.get(ComponentType.Pages)?.progress || 0);
    }

    onMount(async () => {
        // loadingItems.get(ComponentType.Settings)?.push(0, 1);
        console.log("setting loadingItems Settings", loadingItems);
        get("api/settings").then((settings: Map<SettingsType, Settings>) => {
            console.log("settings", settings);
            settingsMapStore.set(
                new Map<SettingsType, Settings>(
                    Object.entries(settings) as [SettingsType, Settings][]
                )
            );
            loadingItems.loadingItems.get(ComponentType.Settings)?.load();
            settingsMapStore.subscribe(s => console.log("settings2", s));
        });

        await get("api/songs").then((songs: Map<string, Song>) => {
            loadingItems.loadingItems.get(ComponentType.Songs)?.load();
            console.log("songs", songs);
            songMap = new Map<string, Song>(
                Object.entries(songs) as Array<[string, Song]>
            );
            songsStore.set(songMap);
            const pagesToLoad = [...songMap.values()].reduce(
                (acc: number, cur: Song) => +acc + cur.pages?.length,
                0
            );
            loadingItems.loadingItems.get(ComponentType.Pages)?.setToLoad(pagesToLoad);
            loadingItems.loadingItems.get(ComponentType.Songs)?.load();
        });

        get("api/songbooks").then((songbooks: Map<string, Songbook>) => {
            loadingItems.loadingItems.get(ComponentType.Songbooks)?.load();
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
            loadingItems.loadingItems.get(ComponentType.Songbooks)?.load();
        });
    });
</script>

<svelte:head>
    <!--{JSON.stringify(loadingProgress)}-->
    {#if loadingProgress.loadingItems.get(ComponentType.Songs)?.progress === 100}
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
                        {#each loadingItems.loadingItems as [key, value]}
                            <li>
                                <div class="flex items-center">
                                    {JSON.stringify(loadingProgress.loadingItems.get(key))}
                                     <span>
                                         <LoadingItem value={loadingProgress.loadingItems.get(key)?.progress} />
                                     </span>
                                    <span class="ml-2">{key}</span>
                                </div>
                            </li>
                        {/each}
                    {/if}
                </ul>
            </div>
        </div>
        {#key loadingProgress.progress}
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
