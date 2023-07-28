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
  import { getContext, onMount } from "svelte";
  import { cubicIn, quintIn } from "svelte/easing";
  import type { LayoutModel } from "../models/layout.model";

  export let data;

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

{#if $page.url.pathname !== "/"}
  <AppBar>
    <svelte:fragment slot="lead">
      <button type="button" class="btn-icon" on:click={() => showRail = !showRail}>
        <Icon name="menu" />
      </button>
    </svelte:fragment>
    <h3 class="h3">{$page.data?.title}</h3>
    <svelte:fragment slot="trail">
    </svelte:fragment>
  </AppBar>

  {#if showRail}
    <div class="flex absolute h-full" in:fly={{x: -200, duration: 150}}
         out:fly={{x:-200, duration: 150, easing: cubicIn}}>
      <AppRail>
        <svelte:fragment slot="lead">
          {#if $page.data?.back_url}
            <AppRailAnchor href={$page.data.back_url}>
              <svelte:fragment slot="lead">
                <Icon name="arrow-left" />
              </svelte:fragment>
              <span>Back</span>
            </AppRailAnchor>
          {/if}
        </svelte:fragment>
        {#each menu as item}
          <AppRailAnchor href={item.link} selected={$page?.url?.pathname === item?.link}>
            <svelte:fragment slot="lead">
              <Icon name={item.icon} />
            </svelte:fragment>
            <span>{item.name}</span>
          </AppRailAnchor>
        {/each}
        <!--        <svelte:fragment slot="trail">-->
        <!--        </svelte:fragment>-->
      </AppRail>
    </div>
  {/if}
{/if}

<main>
  <div class="h-screen w-full select-none overflow-clip">
    <slot />
  </div>
</main>
