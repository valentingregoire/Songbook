<script lang="ts">
  export let classes = "";
</script>

<div
  class="flex justify-around justify-items-center items-center content-around rounded-xl shadow-lg m-2 p-4 {classes}"
  on:click>
  <div class="font-bold text-xl mb-2">
    <slot name="header" />
  </div>
  <div class="">
    <slot name="body" />
  </div>
  <div class="">
    <slot name="footer" />
  </div>
</div>