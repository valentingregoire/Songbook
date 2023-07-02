<script lang="ts">
  import type { Songbook } from "../../models/songbook.model";

  let songbooks: Songbook[];

  async function getStuff() {
    const response = await fetch("/songbooks", {
      method: "POST",
      body: JSON.stringify({
        "name": "some name lol",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("data", data);

  }

  async function getSongbooks() {
    const response = await fetch("/songbooks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("songbooks", data);
    songbooks = data;
  }
</script>

<h1>Songbooks</h1>
<button on:click={getStuff}>Get Stuff</button>
<button class="btn btn-primary" on:click={getSongbooks}>Get Songbooks</button>

{#if songbooks}
  <ul>
    {#each songbooks as songbook}
      <li>{songbook.name}</li>
    {/each}
  </ul>
{/if}
