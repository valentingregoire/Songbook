<script lang="ts">

  import type Song from "$models/song.model";
  import ICON_MAP from "../utils";

  export let song: Song;
  export let pageId: number;

</script>

{#if song?.fileType}
  <img
    class="h-screen w-full object-contain"
    src="/songs/{song?.title}/{song?.title}-{pageId + 1}.{song?.fileType}"
    alt={song?.title}
  />
{:else}
  {#if song?.artist}
    <h1 class="h1">{ICON_MAP.artist} {song.artist}</h1>
  {/if}
  <h1 class="h1">{ICON_MAP.title} {song?.title}</h1>
{/if}
