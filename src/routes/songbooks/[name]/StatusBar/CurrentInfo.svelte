<script lang="ts">
  import Info from "./Info.svelte";
  import type { Songbook } from "../../../../models/songbook.model";
  import { Song } from "../../../../models/songbook.model";

  export let currentSongbook: Songbook;
  export let currentSong: Song;
</script>

<!--<div class="absolute top-0 left-0 flex">-->
<div class="flex">
  <Info icon="📕" label={currentSongbook?.name} />
  <Info icon="👨‍" label={currentSong?.artist} optional />
  <Info icon="🎵" label={currentSong?.title} />
  <Info icon="⏱️" label={currentSong?.bpm} optional />
  <Info icon="🎼" label={currentSong?.key} optional />
</div>