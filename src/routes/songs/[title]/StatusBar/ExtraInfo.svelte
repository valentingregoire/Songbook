<script lang="ts">
import Info from "./Info.svelte";
import type Song from "../../../../models/song.model";

export let currentSong: Song;
</script>

<div>
  <Info icon="📝" label={currentSong?.info} optional />
</div>
