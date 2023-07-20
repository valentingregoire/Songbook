<script lang="ts">
  import { ProgressRadial } from "@skeletonlabs/skeleton";
  import Icon from "$lib/Icon.svelte";

  export let value: number | boolean;

  $: intermediate = typeof value === "boolean";
</script>

{#if value < 100}
  <ProgressRadial value={intermediate ? undefined : value} stroke="200" width="w-5" meter="stroke-primary-400" track="stroke-primary-200" />
{:else}
  <Icon name="check-circle" iconClass="badge-icon text-success-600" />
{/if}
