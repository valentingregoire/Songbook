<script lang="ts">
  import { songbooksStore } from "$stores";
  import type Songbook from "$models/songbook.model";
  import Icon from "$lib/Icon.svelte";

  let songbooks: Songbook[];
  songbooksStore.subscribe(s => songbooks = s);
</script>


<div class="flex w-screen h-full relative">
  {#if songbooks}
    <div class="grid grid-cols-1 w-full h-full justify-items-center content-center">
      <nav class="list-nav p-2">
        <ul>
          {#each songbooks as songbook}
            <li>
              <a class="h3" href="/songbooks/{songbook.name}/songs/0?pageId=0">
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
</div>