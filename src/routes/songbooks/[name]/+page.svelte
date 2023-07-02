<script lang="ts">
  import { page } from "$app/stores";
  import Viewer from "./Viewer/Viewer.svelte";
  import StatusBar from "./StatusBar/StatusBar.svelte";

  const name = $page.params.name;
</script>

<h1>Songbook {name}</h1>
<StatusBar />
<Viewer />