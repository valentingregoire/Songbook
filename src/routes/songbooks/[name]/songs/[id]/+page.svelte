<script lang="ts">
  import { page } from "$app/stores";
  import type Songbook from "$models/songbook.model";
  import { songbooksStore } from "$stores";
  import StatusBar from "$lib/StatusBar/StatusBar.svelte";
  import Viewer from "$lib/Viewer/Viewer.svelte";

  const songbookName: string = $page.params.name;
  let songId: number = Number($page.params.id);
  let pageId: number = Number($page.url.searchParams.get("pageId")) || 0;

  let queryParams: URLSearchParams;
  page.subscribe(value => queryParams = value.url.searchParams);

  // $: songbookName = $page.params.name;
  // $: songId = Number($page.params.id);
  $: pageId2 = Number($page.url.searchParams.get("pageId"));
  $: pageId = Number(queryParams.get("pageId"));

  let songbook: Songbook;
  songbooksStore.subscribe(songbooks => songbook = songbooks.find(s => s.name === songbookName));
</script>

{songId} - {pageId} - {$page.url.searchParams.get("pageId")} - {queryParams.get("pageId")}
<StatusBar {songbook} {songId} {pageId} />
<Viewer {songbook} {songId} {pageId} />
