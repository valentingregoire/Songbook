<script lang="ts">
  import { page } from "$app/stores";
  import type Songbook from "$models/songbook.model";
  import { songbooksStore } from "$stores";
  import SongList from "$lib/SongList.svelte";
  import { navigate } from "$lib/utils";
  import Icon from "$lib/Icon.svelte";

  const name = $page.params.name;

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
    <div class="card drop-shadow-md m-2">
      <header class="flex p-3 space-x-2">
        <div class="inline-flex w-8 items-center justify-center aspect-square variant-filled-surface rounded-full"><h5 class="h5">{index + 1}</h5></div>
        <h4 class="h4 whitespace-nowrap">{song.title}</h4>
      </header>
      <hr class="opacity-50" />
      <section class="flex-col p-3">
        <Icon name="artist">{song.artist}</Icon>
      </section>
    </div>
  {/each}
</div>
