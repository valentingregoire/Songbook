<script lang="ts">

  import type Song from "$models/song.model";
  import ICON_MAP from "../utils";

  export let song: Song;
  export let pageId: number;

</script>

<div class="flex items-start h-screen w-full">
  {#if song?.fileType}
    <img
      class="w-full max-h-screen object-contain"
      src="/songs/{song?.title}/{song?.title}-{pageId + 1}.{song?.fileType}"
      alt={song?.title}
    />
  {:else}
    <h1 class="h1 text-center w-full mt-10">
      {#if song?.artist}
        {ICON_MAP.artist} {song.artist}
      {/if}
      {ICON_MAP.title} {song?.title}
    </h1>
  {/if}
</div>
