<script lang="ts">
  import { page } from "$app/stores";
  import Viewer from "../../songs/[name]/Viewer/Viewer.svelte";
  import StatusBar from "../../songs/[name]/StatusBar/StatusBar.svelte";
  import SongbookOverview from "$lib/SongbookOverview.svelte";

  const id = $page.params.id;
</script>

<h1>Songbook {id}</h1>

<SongbookOverview id={id} />