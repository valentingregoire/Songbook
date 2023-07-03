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
    },
    {
      name: "About",
      icon: "ℹ️",
      link: "/about"
    }
  ];

  function navigate(item) {
    window.location = item.link;
  }
</script>

  {#each menu as item}
<!--    <Card classes="w-80 h-80 cursor-pointer" on:click={() => navigate(item)}>-->
<!--      <div class="flex flex-col" slot="body">-->
<!--        <span class="text-center text-8xl p-8">{item.icon}</span>-->
<!--        <span class="text-center text-5xl">{item.name}</span>-->
<!--      </div>-->
<!--    </Card>-->
    <button class="btn btn-primary rounded-full" on:click={() => navigate(item)}>{item.name}</button>
  {/each}