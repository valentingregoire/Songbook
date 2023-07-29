<script lang="ts">
  import type Songbook from "$models/songbook.model";
  import ICON_MAP from "$lib/utils.ts";

  export let songbook: Songbook;
</script>

{#if songbook}
  <dl class="list-dl">
    {#each songbook.songs as song, i}
        <dt>
          <span class="badge bg-primary-200">{i + 1}</span>
          {song.title}
        </dt>
        <dd>
          <ul class="list">
            {#if song.artist}
              <li>
                <span class="badge">{ICON_MAP.artist}</span>
                {song.artist}
              </li>
            {/if}
            {#if song.bpm}
              <li>
                <span class="badge">{ICON_MAP.bpm}</span>
                {song.bpm}
              </li>
            {/if}
            {#if song.key}
              <li>
                <span class="badge">{ICON_MAP.key}</span>
                {song.key}
              </li>
            {/if}
            {#if song.pages}
              <li>
                <span class="badge">{ICON_MAP.pages}</span>
                {song.pages}
              </li>
            {/if}
            {#if song.fileType}
              <li>
                <span class="badge">{ICON_MAP.fileType}</span>
                {song.fileType}
              </li>
            {/if}
            {#if song.info}
              <li>
                <span class="badge">{ICON_MAP.info}</span>
                {song.info}
              </li>
            {/if}
          </ul>
        </dd>
    {/each}
  </dl>
{:else}
  <h2>Songbook not found.</h2>
{/if}
