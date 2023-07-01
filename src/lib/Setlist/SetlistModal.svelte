<script lang="ts">
  let dialog: HTMLDialogElement;

  function close() {
    dialog.close();
  }

</script>

<dialog
  bind:this={dialog}
  on:close={close}>

</dialog>