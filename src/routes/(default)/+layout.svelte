<script lang="ts">
  // import "$src/theme.pcss";
  // import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "$src/app.pcss";
  import { AppBar, AppRail, AppRailAnchor } from "@skeletonlabs/skeleton";
  import Icon from "$lib/Icon.svelte";
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
  import { settingsStore, songbooksStore } from "$stores";
  import type { Settings } from "$models/settings.model";
  import { cubicIn, cubicOut } from "svelte/easing";
  import type Songbook from "$models/songbook.model";
  import { initializeStores } from "@skeletonlabs/skeleton";

  // initializeStores();

  const iconSize: string = "h-9";
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

  let settings: Settings | undefined;
  let showSideBar: boolean;
  let showSideBarInitial: boolean;
  let songbooks: Map<String, Songbook>;
  songbooksStore.subscribe((value) => (songbooks = value));

  settingsStore.subscribe((value) => (settings = value));
  showSideBarInitial = settings?.layout?.sideBar?.show || true;
  $: $page.url.path, (showSideBar = showSideBarInitial);
</script>

<div class="h-screen w-screen relative select-none">
  <AppBar>
    <svelte:fragment slot="lead">
      <button
        type="button"
        class="btn-icon relative"
        on:click={() => (showSideBar = !showSideBar)}
      >
        {#if showSideBar}
          <span
            class="absolute"
            transition:fly={{
              x: -20,
              duration: settings?.layout?.animationSpeed,
              easing: cubicIn,
            }}
          >
            <Icon name="left" size="h-6" />
          </span>
        {:else}
          <span
            class="absolute"
            transition:fly={{
              x: 20,
              duration: settings?.layout?.animationSpeed,
              easing: cubicIn,
            }}
          >
            <Icon name="menu" size="h-6" />
          </span>
        {/if}
      </button>
    </svelte:fragment>
    <h3 class="h3">
      <Icon name={$page.data?.icon} size="h-8">{$page.data?.title}</Icon>
    </h3>
    <!--    <h3 class="h3">{$page.data?.title}</h3>-->
    <svelte:fragment slot="trail" />
  </AppBar>

  {#key $page.url.pathname}
    {#if showSideBar}
      <div
        class="flex absolute h-full z-50"
        in:fly={{
          x: -200,
          duration: settings?.layout?.animationSpeed,
          easing: cubicOut,
        }}
        out:fly={{
          x: -200,
          duration: settings?.layout?.animationSpeed,
          easing: cubicIn,
        }}
      >
        <AppRail>
          <svelte:fragment slot="lead">
            {#if $page.data?.back_url}
              <AppRailAnchor href={$page.data.back_url}>
                <svelte:fragment slot="lead">
                  <Icon name="arrow-left" size={iconSize} />
                </svelte:fragment>
                {#if settings?.layout?.sideBar?.labels}
                  <span>Back</span>
                {/if}
              </AppRailAnchor>
            {/if}
          </svelte:fragment>
          {#each menu as item}
            <AppRailAnchor
              href={item?.link}
              selected={$page?.url?.pathname === item?.link}
            >
              <svelte:fragment slot="lead">
                <Icon name={item.icon} size={iconSize} />
              </svelte:fragment>
              {#if settings?.layout?.sideBar?.labels}
                <span>{item.name}</span>
              {/if}
            </AppRailAnchor>
          {/each}
          <!--        <svelte:fragment slot="trail">-->
          <!--        </svelte:fragment>-->
        </AppRail>
      </div>
    {/if}
  {/key}

  <!--  <div class="w-full h-full">-->
  <main>
    {#key $page.url.pathname}
      <div
        class="h-full overflow-clip"
        in:fly={{ y: 500, duration: settings?.layout?.animationSpeed }}
      >
        <slot />
      </div>
    {/key}
  </main>
  <!--  </div>-->
</div>
