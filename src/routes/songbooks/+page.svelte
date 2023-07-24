<script lang="ts">
  import { songbooksStore } from "$stores";
  import type Songbook from "$models/songbook.model";
  import Icon from "$lib/Icon.svelte";
  import { AppBar, AppRail, AppRailAnchor, AppRailTile } from "@skeletonlabs/skeleton";
  import { goto } from "$app/navigation";
  import { fly } from "svelte/transition";

  let songbooks: Songbook[];
  let currentTile: string;
  let showRail: boolean = true;
  songbooksStore.subscribe(s => songbooks = s);
</script>


<div class="flex w-screen h-full relative">
<!--  {#if showRail}-->
<!--    <div class="flex absolute h-full" in:fly={{x: -200, duration: 450}} out:fly={{x:-200, duration: 450}}>-->
<!--      <AppRail>-->
<!--        <svelte:fragment slot="lead">-->
<!--          <AppRailAnchor href="/">-->
<!--            <svelte:fragment slot="lead">-->
<!--              <Icon name="songbooks" />-->
<!--            </svelte:fragment>-->
<!--            <span>Songbooks</span>-->
<!--          </AppRailAnchor>-->
<!--        </svelte:fragment>-->
<!--        <AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1"-->
<!--                     on:click={() => showRail = !showRail}>-->
<!--          <svelte:fragment slot="lead">-->
<!--            <Icon name="songbook" />-->
<!--          </svelte:fragment>-->
<!--          <span>Songbooks</span>-->
<!--        </AppRailTile>-->
<!--        <AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">-->
<!--          <svelte:fragment slot="lead">(icon)</svelte:fragment>-->
<!--          <span>Tile 2</span>-->
<!--        </AppRailTile>-->
<!--        <AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">-->
<!--          <svelte:fragment slot="lead">(icon)</svelte:fragment>-->
<!--          <span>Tile 3</span>-->
<!--        </AppRailTile>-->
<!--&lt;!&ndash;        <svelte:fragment slot="trail">&ndash;&gt;-->
<!--&lt;!&ndash;          <AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>&ndash;&gt;-->
<!--&lt;!&ndash;        </svelte:fragment>&ndash;&gt;-->
<!--      </AppRail>-->
<!--    </div>-->
<!--  {/if}-->

  {#if songbooks}
    <div class="grid grid-cols-1 w-full h-full justify-items-center content-center">
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
</div>