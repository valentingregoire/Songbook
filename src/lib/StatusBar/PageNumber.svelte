<script lang="ts">
  import Info from "./Info.svelte";
  import type Song from "$models/song.model";
  import ICON_MAP from "../utils";

  export let song: Song;
  export let pageId: number;
</script>

PageNumber: {pageId + 1}/{song?.pages?.length}
<div class="flex">
  <Info icon={ICON_MAP.page} label="{pageId + 1}/{song?.pages?.length || 1}" />
</div>
