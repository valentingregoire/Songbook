<script lang="ts">
  import { page } from "$app/stores";
  import type Songbook from "$models/songbook.model";
  import { songbooksStore } from "$stores";
  import SongList from "$lib/SongList.svelte";
  import { navigate } from "$lib/utils";
  import { onMount } from "svelte";
  import type { LayoutModel } from "../../../models/layout.model";

  const name = $page.params.name;

  let songbook: Songbook;
  songbooksStore.subscribe(sb => songbook = sb.find(s => s.name === name));

  let selectedSongId: number;

  async function clickSong(): Promise<void> {
    await navigate({ songbookName: name, songId: selectedSongId });
  }
</script>

<SongList songs={songbook.songs} bind:selectedSongId={selectedSongId} {clickSong} />
