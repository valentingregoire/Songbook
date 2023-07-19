<script lang="ts">
  import { ProgressRadial } from "@skeletonlabs/skeleton";
  import Icon from "$lib/Icon.svelte";

  export let value = 0;
</script>

{#if value < 100}
  <ProgressRadial {value} />
{:else}
  <Icon name="check-circle" />
{/if}
