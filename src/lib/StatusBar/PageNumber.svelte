<script lang="ts">
  import Info from "./Info.svelte";
  import type Song from "$models/song.model";
  import currentSong, { ICON_MAP } from "../utils";

  export let song: Song;
  export let pageId: number;
</script>

<div class="flex">
  <Info icon={ICON_MAP.page} label={`${pageId + 1}/${currentSong?.pages}`} />
</div>
