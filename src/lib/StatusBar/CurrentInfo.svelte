<script lang="ts">
  export let currentSongbook;
  export let currentSong;
</script>

<div class="absolute top-0 left-0">
  <span>📕 {currentSongbook?.name}</span>
  <span>🎵 {currentSong?.title}</span>
</div>