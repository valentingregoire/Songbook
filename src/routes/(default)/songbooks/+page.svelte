<script lang="ts">
  import { songbooksStore } from "$stores";
  import type Songbook from "$models/songbook.model";
  import Icon from "$lib/Icon.svelte";
  import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
  import { goto } from "$app/navigation";

  let songbooks: Songbook[];
  songbooksStore.subscribe(s => songbooks = s);
</script>


<div class="flex flex-wrap relative justify-center content-center p-2 gap-5">
  {#if songbooks}
    {#each Object.values(songbooks) as songbook}
      <a class="card w-full md:w-1/4 lg:w-1/6 min-w-fit grow h-fit drop-shadow-md"
         href="/songbooks/{songbook.name}/songs/0?pageId=0">
        <header class="card-header flex flex-nowrap justify-between p-5">
          <!--          <Icon name="songbook">-->
          <h4 class="h4 whitespace-nowrap">{songbook.name}</h4>
          <!--          </Icon>-->
          <div class="ml-2">
            {#if songbook.default}
              <span class="badge variant-ghost-success text-success-700">Default</span>
            {:else}
              <label class="flex space-x-2" on:click|stopPropagation>
                <input type="checkbox" class="checkbox input-primary" />
                <span>Default</span>
              </label>
            {/if}
          </div>
        </header>
        <hr class="opacity-50" />
        <section class="p-5 flex-col">
          <div on:click|preventDefault>
            <Accordion>
              <AccordionItem>
                <svelte:fragment slot="lead">
                </svelte:fragment>
                <svelte:fragment slot="summary">
                  {songbook.songs.length} songs
                </svelte:fragment>
                <svelte:fragment slot="content">
                  <ol class="list">
                    {#each songbook.songObjects as song, index}
                      <li>
                        <a class="btn btn-sm btn-hover" href="/songbooks/{songbook.name}/songs/{index}?pageId=0"
                           on:click|preventDefault>
                          <!--                        <Icon name="song">{index + 1} {song.title}</Icon>-->
                          <span>{index + 1}</span>
                          <span>{song.title}</span>
                        </a>
                      </li>
                    {/each}
                  </ol>
                </svelte:fragment>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <hr class="opacity-50" />
        <footer class="card-footer p-5 flex justify-end">
          <button type="button" class="btn btn-sm variant-filled-secondary"
                  on:click|preventDefault={goto(`/songbooks/${songbook.name}`)}>
            <Icon name="edit">Edit</Icon>
          </button>
        </footer>
      </a>
    {/each}


    <!--      <nav class="list-nav p-2">-->
    <!--        <ul>-->
    <!--          {#each songbooks as songbook}-->
    <!--            <li>-->
    <!--              <a class="h3" href="/songbooks/{songbook.name}/songs/0?pageId=0">-->
    <!--                <Icon name="songbook">{songbook.name}</Icon>-->
    <!--              </a>-->
    <!--            </li>-->
    <!--          {/each}-->
    <!--        </ul>-->
    <!--      </nav>-->

    <!--    <dl class="card mt-5 p-5">-->
    <!--      {#each songbooks as songbook}-->
    <!--        <div class="my-5">-->
    <!--          <dt>-->
    <!--            <div>-->
    <!--              <a href="/songbooks/{songbook.name}/songs/0?pageId=0">-->
    <!--                <Icon name="songbook">{songbook.name}</Icon>-->
    <!--              </a>-->
    <!--            </div>-->
    <!--          </dt>-->
    <!--          <dd>-->
    <!--            <Accordion class="p-0">-->
    <!--              <AccordionItem>-->
    <!--                <svelte:fragment slot="lead">-->
    <!--                  <Icon name="song" />-->
    <!--                </svelte:fragment>-->
    <!--                <svelte:fragment slot="summary">-->
    <!--                  Songs-->
    <!--                </svelte:fragment>-->
    <!--                <svelte:fragment slot="content">-->
    <!--                  {#each songbook.songs as song, index}-->
    <!--                    <div>-->
    <!--                      &lt;!&ndash;                    <a href={`songbooks/${songbook.name}/songs/${index}?pageId=0`}>&ndash;&gt;-->
    <!--                      &lt;!&ndash;                      <Icon name="song">{index + 1} {song.title}</Icon>&ndash;&gt;-->
    <!--                      &lt;!&ndash;                    </a>&ndash;&gt;-->
    <!--                    </div>-->
    <!--                  {/each}-->
    <!--                </svelte:fragment>-->
    <!--              </AccordionItem>-->
    <!--            </Accordion>-->
    <!--          </dd>-->
    <!--        </div>-->
    <!--      {/each}-->
    <!--    </dl>-->

    <!--      <Accordion width="w-fit" regionControl="" regionCaret="bg-primary-500">-->
    <!--        {#each songbooks as songbook}-->
    <!--&lt;!&ndash;          <AccordionItem on:click={goto(`/songbooks/${songbook?.name}/songs/0`)}>&ndash;&gt;-->
    <!--            <AccordionItem>-->
    <!--            <svelte:fragment slot="lead"><Icon name="songbook" /></svelte:fragment>-->
    <!--            <svelte:fragment slot="summary">{songbook.name}</svelte:fragment>-->
    <!--            <svelte:fragment slot="content">some content here</svelte:fragment>-->
    <!--          </AccordionItem>-->
    <!--          {/each}-->
    <!--      </Accordion>-->
  {:else}
    <h2 class="h2">No songbooks found...</h2>
  {/if}
</div>