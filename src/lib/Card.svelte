<div class="rounded-xl shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">
      <slot name="header" />
    </div>
    <div class="text-base">
      <slot name="body" />
    </div>
  </div>
  <div class="px-6 pt-4 pb-2">
    <slot name="footer" />
  </div>
</div>