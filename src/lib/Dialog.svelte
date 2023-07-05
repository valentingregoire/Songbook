<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";

  export let title: string;
  export let open: boolean = false;
  let dialog: HTMLDialogElement;
  const dispatch = createEventDispatcher();

  onMount(() => {
    dispatch("modalInitialized", { openModal, closeModal });
    if (open) {
      openModal();
    }
  });

  function openModal() {
    open = true;
    dialog.showModal();
  }

  function closeModal() {
    open = false;
    dialog.close();
  }


</script>

<dialog bind:this={dialog} class="modal modal-backdrop">
  <!--  <form method="dialog" class="modal-box w-full h-full">-->
  <!--    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>-->
  <!--    <h3 class="font-bold text-lg">{title}</h3>-->
  <!--  </form>-->
  <h3 class="font-bold text-lg">{title}</h3>
  <slot />
</dialog>