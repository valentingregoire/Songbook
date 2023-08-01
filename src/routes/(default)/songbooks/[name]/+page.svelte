<script lang="ts">
  import { page } from "$app/stores";
  import type Songbook from "$models/songbook.model";
  import { settingsStore, songbooksStore } from "$stores";
  import { navigate } from "$lib/utils";
  import Icon from "$lib/Icon.svelte";
  import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
  import type { Settings } from "$models/settings.model";

  const name = $page.params.name;
  let settings: Settings;
  settingsStore.subscribe(s => settings = s);

  let songbook: Songbook;
  songbooksStore.subscribe(sb => songbook = sb.find(s => s.name === name));

  let selectedSongId: number;

  async function clickSong(): Promise<void> {
    await navigate({ songbookName: name, songId: selectedSongId });
  }
</script>

<!--<SongList songs={songbook.songs} bind:selectedSongId={selectedSongId} {clickSong} />-->

<div class="flex flex-wrap">
  {#each songbook.songs as song, index}
    <div class="flex-grow flex flex-col card w-1/6 drop-shadow-md m-2">
      <header class="p-3 space-x-2">
        <div class="inline-flex w-8 items-center justify-center aspect-square variant-filled-surface rounded-full">
          <h5 class="h5">{index + 1}</h5>
        </div>
        <h4 class="h4 inline-block whitespace-nowrap">{song.title}</h4>
      </header>
      <!--      <hr class="opacity-50" />-->
      <section class="flex-grow px-6 py-3">
        {#if song.artist}
          <Icon name="artist">{song.artist}</Icon>
        {/if}
        {#if song.pages}
          <Accordion
            class="w-full"
            duration={settings.layout.animationSpeed}
            padding="pr-2"
            regionPanel="space-y-1"
          >
            <AccordionItem>
              <svelte:fragment slot="lead">
                <Icon name="page" />
              </svelte:fragment>
              <svelte:fragment slot="summary">{song.pages.length}</svelte:fragment>
              <svelte:fragment slot="content">
                {#each song.pages as page}
                  <div class="pl-5">{page}</div>
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
      <footer class="flex card-footer justify-end">
        <button class="btn btn-sm variant-filled-primary">
          <Icon name="edit">Edit</Icon>
        </button>
      </footer>
    </div>
  {/each}
</div>
