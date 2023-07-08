<script lang="ts">
  import FaBook from "svelte-icons/fa/FaBook.svelte";
  import FaItunesNote from "svelte-icons/fa/FaItunesNote.svelte";
  import FaArchive from "svelte-icons/fa/FaArchive.svelte";

  export let name: string;
</script>
{#if name}
<span class="badge-icon">
  {#if name === "songbook"}
    <FaBook />
  {:else if name === "songbooks"}
    <FaArchive />
  {:else if name === "title"}
    <FaItunesNote />
  {/if}
</span>
  {#if $$slots.default}
    <span class="badge-text">
      <slot />
    </span>
  {/if}
{/if}