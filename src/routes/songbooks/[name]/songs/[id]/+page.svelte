<script lang="ts">
  import { page } from "$app/stores";
  import type Songbook from "$models/songbook.model";
  import { songbooksStore } from "$stores";
  import StatusBar from "$lib/StatusBar/StatusBar.svelte";
  import Viewer from "$lib/Viewer/Viewer.svelte";

  const songbookName: string = $page.params.name;

  $: songId = Number($page.params.id);
  $: pageId = Number($page.url.searchParams.get("pageId"));

  let songbook: Songbook;
  songbooksStore.subscribe(songbooks => songbook = songbooks.find(s => s.name === songbookName));
</script>

<StatusBar {songbook} {songId} {pageId} />
<Viewer {songbook} {songId} {pageId} />
