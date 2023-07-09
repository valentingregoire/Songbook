<script lang="ts">
  import { page } from "$app/stores";
  import type Songbook from "../../../../../models/songbook.model";
  import { songbooksStore } from "../../../../../stores";

  console.log("page", $page);

  const songbookName: string = $page.params.name;
  const songId: numebr = $page.params.id;

  let songbook: Songbook;
  songbooksStore.subscribe(songbooks => songbook = songbooks.find(s => s.name === songbookName));
</script>

<!--<SongList songs={songbook.songs} {songbookName} />-->

<div>
  Songbook: {songbookName}
</div>
<div>
  Song: {songbook?.songs[songId].title}
</div>