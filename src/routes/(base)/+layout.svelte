<script lang="ts">
  // import "$src/theme.pcss";
  // import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "$src/app.pcss";
  import { fly } from "svelte/transition";
  import type { Settings } from "$models/settings.model";
  import { settingsStore } from "$stores";

  let settings: Settings;
  let animationSpeed: number;

  settingsStore.subscribe((s: Settings) => {
    settings = s;
    animationSpeed = settings.layout!.animationSpeed!;
  });
</script>

<main>
  <div
    class="h-screen w-full select-none overflow-clip"
    in:fly={{ y: 500, duration: animationSpeed }}
    out:fly={{ y: 500, duration: animationSpeed }}
  >
    <slot />
  </div>
</main>
