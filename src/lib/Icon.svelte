<script lang="ts">
  import FaBook from "svelte-icons/fa/FaBook.svelte";
  import FaItunesNote from "svelte-icons/fa/FaItunesNote.svelte";
  import FaArchive from "svelte-icons/fa/FaArchive.svelte";
  import IoMdArrowRoundBack from "svelte-icons/io/IoMdArrowRoundBack.svelte";
  import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte'

  export let name: string;
  export let iconClass: string = "badge-icon";
</script>

{#if name}
<i class={iconClass}>
  {#if name === "songbook"}
    <FaBook />
  {:else if name === "songbooks"}
    <FaArchive />
  {:else if name === "title"}
    <FaItunesNote />
  {:else if name === "arrow-left"}
    <IoMdArrowRoundBack />
<!--    <FaArrowLeft />-->
  {/if}
</i>
  {#if $$slots.default}
    <span class="badge-text">
      <slot />
    </span>
  {/if}
{/if}