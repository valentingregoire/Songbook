<script lang="ts">
  import Info from "./Info.svelte";
  import type Songbook from "$models/songbook.model";
  import type Song from "$models/song.model";
  import ICON_MAP from "../utils";

  export let songbook: Songbook;
  export let song: Song;
</script>

<!--<div class="absolute top-0 left-0 flex">-->
<div class="flex">
  <Info icon={ICON_MAP.songbook} label={songbook?.name} />
  <Info icon={ICON_MAP.artist} label={song?.artist} optional />
  <Info icon={ICON_MAP.title} label={song?.title} />
  <Info icon={ICON_MAP.bpm} label={song?.bpm} optional />
  <Info icon={ICON_MAP.key} label={song?.key} optional />
</div>
