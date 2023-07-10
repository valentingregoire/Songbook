<script lang="ts">
  import Info from "./Info.svelte";
  import type Songbook from "$models/songbook.model";

  export let songbook: Songbook;
  export let songId: number;

  $: nextSong = songbook?.songs[(songId + 1) % songbook?.songs?.length];
</script>

<div class="flex">
  <Info icon="➡️" label={nextSong?.title} />
</div>
