<script lang="ts">
  import { page } from "$app/stores";
  import Viewer from "./Viewer/Viewer.svelte";
  import StatusBar from "./StatusBar/StatusBar.svelte";

  const name = $page.params.name;

  async function getStuff() {
    const response = await fetch(`/songbooks/${name}`, {
      method: "POST",
      body: JSON.stringify({
        name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("data", data);

  }
</script>

<h1>Songbook {name}</h1>
<StatusBar />
<Viewer />
<button on:click={getStuff}>Get some stuff bro!</button>
