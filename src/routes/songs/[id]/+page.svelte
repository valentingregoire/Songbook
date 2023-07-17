<script lang="ts">
  import { page } from "$app/stores";
  import type Song from "$models/song.model";
  import { songsStore } from "$stores";
  import SongDetails from "$lib/SongDetails.svelte";

  const id = $page.params.id;
  let song: Song;
  songsStore.subscribe(songs => song = Object.values(songs)[id]);

</script>

<h1 class="h1">{song?.title}</h1>
<SongDetails {song} />
