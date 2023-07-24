<script lang="ts">
  import FaBook from "svelte-icons/fa/FaBook.svelte";
  import FaItunesNote from "svelte-icons/fa/FaItunesNote.svelte";
  import FaArchive from "svelte-icons/fa/FaArchive.svelte";
  import IoMdArrowRoundBack from "svelte-icons/io/IoMdArrowRoundBack.svelte";
  // import FaArrowLeft from "svelte-icons/fa/FaArrowLeft.svelte";
  import FaSave from "svelte-icons/fa/FaSave.svelte";
  import FaFileAlt from "svelte-icons/fa/FaFileAlt.svelte";
  // import FaWindowClose from "svelte-icons/fa/FaWindowClose.svelte";
  import MdClose from "svelte-icons/md/MdClose.svelte";
  import MdCancel from "svelte-icons/md/MdCancel.svelte";
  import FaCheckCircle from "svelte-icons/fa/FaCheckCircle.svelte";
  import FaBars from 'svelte-icons/fa/FaBars.svelte'


  export let name: string;
  export let iconClass: string = "w-full h-[1.5rem]";
</script>

{#if name}
  <div class={iconClass}>
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
    {:else if name === "menu"}
      <FaBars />
    {:else}
      {name}
    {/if}
  </div>
  {#if $$slots.default}
    <span class="badge-text">
      <slot />
    </span>
  {/if}
{/if}