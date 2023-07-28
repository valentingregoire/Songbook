<script lang="ts">
  import "$src/theme.pcss";
  // import '@skeletonlabs/skeleton/themes/theme-crimson.css';
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "$src/app.css";
</script>

<main>
  <div class="h-screen w-full select-none overflow-clip">
    <slot />
  </div>
</main>
