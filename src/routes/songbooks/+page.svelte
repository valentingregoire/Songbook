<script lang="ts">
  import type { Songbook } from "../../models/songbook.model";
  import { songbooksStore } from "../../stores";
  import { onMount } from "svelte";
  import { getSongbooks } from "../../services/service";

  let songbooks: Songbook[];
  songbooksStore.subscribe(s => songbooks = s);

  onMount(async () => {
    const songbooks = await getSongbooks();
    songbooksStore.set(songbooks);
  });

</script>

<h1>Songbooks</h1>

{#if songbooks}
  <ul>
    {#each songbooks as songbook}
      <li>
        <a href={`songbooks/${songbook.name}`}>📘📕 {songbook.name}</a>
      </li>

    {/each}
  </ul>
{/if}
