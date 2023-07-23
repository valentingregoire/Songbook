<script lang="ts">
  import FaBook from "svelte-icons/fa/FaBook.svelte";
  import FaItunesNote from "svelte-icons/fa/FaItunesNote.svelte";
  import FaArchive from "svelte-icons/fa/FaArchive.svelte";
  import IoMdArrowRoundBack from "svelte-icons/io/IoMdArrowRoundBack.svelte";
  import FaArrowLeft from "svelte-icons/fa/FaArrowLeft.svelte";
  import FaSave from "svelte-icons/fa/FaSave.svelte";
  import FaFileAlt from "svelte-icons/fa/FaFileAlt.svelte";
  import FaWindowClose from "svelte-icons/fa/FaWindowClose.svelte";
  import MdClose from "svelte-icons/md/MdClose.svelte";
  import MdCancel from "svelte-icons/md/MdCancel.svelte";
  import FaCheckCircle from "svelte-icons/fa/FaCheckCircle.svelte";
  import { fade } from 'svelte/transition';


  export let name: string;
  export let iconClass: string = "badge-icon";
</script>

{#if name}
  <i class={iconClass} transition:fade>
    {#if name === "songbook"}
      <FaBook />
    {:else if name === "songbooks"}
      <FaArchive />
    {:else if name === "title"}
      <FaItunesNote />
    {:else if name === "arrow-left"}
      <IoMdArrowRoundBack />
      <!--    <FaArrowLeft />-->
    {:else if name === "save"}
      <FaSave />
    {:else if name === "page"}
      <FaFileAlt />
    {:else if name === "close"}
      <MdClose />
    {:else if name === "cancel"}
      <MdCancel />
    {:else if name === "check-circle"}
      <FaCheckCircle />
    {:else}
      {name}
    {/if}
  </i>
  {#if $$slots.default}
    <span class="badge-text" transition:fade>
      <slot />
    </span>
  {/if}
{/if}