<script lang="ts">
  import { songbooksStore } from "../../stores";
  import SongbookOverview from "$lib/SongbookOverview.svelte";
  import ICON_MAP from "../../lib/utils";
  import type Songbook from "../../models/songbook.model";

  let songbooks: Songbook[];
  songbooksStore.subscribe(s => songbooks = s);
</script>

<div class="w-full">
  <h1 class="text-4xl text-center w-full my-10">{ICON_MAP["songbooks"]} Songbooks</h1>
</div>

{#if songbooks}
  <div class="w-full content-start">
    {#each songbooks as songbook}
      <SongbookOverview {songbook} />
    {/each}
  </div>
{:else}
  <h2>No songbooks found...</h2>
{/if}
