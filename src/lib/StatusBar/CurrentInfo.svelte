<script lang="ts">
  import type { Song } from "../../models/songbook.model";
  import { Songbook } from "../../models/songbook.model";
  import Info from "$lib/StatusBar/Info.svelte";

  export let currentSongbook: Songbook;
  export let currentSong: Song;
</script>

<div class="absolute top-0 left-0 flex">
  <Info icon="📕" label={currentSongbook?.name} />
  <Info icon="👨‍" label={currentSong?.artist} optional />
  <Info icon="🎵" label={currentSong?.title} />
  <Info icon="⏱️" label={currentSong?.bpm} optional />
  <Info icon="🎼" label={currentSong?.key} optional />
</div>