<script lang="ts">
  import "$src/theme.pcss";
  // import '@skeletonlabs/skeleton/themes/theme-crimson.css';
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "$src/app.css";
  import { fade, fly } from "svelte/transition";
</script>

<main>
  <div class="h-screen w-full select-none overflow-clip" in:fly={{y: -500, duration: 200}} out:fly={{y: 500, duration: 200}}>
    <slot />
  </div>
</main>
