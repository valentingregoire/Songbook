<script lang="ts">
  import type Song from "$models/song.model";
  import { songsStore } from "$stores";
  import SongList from "$lib/SongList.svelte";
  import { navigate } from "$lib/utils";

  let songs: Song[];
  let selectedSongId: number;
  songsStore.subscribe((songMap: Map<string, Song>) => songs = [...songMap.values()]);

  async function clickSong() {
    await navigate({ songId: selectedSongId });
  }
</script>

<SongList {songs} bind:selectedSongId {clickSong} />
