<script lang="ts">
  import { page } from "$app/stores";
  import SongbookOverviewTable from "../../../lib/SongbookOverviewTable.svelte";
  import ICON_MAP from "../../../lib/utils";
  import type Songbook from "../../../models/songbook.model";
  import { songbooksStore } from "../../../stores";

  const id = $page.params.id;

  let songbook: Songbook;
  songbooksStore.subscribe(sb => songbook = sb.find(s => s.name = id));
</script>

<h1>{ICON_MAP.songbook} {songbook.name}</h1>

<SongbookOverviewTable  />