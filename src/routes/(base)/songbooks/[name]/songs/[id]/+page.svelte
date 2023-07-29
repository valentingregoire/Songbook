<script lang="ts">
  import { page } from "$app/stores";
  import type Songbook from "$models/songbook.model";
  import { songbooksStore } from "$stores";
  import StatusBar from "$lib/StatusBar/StatusBar.svelte";
  import Viewer from "$lib/Viewer/Viewer.svelte";
  import { fade, fly } from "svelte/transition";
  import { Direction } from "$models/layout.model.js";

  const songbookName: string = $page.params.name;

  $: songId = Number($page.params.id);
  $: pageId = Number($page.url.searchParams.get("pageId"));
  $: direction = $page.url.searchParams.get("direction");
  $: subject = $page.url.searchParams.get("subject");

  let songbook: Songbook;
  songbooksStore.subscribe(songbooks => songbook = songbooks.find(s => s.name === songbookName));
</script>

<StatusBar {songbook} {songId} {pageId} />
{#key $page.url}
  <div in:fly={{x: direction === Direction.Next ? 2000 : -2000, duration: 200}}>
    <Viewer {songbook} {songId} {pageId} />
  </div>
{/key}
