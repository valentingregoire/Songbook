<script lang="ts">
  export let icon: string;
  export let label: string;
  export let optional: boolean = false;
</script>

{#if !optional || (optional && label)}
  <div class="px-1">
    <span>{icon} {label}</span>
  </div>
{/if}
