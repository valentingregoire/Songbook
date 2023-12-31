<script lang="ts">
  import { Drawer, initializeStores } from "@skeletonlabs/skeleton";
  import "../app.pcss";


  // let songbook: Songbook;
  // songbooksStore.subscribe((songbookMap) => {
  //   console.log("songbookMap", songbookMap);
  //   songbook = songbookMap.get($drawerStore.meta.songbookName)!;
  // });
  initializeStores();
</script>

<slot>
<!--  <Drawer />-->
  <Drawer>
    <div>This is a drawer</div>
  </Drawer>
</slot>
