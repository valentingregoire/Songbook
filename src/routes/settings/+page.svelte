<script lang="ts">
  import { AppBar } from "@skeletonlabs/skeleton";
  import Icon from "$lib/Icon.svelte";
  import { settingsStore } from "$stores";

  let settings: Settings;
  settingsStore.subscribe(value => settings = value);
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <a class="w-8" href="/home">
      <Icon name="arrow-left" iconClass="" />
    </a>
  </svelte:fragment>
  <h3 class="h3">Settings</h3>
  <svelte:fragment slot="trail">
  </svelte:fragment>
</AppBar>

Settings: {JSON.stringify(settings)}
1: {settings.viewer.sideButtonWidth} | {settings.viewer.bottomButtonHeight}