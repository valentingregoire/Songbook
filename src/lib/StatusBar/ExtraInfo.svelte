<script lang="ts">
  import Info from "./Info.svelte";
  import type Song from "$models/song.model";
  import ICON_MAP from "../utils";

  export let song: Song;
</script>

<div>
  <Info icon={ICON_MAP.info2} label={song?.info} optional />
</div>
