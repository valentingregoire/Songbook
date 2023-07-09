<script lang="ts">
  import { songbooksStore } from "../../stores";
  import type Songbook from "../../models/songbook.model";
  import Icon from "../../lib/Icon.svelte";
  import ICON_MAP from "../../lib/utils";
  import { AppBar } from "@skeletonlabs/skeleton";

  let songbooks: Songbook[];
  songbooksStore.subscribe(s => songbooks = s);
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <a class="w-8" href="/home">
      <Icon name="arrow-left" iconClass=""/>
    </a>
  </svelte:fragment>
  <h3 class="h3">Songbooks</h3>
  <svelte:fragment slot="trail">
  </svelte:fragment>
</AppBar>

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
