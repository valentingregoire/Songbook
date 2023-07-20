<script lang="ts">
  import { ProgressRadial } from "@skeletonlabs/skeleton";
  import Icon from "$lib/Icon.svelte";

  export let value: number = 0;
</script>

{#if value < 100}
  <ProgressRadial {value} stroke="200" width="w-5" />
{:else}
  <Icon name="check-circle" />
{/if}
