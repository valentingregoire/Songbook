<script lang="ts">
  import type { Songbook } from "../../models/songbook.model";
  import { songbooksStore } from "../../stores";
  import SongbookOverview from "$lib/SongbookOverview.svelte";

  let songbooks: Songbook[];
  songbooksStore.subscribe(s => songbooks = s);
</script>

<div class="w-full">
  <h1 class="text-4xl text-center w-full my-10">📚 Songbooks</h1>
</div>

{#if songbooks}
  <div class="w-full content-start">
<!--    <ul>-->
      {#each songbooks as songbook}
        <SongbookOverview {songbook} />
      {/each}
<!--    </ul>-->
  </div>
{:else}
  <h2>No songbooks found...</h2>
{/if}
