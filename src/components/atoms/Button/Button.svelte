<script>
  export let color;
  export let handle;
</script>

<button
  on:click={handle}
  class="
  p-4 m-2 border-0 rounded-xl bg-black-700 text-zinc-200 
  {color}
  w-14 h-14
  tablet:w-20 tablet:h-20
  "
>
  <slot />
</button>
