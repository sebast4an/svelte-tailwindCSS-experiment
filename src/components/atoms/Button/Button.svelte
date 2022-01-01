<script>
  export let color;
  export let handle;
  export let isBig;
</script>

<button
  on:click={handle}
  class="
  p-4 m-2 border-0 rounded-xl bg-black-700 h-14 tablet:h-20
  {color ? color : 'text-zinc-200 '}
  {isBig ? 'w-32 tablet:w-44' : 'w-14 tablet:w-20'}
  "
>
  <slot />
</button>
