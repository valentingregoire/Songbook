<script lang="ts">
  import type Songbook from "../models/songbook.model";
  import ICON_MAP from "$lib/utils.ts";
  import Dialog from "./Dialog.svelte";

  export let songbook: Songbook;
  export let artist: boolean = true;
  export let bpm: boolean = true;
  export let key: boolean = true;
  export let pages: boolean = true;
  export let fileType: boolean = true;
  export let info: boolean = true;
  let selectedSong: number;
  let modalActions;

  // make sure to not include columns that are never set
  artist = artist ? songbook?.songs.some(song => !(song instanceof String) && song.artist) : false;
  bpm = bpm ? songbook?.songs.some(song => !(song instanceof String) && song.bpm) : false;
  key = key ? songbook?.songs.some(song => !(song instanceof String) && song.key) : false;
  pages = pages ? songbook?.songs.some(song => !(song instanceof String) && song.pages) : false;
  fileType = fileType ? songbook?.songs.some(song => !(song instanceof String) && song.fileType) : false;
  info = info ? songbook?.songs.some(song => !(song instanceof String) && song.info) : false;

  function handleModalInitialized(event) {
    console.log("modal initialized", event);
    modalActions = event.detail;
  }

  function openModal() {
    modalActions.openModal();
  }
</script>

{#if songbook}
  <div class="flex flex-row cursor-pointer" on:click={openModal}>
<!--    <div class="flex flex-row cursor-pointer" on:click={() => `${songbook.name}`.showModal()}>-->
    <div class="flex-grow">
      {ICON_MAP["songbook"]} {songbook.name}
    </div>
    <div class="flex-none">
      <a href={`songbooks/${songbook.name}/edit`}>{ICON_MAP["edit"]}</a>
    </div>
  </div>
<!--  <button class="btn" on:click={() => dialog2.showModal()}>open modal</button>-->
<!--  <dialog bind:this={dialog} id="my_modal_2" class="modal">-->
<!--    <form method="dialog" class="modal-box">-->
<!--      <h3 class="font-bold text-lg">Hello!</h3>-->
<!--      <p class="py-4">Press ESC key or click outside to close</p>-->
<!--    </form>-->
<!--    <form method="dialog" class="modal-backdrop">-->
<!--      <button>close</button>-->
<!--    </form>-->
<!--  </dialog>-->

<Dialog on:modalInitialized={handleModalInitialized} title={songbook.name}>
  <table class="table table-pin-rows table-pin-cols">
    <thead>
    <tr>
      <th></th>
      <th>{ICON_MAP.title} Title</th>
      {#if artist}
        <th>{ICON_MAP.artist} Artist</th>
      {/if}
      {#if bpm}
        <th>{ICON_MAP.bpm} BPM</th>
      {/if}
      {#if key}
        <th>{ICON_MAP.key} Key</th>
      {/if}
      {#if pages}
        <th>{ICON_MAP.pages} Pages</th>
      {/if}
      {#if fileType}
        <th>{ICON_MAP.fileType} File type</th>
      {/if}
      {#if info}
        <th>{ICON_MAP.info} Info</th>
      {/if}
    </tr>
    </thead>
    <tbody>
    {#each songbook.songs as song, i}
      <tr class="cursor-pointer" class:bg-accent={selectedSong === i} on:click={() => selectedSong = i}>
        <!--              <a href={`songbooks/${songbook.name}`}>-->
        <td>{i + 1}</td>
        <td>{song.title || ""}</td>
        {#if artist}
          <td>{song.artist || ""}</td>
        {/if}
        {#if bpm}
          <td>{song.bpm || ""}</td>
        {/if}
        {#if key}
          <td>{song.key || ""}</td>
        {/if}
        {#if pages}
          <td>{song.pages || ""}</td>
        {/if}
        {#if fileType}
          <td>{song.fileType || ""}</td>
        {/if}
        {#if info}
          <td>{song.info || ""}</td>
        {/if}
        <!--              </a>-->
      </tr>
    {/each}
    </tbody>
    <tfoot>
    <tr>
      <th></th>
      <th>{ICON_MAP.title} Title</th>
      {#if artist}
        <th>{ICON_MAP.artist} Artist</th>
      {/if}
      {#if bpm}
        <th>{ICON_MAP.bpm} BPM</th>
      {/if}
      {#if key}
        <th>{ICON_MAP.key} Key</th>
      {/if}
      {#if pages}
        <th>{ICON_MAP.pages} Pages</th>
      {/if}
      {#if fileType}
        <th>{ICON_MAP.fileType} File type</th>
      {/if}
      {#if info}
        <th>{ICON_MAP.info} Info</th>
      {/if}
    </tr>
    </tfoot>
  </table>
</Dialog>
{:else}
  <h2>Songbook not found.</h2>
{/if}
