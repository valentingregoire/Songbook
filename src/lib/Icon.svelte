<script lang="ts">
  import FaBook from "svelte-icons/fa/FaBook.svelte";
  import FaItunesNote from "svelte-icons/fa/FaItunesNote.svelte";
  import IoMdArrowRoundBack from "svelte-icons/io/IoMdArrowRoundBack.svelte";
  // import FaArrowLeft from "svelte-icons/fa/FaArrowLeft.svelte";
  import FaSave from "svelte-icons/fa/FaSave.svelte";
  import FaFileAlt from "svelte-icons/fa/FaFileAlt.svelte";
  // import FaWindowClose from "svelte-icons/fa/FaWindowClose.svelte";
  import MdClose from "svelte-icons/md/MdClose.svelte";
  import MdCancel from "svelte-icons/md/MdCancel.svelte";
  import FaCheckCircle from "svelte-icons/fa/FaCheckCircle.svelte";
  import FaBars from "svelte-icons/fa/FaBars.svelte";
  import FaMusic from "svelte-icons/fa/FaMusic.svelte";
  import FaCog from "svelte-icons/fa/FaCog.svelte";
  import MdImportContacts from "svelte-icons/md/MdImportContacts.svelte";
  import FaCheck from "svelte-icons/fa/FaCheck.svelte";
  import FaTimes from "svelte-icons/fa/FaTimes.svelte";
  import FaHashtag from "svelte-icons/fa/FaHashtag.svelte";
  import FaPencilAlt from "svelte-icons/fa/FaPencilAlt.svelte";
  import MdGroup from "svelte-icons/md/MdGroup.svelte";
  import FaKey from "svelte-icons/fa/FaKey.svelte";
  import MdTimer from "svelte-icons/md/MdTimer.svelte";
  import FaFileImage from "svelte-icons/fa/FaFileImage.svelte";
  import FaInfoCircle from "svelte-icons/fa/FaInfoCircle.svelte";
  import FaChevronLeft from "svelte-icons/fa/FaChevronLeft.svelte";


  export let name: string;
  export let size: string = "h-[16px]";
  export let success: boolean = false;
  export let error: boolean = false;
  export let multiline: boolean = false;
  export let iconClass: string = "content-left float-left items-center";
</script>

{#if name}
  <div
    class="flex content-start items-center"
    class:text-success-700={success}
    class:text-error-600={error}
    class:items-start={multiline}
  >
    <div class="{iconClass} {size}">
      {#if name === "songbook"}
        <FaBook />
      {:else if name === "songbooks"}
        <!--      <FaArchive />-->
        <MdImportContacts />
      {:else if name === "title"}
        <FaItunesNote />
      {:else if name === "artist"}
        <MdGroup />
      {:else if name === "key"}
        <FaKey />
      {:else if name === "bpm"}
        <MdTimer />
      {:else if name === "fileType"}
        <FaFileImage />
      {:else if name === "info"}
        <FaInfoCircle />
      {:else if name === "left"}
        <FaChevronLeft />
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
      {:else if name === "check"}
        <FaCheck />
      {:else if name === "clear"}
        <FaTimes />
      {:else if name === "menu"}
        <FaBars />
      {:else if name === "songs" || name === "song"}
        <FaMusic />
      {:else if name === "settings"}
        <FaCog />
      {:else if name === "hash"}
        <FaHashtag />
      {:else if name === "edit"}
        <FaPencilAlt />
      {:else}
        {name}
      {/if}
    </div>
    {#if $$slots.default}
      <span class="badge-text w-full pl-2">
        <slot />
      </span>
    {/if}
  </div>
{/if}