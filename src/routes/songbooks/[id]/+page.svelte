<script lang="ts">
  import { page } from "$app/stores";
  import SongbookOverviewTable from "../../../lib/SongbookOverviewTable.svelte";
  import type Songbook from "../../../models/songbook.model";
  import { songbooksStore } from "../../../stores";
  import Icon from "../../../lib/Icon.svelte";

  const id = $page.params.id;
  console.log("songbook id", id);

  let songbook: Songbook;
  songbooksStore.subscribe(sb => songbook = sb.find(s => s.name === id));
</script>

<h1 class="flex text-4xl m-10 items-center justify-center">
  <Icon name="songbook" iconClass="w-8 h-8 mr-5">{songbook.name}</Icon>
</h1>

<SongbookOverviewTable {songbook} />