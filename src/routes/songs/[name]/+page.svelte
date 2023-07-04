<script>
  import Viewer from "./Viewer/Viewer.svelte";
  import StatusBar from "./StatusBar/StatusBar.svelte";
  import Song from "../../../models/songbook.model.js";
  import Songbook from "../../../models/songbook.model.js";

  let song: Song;
  let songbook: Songbook;
</script>

<StatusBar {song}/>
<Viewer />
