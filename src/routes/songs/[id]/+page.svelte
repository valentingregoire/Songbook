<script lang="ts">
  import { page } from "$app/stores";
  import type Song from "$models/song.model";
  import { songsStore } from "../../../stores";

  const id = $page.params.id;
  let song: Song;
  songsStore.subscribe(songs => Object.values(songs).find(s => s. === id));

</script>

<h1 class="h1">{id}</h1>
