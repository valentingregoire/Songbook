<script lang="ts">
  import { songbooksStore } from "$stores";
  import type Songbook from "$models/songbook.model";
  import Icon from "$lib/Icon.svelte";
  import { AppBar, AppRail, AppRailAnchor, AppRailTile } from "@skeletonlabs/skeleton";
  import { goto } from "$app/navigation";

  let songbooks: Songbook[];
  let currentTile: string;
  songbooksStore.subscribe(s => songbooks = s);
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <button type="button" class="btn-icon" on:click={() => goto("/home")}>
      <Icon name="menu" />
    </button>
  </svelte:fragment>
  <h3 class="h3">Songbooks</h3>
  <svelte:fragment slot="trail">
  </svelte:fragment>
</AppBar>

<AppRail>
  <svelte:fragment slot="lead">
    <AppRailAnchor href="/">
      <svelte:fragment slot="lead">
        <Icon name="songbooks" />
      </svelte:fragment>
      <span>Songbooks</span>
    </AppRailAnchor>
  </svelte:fragment>
  <AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
    <svelte:fragment slot="lead">
      <Icon name="songbook" />
    </svelte:fragment>
    <span>Songbooks</span>
  </AppRailTile>
  <AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
    <svelte:fragment slot="lead">(icon)</svelte:fragment>
    <span>Tile 2</span>
  </AppRailTile>
  <AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
    <svelte:fragment slot="lead">(icon)</svelte:fragment>
    <span>Tile 3</span>
  </AppRailTile>
  <svelte:fragment slot="trail">
    <AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
  </svelte:fragment>
</AppRail>

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
