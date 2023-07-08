<script lang="ts">
  import Viewer from "./Viewer/Viewer.svelte";
  import StatusBar from "./StatusBar/StatusBar.svelte";
  import Song from "../../../models/songbook.model.js";
  import { page } from "$app/stores";
  import { songsStore } from "../../../stores";

  const songTitle = $page.params.title;
  let song: Song;
  songsStore.subscribe(songMap => song = songMap[songTitle]);
</script>
<StatusBar {song} />
<Viewer />
