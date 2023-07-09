<script lang="ts">
  import Info from "./Info.svelte";
  import type Song from "../../../../models/song.model";

  export let currentSong: Song;
  export let page: number;
</script>

<div class="flex">
  <Info icon="📄" label={`${page}/${currentSong?.pages}`} />
</div>
