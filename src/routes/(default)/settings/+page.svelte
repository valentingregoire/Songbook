<script lang="ts">
  import { settingsStore } from "$stores";
  import type { Settings } from "$models/settings.model";

  let settings: Settings;
  settingsStore.subscribe((value) => (settings = value));
</script>

Settings: {JSON.stringify(settings)} <br />
1: {settings.viewer.sideButtonWidth} | {settings.viewer.bottomButtonHeight}
