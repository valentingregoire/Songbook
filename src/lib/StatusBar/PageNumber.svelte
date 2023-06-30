<script lang="ts">
  import type { Song } from "../../models/songbook.model";
  import Info from "./Info.svelte";

  export let currentSong: Song;
  export let page: number;
</script>

<div class="flex">
  <Info icon="📄" label={`${page}/${currentSong?.pages}`} />
</div>
<!--<span>📄 {page}/{currentSong?.pages}</span>-->
