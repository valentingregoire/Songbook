<script lang="ts">
  import { songbooksStore } from "../../stores";
  import type Songbook from "../../models/songbook.model";
  import Icon from "../../lib/Icon.svelte";
  import { AppBar } from "@skeletonlabs/skeleton";

  let songbooks: Songbook[];
  songbooksStore.subscribe(s => songbooks = s);
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <a class="w-8" href="/home">
      <Icon name="arrow-left" iconClass="" />
    </a>
  </svelte:fragment>
  <h3 class="h3">Songbooks</h3>
  <svelte:fragment slot="trail">
  </svelte:fragment>
</AppBar>

{#if songbooks}
  <div class="grid grid-cols-1 h-full justify-items-center content-center">
    <nav class="list-nav p-2">
      <ul>
        {#each songbooks as songbook}
          <li>
            <a class="h3" href="/songbooks/{songbook.name}">
              <Icon name="songbook">{songbook.name}</Icon>
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
{:else}
  <h2 class="h2">No songbooks found...</h2>
{/if}
