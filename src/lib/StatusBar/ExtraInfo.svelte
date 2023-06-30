<script lang="ts">
import Info from "$lib/StatusBar/Info.svelte";
import type { Song } from "../../models/songbook.model";

export let currentSong: Song;
</script>

<div>
  <Info icon="ℹ️" label={currentSong?.info} optional />
</div>
