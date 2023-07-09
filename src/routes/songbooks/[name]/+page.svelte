<script lang="ts">
  import { page } from "$app/stores";
  import type Songbook from "../../../models/songbook.model";
  import { songbooksStore } from "../../../stores";
  import SongList from "$lib/SongList.svelte";
  import Icon from "../../../lib/Icon.svelte";
  import { AppBar } from "@skeletonlabs/skeleton";

  const name = $page.params.name;

  let songbook: Songbook;
  songbooksStore.subscribe(sb => songbook = sb.find(s => s.name === name));
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <a class="w-8" href="/songbooks">
      <Icon name="arrow-left" iconClass=""/>
    </a>
  </svelte:fragment>
  <h3 class="h3">{songbook.name}</h3>
  <svelte:fragment slot="trail">
  </svelte:fragment>
</AppBar>

<SongList songs={songbook.songs} songbookName={name}/>