<script lang="ts">
  import SongList from "$lib/SongList.svelte";
  import type Song from "$models/song.model";
  import { navigate } from "$lib/utils";
  import { type DrawerSettings, getDrawerStore } from "@skeletonlabs/skeleton";

  const drawerStore = getDrawerStore();

  // export let songs: Array<Song | string> = [];
  export let songbookName: string | undefined;
  const settings: DrawerSettings = {
    meta: {
      songbookName
    }
  };
  drawerStore.open(settings);

  // let selectedSongId: number;

  // export function openMenuDrawer(): void {
  //   const drawerSettings: DrawerSettings = {
  //     id: "bottom-drawer",
  //     position: "bottom",
  //     // bgDrawer: 'bg-purple-900 text-white',
  //     // bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
  //     // width: 'w-[280px] md:w-[480px]',
  //     // height: "h-[80%]",
  //     height: "h-full",
  //     // padding: "px-4 pt-4",
  //     padding: "px-[5%] py-[5%]",
  //     // rounded: "rounded-t-xl"
  //     rounded: "rounded-3xl",
  //   };
  //   drawerStore.open(drawerSettings);
  // }

  // async function clickSong(): Promise<void> {
  //   drawerStore.close();
  //   await navigate({ songbookName, songId: selectedSongId });
  // }
</script>

<slot>
  HALLO
</slot>
