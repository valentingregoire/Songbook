<script lang="ts">
  import type Song from "../../models/song.model";
  import { songsStore } from "../../stores";
  import SongList from "../../lib/SongList.svelte";

  let songs: Array<Song | string>;
  songsStore.subscribe(s => songs = Object.values(s));
</script>

<SongList {songs}/>