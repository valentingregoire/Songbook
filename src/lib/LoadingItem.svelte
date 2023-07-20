<script lang="ts">
  import { ProgressRadial } from "@skeletonlabs/skeleton";
  import Icon from "$lib/Icon.svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  export let value: number | boolean;

  const progress = tweened(0, {
    duration: 100,
    easing: cubicOut
  });

  $: intermediate = typeof value === "boolean";

  $: {
    progress.set(intermediate ? 0 : value);
  }
</script>

{#if value < 100}
  <ProgressRadial value={intermediate ? undefined : $progress}
                  width="w-5"
                  stroke="200"
                  meter="stroke-primary-400"
                  track="stroke-primary-200" />
{:else}
  <Icon name="check-circle" iconClass="badge-icon text-success-600" />
{/if}
