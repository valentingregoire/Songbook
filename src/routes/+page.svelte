<script lang="ts">
  import { onMount } from "svelte";
  import { getSongbooks } from "../services/service.js";
  import { songbooksStore } from "../stores";

  onMount(async () => {
    songbooksStore.set(await getSongbooks());
  });
</script>

<div class="h-screen">
</div>
