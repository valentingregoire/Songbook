<script lang="ts">
  import { Song } from "../../models/songbook.model";

  export let currentSong: Song;
  export let page: number;

</script>

{#if currentSong && page}
  <img
    class="w-full h-full object-contain"
    src="scores/{currentSong.title}/{currentSong?.title}-{page}.{currentSong?.fileType}"
    alt={currentSong?.title}
  />
{/if}
