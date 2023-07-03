<script lang="ts">
  import type { Songbook } from "../../models/songbook.model";
  import { songbooksStore } from "../../stores";
  import H1 from "../../lib/Font/H1.svelte";

  let songbooks: Songbook[];
  songbooksStore.subscribe(s => songbooks = s);
</script>

<div class="prose mt-10">
  <h1>📚 Songbooks</h1>
</div>

{#if songbooks}
  <div class="items-center content-center place-content-center place-items-center">
    <ul>
      {#each songbooks as songbook}
        <li>
          <div class="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div class="collapse-title text-xl">
              <a href={`songbooks/${songbook.name}`}>📘 {songbook.name}</a>
            </div>
            <div class="collapse-content">
              <table class="table">
                <thead>
                <tr>
                  <th>🎵</th>
                  <th>👨‍</th>
                  <th>⏱️</th>
                  <th>🎼</th>
                  <th>📄</th>
                  <th>🖻</th>
                  <th>ℹ️</th>
                </tr>
                </thead>
                {#each songbook.songs as song}
                  <tr>
                    <td>{song.name}</td>
                    <td>{song.artist}</td>
                    <td>{song.bpm}</td>
                    <td>{song.key}</td>
                    <td>{song.pages}</td>
                    <td>{song.fileType}</td>
                    <td>{song.info}</td>
                  </tr>
                {/each}
              </table>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
{:else}
  <h2>No songbooks found...</h2>
{/if}
