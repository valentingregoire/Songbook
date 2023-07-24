<script lang="ts">
  import "../theme.pcss";
  // import '@skeletonlabs/skeleton/themes/theme-crimson.css';
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.css";
  import { AppBar, AppRail, AppRailAnchor, AppRailTile } from "@skeletonlabs/skeleton";
  import Icon from "$lib/Icon.svelte";
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import { settingsStore } from "$stores";
  import type { Settings } from "$models/settings.model";
  import { onMount } from "svelte";
  import { cubicIn, quintIn } from "svelte/easing";

  const menu = [
    {
      name: "Songbooks",
      icon: "songbooks",
      link: "/songbooks"
    },
    {
      name: "Songs",
      icon: "songs",
      link: "/songs"
    },
    {
      name: "Settings",
      icon: "settings",
      link: "/settings"
    }
  ];

  let settings: Settings;

  $: if ($page.url.pathname !== "/")
      settingsStore.subscribe(value => settings = value);

  // onMount(() => {
  //   settingsStore.subscribe(value => settings = value);
  // });
  // let settings;
  // settingsStore.subscribe(value => settings = value);

  let showRail = settings?.menu?.showMenu;
  // let showRail: boolean = false;
</script>

{JSON.stringify($page.url)} <br />
{JSON.stringify(settings)}
{#if $page.url.pathname !== "/"}
  <AppBar>
    <svelte:fragment slot="lead">
      <button type="button" class="btn-icon" on:click={() => showRail = !showRail}>
        <Icon name="menu" />
      </button>
    </svelte:fragment>
    <h3 class="h3">Songbooks</h3>
    <svelte:fragment slot="trail">
    </svelte:fragment>
  </AppBar>

  <!--{JSON.stringify(settings)}-->
  {#if showRail}
    <div class="flex absolute h-full" in:fly={{x: -200, duration: 150}} out:fly={{x:-200, duration: 150, easing: cubicIn}}>
      <AppRail>
        {#each menu as item}
          <AppRailAnchor href={item.link} selected={$page.url.pathname === item.link}>
            <svelte:fragment slot="lead">
              <Icon name={item.icon} />
            </svelte:fragment>
            <span>{item.name}</span>
          </AppRailAnchor>
        {/each}
        <svelte:fragment slot="trail">
        </svelte:fragment>
      </AppRail>
    </div>
  {/if}
{/if}

<main>
  <div class="h-screen w-full select-none overflow-clip">
    <slot />
  </div>
</main>
