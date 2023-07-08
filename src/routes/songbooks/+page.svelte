<script lang="ts">
  import { songbooksStore } from "../../stores";
  import ICON_MAP from "../../lib/utils";
  import type Songbook from "../../models/songbook.model";
  import FaBook from 'svelte-icons/fa/FaBook.svelte'
  import Icon from "../../lib/Icon.svelte";

  let songbooks: Songbook[];
  songbooksStore.subscribe(s => songbooks = s);
</script>

<div class="w-full">
  <h1 class="text-4xl text-center w-full my-10">
    <Icon name="songbooks">Songbooks</Icon>
    <!--{ICON_MAP["songbooks"]} Songbooks</h1>-->
  </h1>
</div>

{#if songbooks}
  <!--  <Accordion>-->
  <!--    {#each songbooks as songbook}-->
  <!--      <AccordionItem>-->
  <!--        <svelte:fragment slot="lead">{ICON_MAP["songbook"]}</svelte:fragment>-->
  <!--        <svelte:fragment slot="summary">{songbook.name}</svelte:fragment>-->
  <!--        <svelte:fragment slot="content">-->
  <!--          <SongbookOverview {songbook} />-->
  <!--        </svelte:fragment>-->
  <!--      </AccordionItem>-->
  <!--    {/each}-->
  <!--  </Accordion>-->
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
