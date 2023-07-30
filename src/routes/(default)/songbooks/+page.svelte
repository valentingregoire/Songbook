<script lang="ts">
  import { songbooksStore } from "$stores";
  import type Songbook from "$models/songbook.model";
  import Icon from "$lib/Icon.svelte";
  import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
  import { goto } from "$app/navigation";

  let songbooks: Songbook[];
  songbooksStore.subscribe(s => songbooks = s);
</script>


<div class="flex relative justify-center content-center">
  {#if songbooks}
    {#each songbooks as songbook}
      <a class="card w-1/5 h-fit m-5 drop-shadow-md" href="/songbooks/{songbook.name}/songs/0?pageId=0">
        <header class="card-header flex justify-between p-5">
          <!--          <Icon name="songbook">-->
          <h4 class="h4">{songbook.name}</h4>
          <!--          </Icon>-->
          {#if songbook.default}
            <span class="badge variant-ghost-success text-success-700">Default</span>
          {/if}
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
                  {#each songbook.songs as song, index}
                    <div>
                      <a href="/songbooks/{songbook.name}/songs/{index}?pageId=0">
                        <Icon name="song">{index + 1} {song.title}</Icon>
                      </a>
                    </div>
                  {/each}
                </svelte:fragment>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <hr class="opacity-50" />
        <footer class="card-footer p-5">
          Some actions here
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