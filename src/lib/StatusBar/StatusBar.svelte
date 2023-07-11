<script lang="ts">
  import ExtraInfo from "./ExtraInfo.svelte";
  import CurrentInfo from "./CurrentInfo.svelte";
  import NextSongInfo from "./NextSongInfo.svelte";
  import SongNumber from "./SongNumber.svelte";
  import PageNumber from "./PageNumber.svelte";
  import { AppBar } from "@skeletonlabs/skeleton";
  import type Songbook from "$models/songbook.model";
  import Icon from "../Icon.svelte";

  export let songId: number;
  export let songbook: Songbook;
  export let pageId: number;

  $: song = songbook?.songs[songId];
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <!--    <a class="w-8" href="/songbooks/{songbook.name}">-->
    <!--      <Icon name="arrow-left" iconClass=""/>-->
    <!--    </a>-->

    <a href="/songbooks/{songbook.name}">
      <CurrentInfo {song} {songbook} />
    </a>
  </svelte:fragment>
  <ExtraInfo {song} />
  <svelte:fragment slot="trail">
    <NextSongInfo {songId} {songbook} />
    <SongNumber {songId} {songbook} />
    <PageNumber {song} {pageId} />
  </svelte:fragment>
</AppBar>
