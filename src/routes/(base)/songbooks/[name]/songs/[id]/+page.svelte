<script lang="ts">
  import { page } from "$app/stores";
  import { songbooksStore } from "$stores";
  import StatusBar from "$lib/StatusBar/StatusBar.svelte";
  import Viewer from "$lib/Viewer/Viewer.svelte";
  import { fly } from "svelte/transition";
  import { Direction } from "$models/layout.model.js";
  import type { Settings } from "$models/settings.model";
  import { settingsStore } from "$stores";
  import type Songbook from "$models/songbook.model";

  const songbookName: string = $page.params?.name;

  let settings: Settings | undefined;
  settingsStore.subscribe((s) => (settings = s));

  $: songId = Number($page.params.id);
  $: pageId = Number($page.url.searchParams.get("pageId"));
  $: direction = $page.url.searchParams.get("direction");
  // $: subject = $page.url.searchParams.get("subject");
  $: flyDirection =
    direction === Direction.Next
      ? 2000
      : direction === Direction.Previous
      ? -2000
      : 0;

  let songbook: Songbook;
  songbooksStore.subscribe(
    (songbooks: Map<string, Songbook>) => {
      songbook = songbooks.get(songbookName)!;
    }
  );
</script>

<StatusBar {songbook} {songId} {pageId} />
{#key $page.url}
  <div in:fly={{ x: flyDirection, duration: settings?.layout?.animationSpeed }}>
    <Viewer {songbook} {songId} {pageId} />
  </div>
{/key}
