<script lang="ts">
  import Viewer from "$lib/Viewer/Viewer.svelte";
  import StatusBar from "$lib/StatusBar/StatusBar.svelte";
  import { onMount } from "svelte";
  import { getSongbooks } from "../services/service.js";
  import { songbooks } from "../stores";

  onMount(async () => {
    songbooks.set(await getSongbooks());
  });
</script>

<div class="h-screen">
  <StatusBar />
  <Viewer />
</div>
