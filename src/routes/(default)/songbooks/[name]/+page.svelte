<script lang="ts">
  import { page } from "$app/stores";
  import type Songbook from "$models/songbook.model";
  import { settingsStore, songbooksStore } from "$stores";
  import { navigate } from "$lib/utils";
  import Icon from "$lib/Icon.svelte";
  import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
  import type { Settings } from "$models/settings.model";
  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";
  import type Song from "$models/song.model";
  import { post } from "$lib/api";

  const name = $page.params.name;
  let settings: Settings;
  settingsStore.subscribe(s => settings = s);

  let songbook: Songbook;
  songbooksStore.subscribe(songbookMap => {
    songbook = songbookMap[name]
  });

  let selectedSongId: number;

  function clickSong(id: number) {
    navigate(`/songbooks/${name}/songs/${id}`);
  }

  function handleConsider(event: CustomEvent<DndEvent<Song>>) {
    console.log("consider");
    songbook.songs = event.detail.items;
  }

  async function handleFinalize(event: CustomEvent<DndEvent<Song>>) {
    console.log("finalize");
    songbook.songs = event.detail.items;
    songbooksStore.update(songbookMap => {
      songbookMap[songbook.name] = songbook;
      return songbookMap;
    });
    const songsMapped: string[] = songbook.songs.map(song => song.title);
    const toReturn = { ...songbook, songs: songsMapped };
    console.log("toReturn", toReturn);
    await post(`/api/songbooks/${name}`, toReturn);
  }
</script>

<!--<SongList songs={songbook.songs} bind:selectedSongId={selectedSongId} {clickSong} />-->

<section
  class="flex flex-wrap p-2 gap-5"
  use:dndzone={{items: songbook.songs, flipDurationMs: settings.layout.animationSpeed}}
  on:consider={handleConsider}
  on:finalize={handleFinalize}
>
  {#each songbook.songs as song, index (song.id)}
<!--    bg-surface-50-->
    <a
      href="/songbooks/{name}/songs/{index}"
      class="flex flex-col card w-full md:w-1/4 lg:w-1/6 min-w-fit grow w-1/6 drop-shadow-md"
      animate:flip={{duration: settings.layout.animationSpeed}}
      on:click|stopPropagation
    >
      <header class="p-3 space-x-2">
        <div class="inline-flex w-8 items-center justify-center aspect-square variant-soft rounded-full">
          <h5 class="h5 font-bold">{index + 1}</h5>
        </div>
        <h3 class="h3 inline-block whitespace-nowrap">{song.title}</h3>
      </header>
      <!--      <hr class="opacity-50" />-->
      <section class="flex-grow px-6 py-3 text-surface-700" on:click|preventDefault>
        {#if song.artist}
          <Icon name="artist">{song.artist}</Icon>
        {/if}
        {#if song.pages}
          <Accordion
            duration={settings.layout.animationSpeed}
            padding="p-1"
            regionPanel="space-y-1"
            rounded="rounded-full"
          >
            <AccordionItem class="-mx-1">
              <svelte:fragment slot="lead">
                <Icon name="page" />
              </svelte:fragment>
              <svelte:fragment slot="summary">
                <span class="-mx-1">{song.pages.length}</span>
              </svelte:fragment>
              <svelte:fragment slot="content">
                {#each song.pages as page}
                  <div class="pl-5 m-0">{page}</div>
                {/each}
              </svelte:fragment>
            </AccordionItem>
          </Accordion>
        {/if}
        {#if song.key}
          <Icon name="key">{song.key}</Icon>
        {/if}
        {#if song.bpm}
          <Icon name="bpm">{song.bpm}</Icon>
        {/if}
        {#if song.fileType}
          <Icon name="fileType">{song.fileType}</Icon>
        {/if}
        {#if song.info}
          <Icon name="info">{song.info}</Icon>
        {/if}
      </section>
      <!--      <hr class="opacity-50" />-->
      <footer class="self-end flex card-footer justify-end">
        <button class="btn btn-sm variant-soft">
          <Icon name="edit">Edit</Icon>
        </button>
      </footer>
    </a>
  {/each}
</section>
