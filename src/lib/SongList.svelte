<script lang="ts">
  import ICON_MAP from "$lib/utils.ts";
  import type { TableSource } from "@skeletonlabs/skeleton";
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import type Song from "$models/song.model";
  // import { goto } from "$app/navigation";

  export let songs: Array<Song | string>;
  export let selectedSongId: number;
  export let clickSong: Function;
  export let artist: boolean = true;
  export let bpm: boolean = true;
  export let key: boolean = true;
  export let pages: boolean = true;
  export let fileType: boolean = true;
  export let info: boolean = true;

  let columnHeaders = [ICON_MAP.hash, `${ICON_MAP.title} Title`];
  let columns = ["number", "title"];
  // make sure to not include columns that are never set
  artist = artist
    ? songs?.some((song) => !(song instanceof String) && song.artist)
    : false;
  if (artist) {
    columnHeaders.push(`${ICON_MAP.artist} Artist`);
    columns.push("artist");
  }
  bpm = bpm
    ? songs?.some((song) => !(song instanceof String) && song.bpm)
    : false;
  if (bpm) {
    columnHeaders.push(`${ICON_MAP.bpm} BPM`);
    columns.push("bpm");
  }
  key = key
    ? songs?.some((song) => !(song instanceof String) && song.key)
    : false;
  if (key) {
    columnHeaders.push(`${ICON_MAP.key} Key`);
    columns.push("key");
  }
  pages = pages
    ? songs?.some((song) => !(song instanceof String) && song.pages)
    : false;
  if (pages) {
    columnHeaders.push(`${ICON_MAP.pages} Pages`);
    columns.push("pages");
  }
  fileType = fileType
    ? songs?.some((song) => !(song instanceof String) && song.fileType)
    : false;
  if (fileType) {
    columnHeaders.push(`${ICON_MAP.fileType} File type`);
    columns.push("fileType");
  }
  info = info
    ? songs?.some((song) => !(song instanceof String) && song.info)
    : false;
  if (info) {
    columnHeaders.push(`${ICON_MAP.info} Info`);
    columns.push("info");
  }

  function select(event) {
    selectedSongId = event.detail[0] - 1;
    clickSong();
    // if (songbookName)
    //   goto(`/songbooks/${songbookName}/songs/${selectedSong}?pageId=0`);
    // else
    //   goto(`/songs/${selectedSong}?pageId=0`);
  }

  const source: TableSource = {
    head: columnHeaders,
    body: tableMapperValues(
      songs?.map((song) => {
        // if (song instanceof String)
        //   return { title: song , number: index + 1 };
        song.number = song.id + 1;
        // song.title = song.title.replace("'", "’");
        song.pages?.forEach((page, pageIndex) => {
          // page = page.replace("'", "’");
          page = `<a href="/songs/${song.id}?pageId=${pageIndex}">${page}</a>`;
          song.pages[pageIndex] = page;
        });
        return song;
      }),
      columns
    ),
    foot: columnHeaders,
  };
</script>

{#if songs}
  <Table
    class="table-compact"
    {source}
    interactive={true}
    on:selected={select}
  />
{:else}
  <h2>Songs not found.</h2>
{/if}
