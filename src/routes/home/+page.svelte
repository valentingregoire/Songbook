<script lang="ts">
  import ICON_MAP from "$lib/utils";


  const menu = [
    {
      name: "Songbooks",
      icon: ICON_MAP["songbooks"],
      link: "/songbooks"
    },
    {
      name: "Songs",
      icon: ICON_MAP["title"],
      link: "/songs"
    },
    {
      name: "Settings",
      icon: ICON_MAP["settings"],
      link: "/settings"
    },
    {
      name: "About",
      icon: ICON_MAP["info"],
      link: "/about"
    }
  ];
</script>

<div class="grid grid-cols-1 h-full justify-items-center content-center">
  {#each menu as item}
    <a href={item.link} class="m-5 w-96 card btn btn-primary btn-lg py-6">
      <h1 class="h1">{item.icon} {item.name}</h1>
    </a>
  {/each}
</div>
