<script lang="ts">
  import type { Song } from "../../../../models/songbook.model";
  import H1 from "../../../../lib/Font/H1.svelte";

  export let currentSong: Song;
  export let page: number;

</script>

{#if currentSong && page && currentSong?.fileType}
  <img
    class="w-full h-full object-contain"
    src="scores/{currentSong.title}/{currentSong?.title}-{page}.{currentSong?.fileType}"
    alt={currentSong?.title}
  />
{:else}
  {#if currentSong?.artist}
    <H1>👨‍ {currentSong.artist}</H1>
  {/if}
  <H1>🎵 {currentSong?.title}</H1>
{/if}
