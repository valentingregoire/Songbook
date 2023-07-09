<script>
  import '@skeletonlabs/skeleton/themes/theme-crimson.css';
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import "../app.css";
</script>

<main>
  <div class="flex flex-col h-screen w-full place-items-center select-none">
    <slot />
  </div>
</main>
