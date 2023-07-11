<script lang="ts">
  import type Songbook from "$models/songbook.model";

  export let songId: number;
  export let songbook: Songbook;
</script>

<div class="flex">
  <span>🎵 {+songId + 1}/{songbook?.songs?.length}</span>
</div>
