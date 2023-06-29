<script lang="ts">
  import { Song, Songbook } from "../../models/songbook.model";

  export let currentSongIndex: number;
  export let currentSongbook: Songbook;

  $: nextSong = currentSongbook?.songs[(currentSongIndex + 1) % currentSongbook?.songs?.length];
</script>

<div>➡️ {nextSong?.title}</div>
