<script lang="ts">
  import ICON_MAP from "../../lib/utils";


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

<div>
    {#each menu as item}
      <div class="flex m-10 justify-center">
        <a href={item.link} class="w-96 card btn btn-primary btn-lg py-6">
          <h1 class="h1">{item.icon} {item.name}</h1>
        </a>
      </div>
    {/each}
</div>
