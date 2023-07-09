<script lang="ts">
  import { onMount } from "svelte";
  import SongMap from "../models/song.model";
  import Song from "../models/song.model";
  import { get } from "../lib/api";
  import { songbooksStore, songsStore } from "../stores";
  import Songbook from "../models/songbook.model";
  import { goto } from "$app/navigation";
  import { ProgressBar } from "@skeletonlabs/skeleton";
  import { fly } from "svelte/transition";

  let loaded: number = 0;
  let toLoad: number = 2;

  onMount(async () => {
    const songs: SongMap = await get("api/songs");
    songsStore.set(songs);
    const songbooks: Songbook[] = await get("api/songbooks");
    songbooks.forEach(songbook => songbook.songs = songbook.songs.map(song => songs[song] || new Song(song)));
    songbooksStore.set(songbooks);
    await goto("/home");
  });

</script>

<h1>Loading data...</h1>
<ProgressBar label="Loading data..." value={loaded} max={toLoad}></ProgressBar>
<img src="%sveltekit.assets%/icon.png" alt="logo" transition:fly={{y: 200, duration: 250}}/>