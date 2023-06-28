<script lang="ts">
  import { Song, Songbook } from "../../models/songbook.model";
  import { currentSong, currentSongbook, songbooks } from "../../stores";

  let songbooksLocal: Songbook[];
  let currentSongbookLocal: Songbook | undefined;
  let currentSongLocal: Song | undefined;

  songbooks.subscribe((s) => songbooksLocal = s);
  currentSongbook.subscribe((s) => currentSongbookLocal = s);
  currentSong.subscribe((s) => currentSongLocal = s);
</script>

<!--<ul>-->
<!--  {#each songbooksLocal as songbook}-->
<!--    <li>-->
<!--      <ul>-->
<!--        <li>-->
<!--          Name: {songbook.name}-->
<!--        </li>-->
<!--        <li>-->
<!--          Default: {songbook.default ? "✔️" : "✘❌"}-->
<!--        </li>-->
<!--      </ul>-->
<!--    </li>-->
<!--    {/each}-->
<!--</ul>-->

<div>
  <h1>{currentSongbookLocal.name}</h1>
  <ul>
    <li>
      {currentSongLocal.title}
    </li>
    <li>
      {currentSongLocal.pages}
    </li>
    <li>
      {currentSongLocal.fileType}
    </li>
  </ul>
  {currentSong}
</div>

<!--<img-->
<!--  class="w-full h-auto"-->
<!--  src="/scores/images/songbook/{song.title}-{page}.{song.fileType}"-->
<!--  alt={song.title}-->
<!--/>-->
