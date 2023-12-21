<script lang="ts">
  import { ProgressRadial } from "@skeletonlabs/skeleton";
  import Icon from "$lib/Icon.svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { tick } from "svelte";

  export let value: number | undefined = undefined;

  const progress = tweened(0, {
    duration: 10,
    easing: cubicOut,
  });

  $: if (value) {
    (async () => {
      await tick();
      await progress.set(value);
    })();
  }
</script>

<div>
  {#if $progress === 100}
    <div class="" transition:fade>
      <Icon name="check-circle" iconClass="badge-icon text-success-500" />
    </div>
  {:else}
    <div>
      <ProgressRadial
        value={value === undefined ? undefined : $progress}
        width="w-4"
        stroke={200}
        meter="stroke-primary-500"
        track="stroke-primary-300"
      />
    </div>
  {/if}
</div>
