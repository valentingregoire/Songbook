<script lang="ts">
  import Info from "./Info.svelte";
  import type { Songbook } from "../../../../models/songbook.model";

  export let currentSongIndex: number = 0;
  export let currentSongbook: Songbook;

  $: nextSong = currentSongbook?.songs[(currentSongIndex + 1) % currentSongbook?.songs?.length];
</script>

<div class="flex">
  <Info icon="➡️" label={nextSong?.title} />
</div>
