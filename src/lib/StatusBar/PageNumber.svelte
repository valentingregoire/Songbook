<script lang="ts">
  import type { Song } from "../../models/songbook.model";

  export let currentSong: Song;
  export let page: number;
</script>

<span>📄 {page}/{currentSong?.pages}</span>
