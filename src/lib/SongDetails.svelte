<script lang="ts">
  import type Song from "$models/song.model";
  import Icon from "$lib/Icon.svelte";

  export let song: Song;

  let songOriginal: Song = structuredClone(song);

  let title: string;

  // $: changed = song ? !song.equals(songOriginal) : false;
  $: equal = song
    ? JSON.stringify(song) === JSON.stringify(songOriginal)
    : true;
</script>

{#if song}
  <div class="grid grid-cols-2 grid-rows-4 gap-4">
    <input
      class="input"
      title="Title"
      type="text"
      bind:value={song.title}
      placeholder="Title"
    />
    <input
      class="input"
      title="Artist"
      type="text"
      bind:value={song.artist}
      placeholder="Artist"
    />
    <input
      class="input"
      title="File Type"
      type="text"
      bind:value={song.fileType}
      placeholder="File Type"
    />
    <input
      class="input"
      title="BPM"
      type="number"
      bind:value={song.bpm}
      placeholder="BPM"
    />
    <input
      class="input"
      title="Key"
      type="text"
      bind:value={song.key}
      placeholder="Key"
    />
    <input
      class="input"
      title="Info"
      type="text"
      bind:value={song.info}
      placeholder="Extra info"
    />
    <div class="col-span-2">
      <ul class="list">
        {#each song?.pages as page}
          <li>
            <span class="inline-flex"><Icon name="page" /> {page}</span>
          </li>
        {/each}
      </ul>
    </div>
    <div class="col-span-2">
      <button type="button" disabled={equal} class="btn variant-filled-primary">
        <Icon name="save" />
        <span>Save</span>
      </button>
      <button type="button" class="btn">
        <Icon name="cancel" />
        <span>Cancel</span>
      </button>
    </div>
  </div>
{/if}
