<div class="p-10 w-100 flex flex-col items-end">
  <h3>
    <slot name="value1" />
    <span class="text-red-600 font-bold">
      <slot name="char" />
    </span>
    <slot name="value2" />
  </h3>

  <h2 class="text-4xl font-semibold my-2">
    <slot name="summary" />
  </h2>
</div>
