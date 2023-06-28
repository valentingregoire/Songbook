<script lang="ts">
  import SideButton from "$lib/Viewer/SideButton.svelte";
  import BottomButton from "$lib/Viewer/BottomButton.svelte";
  import Sheet from "$lib/Viewer/Sheet.svelte";

  export let page: number = 1;

  function previousPage() {
    page--;
  }

  function nextPage() {
    page++;
  }
</script>

<div class="flex h-full justify-center content-center">
  <Sheet {page}/>
  <SideButton
    classes="top-0 left-0"
    on:click={previousPage}>
    tl
  </SideButton>
  <SideButton classes="top-0 right-0">tr</SideButton>
  <SideButton classes="bottom-0 left-0">bl</SideButton>
  <SideButton classes="bottom-0 right-0">br</SideButton>
  <BottomButton />
</div>
