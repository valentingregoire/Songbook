<script lang="ts">
  import { songbooksStore } from "../../stores";
  import type Songbook from "../../models/songbook.model";
  import Icon from "../../lib/Icon.svelte";

  let songbooks: Songbook[];
  songbooksStore.subscribe(s => songbooks = s);
</script>

<div>
  <h1 class="flex text-4xl m-10 items-center justify-center">
    <Icon name="songbooks" iconClass="w-8 h-8 mr-5">Songbooks</Icon>
  </h1>
</div>

{#if songbooks}
  <div class="card m-5">
    <nav class="list-nav p-2">
      <ul>
        {#each songbooks as songbook}
          <li>
            <a href="/songbooks/{songbook.name}">
              <Icon name="songbook">{songbook.name}</Icon>
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
{:else}
  <h2>No songbooks found...</h2>
{/if}
