<script lang="ts">
  import "$src/theme.pcss";
  // import '@skeletonlabs/skeleton/themes/theme-crimson.css';
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "$src/app.css";
  import { AppBar, AppRail, AppRailAnchor } from "@skeletonlabs/skeleton";
  import Icon from "$lib/Icon.svelte";
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import { settingsStore } from "$stores";
  import type { Settings } from "$models/settings.model";
  import { cubicIn } from "svelte/easing";

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
  let showRail: boolean;

  $: if ($page.url.pathname !== "/") {
    settingsStore.subscribe(value => settings = value);
    showRail = settings?.menu?.show;
  }
</script>

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
  <div class="flex absolute h-full z-50" in:fly={{x: -200, duration: 150}}
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
        <AppRailAnchor href={item?.link} selected={$page?.url?.pathname === item?.link}>
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

<main>
  <div class="h-screen w-full select-none overflow-clip" in:fly={{y: -500, duration: 200}} out:fly={{y: 500, duration: 200}}>
    <slot />
  </div>
</main>
