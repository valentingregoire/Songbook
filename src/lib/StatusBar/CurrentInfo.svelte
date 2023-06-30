<script lang="ts">
  import type { Song } from "../../models/songbook.model";
  import { Songbook } from "../../models/songbook.model";

  export let currentSongbook: Songbook;
  export let currentSong: Song;
</script>

<div class="absolute top-0 left-0">
  <span class="px-1">📕 {currentSongbook?.name}</span>
  {#if currentSong?.artist}
    <span class="px-1">👨‍ {currentSong?.artist}</span>
  {/if}
  <span class="px-1">🎵 {currentSong?.title}</span>
  {#if currentSong?.bpm}
    <span class="px-1">⏱️ {currentSong?.bpm}</span>
  {/if}
  {#if currentSong?.key}
    <span class="px-1">🎼 {currentSong?.key}</span>
  {/if}
</div>