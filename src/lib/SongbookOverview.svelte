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
</script>

{#if songbook}
  <div class="w-full content-start">
    <!--    <ul>-->
    <!--        <li>-->
    <div class="collapse collapse-arrow bg-base-200 my-2">
      <input type="checkbox" />
      <div class="collapse-title text-xl">
        <a href={`songbooks/${songbook.name}`}>📘 {songbook.name}</a>
      </div>
      <div class="collapse-content">
        <table class="table">
          <thead>
          <tr>
            {#if title}
              <th>{ICON_MAP.title}</th>
            {/if}
            {#if artist}
              <th>{ICON_MAP.artist}</th>
            {/if}
            {#if bpm}
              <th>{ICON_MAP.bpm}</th>
            {/if}
            {#if key}
              <th>{ICON_MAP.key}</th>
            {/if}
            {#if pages}
              <th>{ICON_MAP.pages}</th>
            {/if}
            {#if fileType}
              <th>{ICON_MAP.fileType}</th>
            {/if}
            {#if info}
              <th>{ICON_MAP.info}</th>
            {/if}
          </tr>
          </thead>
          {#each songbook.songs as song}
            <tr>
              <a href={`songbooks/${songbook.name}`}>
                {#if title}
                  <td>{song.title || ""}</td>
                {/if}
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
              </a>
            </tr>
          {/each}
        </table>
      </div>
    </div>
    <!--        </li>-->
    <!--    </ul>-->
  </div>
{:else}
  <h2>Songbook not found.</h2>
{/if}
