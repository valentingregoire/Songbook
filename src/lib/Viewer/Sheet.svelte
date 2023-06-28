<script lang="ts">
  import { Song } from "../../models/songbook.model";

  export let song: Song;
  export let page: number;
</script>
<span>{page}</span>
<!--<img-->
<!--  class="w-full h-auto"-->
<!--  src="/scores/images/songbook/{song.title}-{page}.{song.fileType}"-->
<!--  alt={song.title}-->
<!--/>-->
