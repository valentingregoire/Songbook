<script lang="ts">
import Info from "./Info.svelte";
import type { Song } from "../../../../models/songbook.model";

export let currentSong: Song;
</script>

<div>
  <Info icon="📝" label={currentSong?.info} optional />
</div>
