<script lang="ts">
  import type { Song } from "../../models/songbook.model";
  import Info from "./Info.svelte";

  export let currentSong: Song;
  export let page: number;
</script>

<div class="place-content-end place-items-end place-self-end justify-end justify-items-end justify-self-end content-end items-end self-end">
  <Info icon="📄" label={`${page}/${currentSong?.pages}`} />
</div>
<!--<span>📄 {page}/{currentSong?.pages}</span>-->
