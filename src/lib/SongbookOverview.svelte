<script lang="ts">
  import type Songbook from "../models/songbook.model";
  import ICON_MAP from "$lib/utils.ts";

  export let songbook: Songbook;
  export let title: boolean = true;
  export let artist: boolean = true;
  export let bpm: boolean = true;
  export let key: boolean = true;
  export let pages: boolean = true;
  export let fileType: boolean = true;
  export let info: boolean = true;

  // make sure to not include columns that are never set
  // title = title ? songbook?.songs.some(song => song instanceof Song && song.title) : false;
  console.log("instance", typeof songbook?.songs[2]);
  // console.log(songbook?.songs.find(song => song instanceof Song));
  artist = artist ? songbook?.songs.some(song => !(song instanceof String) && song.artist) : false;
  bpm = bpm ? songbook?.songs.some(song => !(song instanceof String) && song.bpm) : false;
  key = key ? songbook?.songs.some(song => !(song instanceof String) && song.key) : false;
  pages = pages ? songbook?.songs.some(song => !(song instanceof String) && song.pages) : false;
  fileType = fileType ? songbook?.songs.some(song => !(song instanceof String) && song.fileType) : false;
  info = info ? songbook?.songs.some(song => !(song instanceof String) && song.info) : false;
</script>

{#if songbook}
  <div class="w-full content-start">
    <div class="collapse collapse-arrow bg-base-200 my-2">
      <input type="checkbox" />
      <div class="collapse-title text-xl">
        <a href={`songbooks/${songbook.name}`}>{ICON_MAP["songbook"]} {songbook.name}</a>
      </div>
      <div class="collapse-content">
        <table class="table">
          <thead>
          <tr>
            {#if title}
              <th>{ICON_MAP.title} Title</th>
            {/if}
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
          {#each songbook.songs as song}
            <tr>
              <!--              <a href={`songbooks/${songbook.name}`}>-->
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
        </table>
      </div>
    </div>
  </div>
{:else}
  <h2>Songbook not found.</h2>
{/if}
