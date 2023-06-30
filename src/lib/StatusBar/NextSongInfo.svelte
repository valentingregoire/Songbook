<script lang="ts">
  import { Songbook } from "../../models/songbook.model";
  import Info from "$lib/StatusBar/Info.svelte";

  export let currentSongIndex: number = 0;
  export let currentSongbook: Songbook;

  $: nextSong = currentSongbook?.songs[(currentSongIndex + 1) % currentSongbook?.songs?.length];
</script>

<div class="flex">
  <Info icon="➡️" label={nextSong?.title} />
</div>
<!--<div>➡️ {nextSong?.title}</div>-->
