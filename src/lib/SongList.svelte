<script lang="ts">
  import ICON_MAP from "$lib/utils.ts";
  import type { TableSource } from "@skeletonlabs/skeleton";
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import type Song from "../models/song.model";

  export let songs: Array<Song | string>;
  export let artist: boolean = true;
  export let bpm: boolean = true;
  export let key: boolean = true;
  export let pages: boolean = true;
  export let fileType: boolean = true;
  export let info: boolean = true;
  let selectedSong: number;
  let modalActions;

  let columnHeaders = ["#️", `${ICON_MAP.title} Title`];
  let columns = ["number", "title"];
  // make sure to not include columns that are never set
  artist = artist ? songs?.some(song => !(song instanceof String) && song.artist) : false;
  if (artist) {
    columnHeaders.push(`${ICON_MAP.artist} Artist`);
    columns.push("artist");
  }
  bpm = bpm ? songs?.some(song => !(song instanceof String) && song.bpm) : false;
  if (bpm) {
    columnHeaders.push(`${ICON_MAP.bpm} BPM`);
    columns.push("bpm");
  }
  key = key ? songs?.some(song => !(song instanceof String) && song.key) : false;
  if (key) {
    columnHeaders.push(`${ICON_MAP.key} Key`);
    columns.push("key");
  }
  pages = pages ? songs?.some(song => !(song instanceof String) && song.pages) : false;
  if (pages) {
    columnHeaders.push(`${ICON_MAP.pages} Pages`);
    columns.push("pages");
  }
  fileType = fileType ? songs?.some(song => !(song instanceof String) && song.fileType) : false;
  if (fileType) {
    columnHeaders.push(`${ICON_MAP.fileType} File type`);
    columns.push("fileType");
  }
  info = info ? songs?.some(song => !(song instanceof String) && song.info) : false;
  if (info) {
    columnHeaders.push(`${ICON_MAP.info} Info`);
    columns.push("info");
  }

  function select(event) {
    selectedSong = event.detail[0] - 1;
  }

  function handleModalInitialized(event) {
    console.log("modal initialized", event);
    modalActions = event.detail;
  }

  const source: TableSource = {
    head: columnHeaders,
    body: tableMapperValues(songs?.map((song, index) => {
      song["number"] = index + 1;
      return song;
    }), columns),
    foot: columnHeaders
  }
</script>

{#if songs}
  <Table {source} interactive={true} on:selected={select} />
{:else}
  <h2>Songs not found.</h2>
{/if}
