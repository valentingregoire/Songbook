<script lang="ts">

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
</script>

<h1>Songbooks</h1>
<button on:click={getStuff}>Get Stuff</button>
