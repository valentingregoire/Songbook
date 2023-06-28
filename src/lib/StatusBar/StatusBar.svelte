<script>
  import SongInfo from "$lib/StatusBar/SongInfo.svelte";
  import SongNumber from "$lib/StatusBar/SongNumber.svelte";
  import PageNumber from "$lib/StatusBar/PageNumber.svelte";
</script>

<div class="flex absolute top-0 left-0 w-full justify-end">
  <SongInfo />
  <SongNumber />
  <PageNumber />
</div>
