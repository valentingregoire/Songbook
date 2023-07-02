<script lang="ts">

  import Card from "../../lib/Card.svelte";

  const menu = [
    {
      name: "Songbooks",
      icon: "📚",
      link: "/songbooks"
    },
    {
      name: "Settings",
      icon: "⚙️",
      link: "/settings"
    }
  ];

  function navigate(item) {
    window.location = item.link;
  }
</script>

<div class="flex">
  {#each menu as item}
    <Card>
      <div class="flex flex-col min-w-[20%] cursor-pointer" slot="body" on:click={() => navigate(item)}>
        <span class="min-w-full text-center text-8xl p-8">{item.icon}</span>
        <span class="min-w-full text-center text-5xl">{item.name}</span>
      </div>
    </Card>
  {/each}
</div>