<script lang="ts">
  import type { Songbook } from "../../models/songbook.model";
  import { songbooksStore } from "../../stores";
  import H1 from "../../lib/Font/H1.svelte";

  let songbooks: Songbook[];
  songbooksStore.subscribe(s => songbooks = s);
</script>

<div>
  <H1>Songbooks</H1>

  {#if songbooks}
    <ul>
      {#each songbooks as songbook}
        <li>
          <a href={`songbooks/${songbook.name}`}>📘 {songbook.name}</a>
        </li>
      {/each}
    </ul>
  {:else}
    <h2>No songbooks found...</h2>
  {/if}
</div>
