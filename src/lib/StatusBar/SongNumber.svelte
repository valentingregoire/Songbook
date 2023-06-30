<script lang="ts">
  import type { Songbook } from "../../models/songbook.model";

  export let currentSongIndex: number;
  export let currentSongbook: Songbook;
</script>

<div class="flex">
  <span>🎵 {currentSongIndex + 1}/{currentSongbook?.songs?.length}</span>
</div>
