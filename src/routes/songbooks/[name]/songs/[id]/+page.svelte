<script lang="ts">
  import { page } from "$app/stores";
  import type Songbook from "$models/songbook.model";
  import { songbooksStore } from "$stores";
  import StatusBar from "$lib/StatusBar/StatusBar.svelte";
  import Viewer from "$lib/Viewer/Viewer.svelte";

  const songbookName: string = $page.params.name;
  let songId: number = $page.params.id;
  let pageId: number = 0;

  let songbook: Songbook;
  songbooksStore.subscribe(songbooks => songbook = songbooks.find(s => s.name === songbookName));
</script>

<StatusBar {songbook} bind:songId={songId} bind:pageId={pageId} />
<Viewer {songbook} bind:songId={songId} bind:pageId={pageId} />
