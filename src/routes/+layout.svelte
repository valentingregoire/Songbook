<script lang="ts">
  import { Drawer, getDrawerStore, initializeStores } from "@skeletonlabs/skeleton";
  import "../app.pcss";
  import type Songbook from "$models/songbook.model";
  import { songbooksStore } from "$stores";

  initializeStores();
  const drawerStore = getDrawerStore();

  // let songbook: Songbook;
  // songbooksStore.subscribe((songbookMap) => {
  //   console.log("songbookMap", songbookMap);
  //   songbook = songbookMap.get($drawerStore.meta.songbookName)!;
  // });
</script>

<slot>
<!--  <Drawer />-->
  <Drawer zIndex="z-50" position="left">
<!--    <SongList {songs} bind:selectedSongId {clickSong} />-->
<!--    {songbook.name}-->
    drawerContent here:
    {JSON.stringify($drawerStore.meta)}

  </Drawer>
</slot>
