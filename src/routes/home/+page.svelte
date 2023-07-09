<script lang="ts">
  import { onMount } from "svelte";
  import { get } from "../../lib/api";
  import { songbooksStore, songsStore } from "../../stores";
  import type { SongMap } from "../../models/song.model";
  import type Songbook from "../../models/songbook.model";
  import ICON_MAP from "../../lib/utils";
  import Song from "../../models/song.model";


  const menu = [
    {
      name: "Songbooks",
      icon: ICON_MAP["songbooks"],
      link: "/songbooks"
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

  function navigate(item) {
    window.location = item.link;
  }
</script>

<div class="hero">
  <div class="hero-content">

    {#each menu as item}
      <!--    <Card classes="w-80 h-80 cursor-pointer" on:click={() => navigate(item)}>-->
      <!--      <div class="flex flex-col" slot="body">-->
      <!--        <span class="text-center text-8xl p-8">{item.icon}</span>-->
      <!--        <span class="text-center text-5xl">{item.name}</span>-->
      <!--      </div>-->
      <!--    </Card>-->

      <!--    <button class="btn btn-primary rounded-full" on:click={() => navigate(item)}>{item.name}</button>-->

      <!--      <a href={item.link} class="btn btn-primary btn-lg">-->
      <!--        <span>{item.icon} {item.name}</span>-->
      <!--        <span class="text-8xl">{item.icon}</span>-->
      <!--        <span class="text-5xl">{item.name}</span>-->
      <!--      </a>-->
      <a href={item.link} class="btn btn-primary btn-lg h-full py-6 prose">
        <div>
<!--          <span class="text-4xl">{item.icon} {item.name}</span>-->
          <div class="h1 text-9xl pb-5">{item.icon}</div>
          <div class="h1 text-6xl">{item.name}</div>
<!--            <h2>{item.icon} {item.name}</h2>-->
            <!--          <div class="divider"></div>-->
<!--            <figure class="text-8xl">{item.icon}</figure>-->
        </div>
      </a>
    {/each}
  </div>
</div>
