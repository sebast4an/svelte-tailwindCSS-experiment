<script>
  let valueOne = 308;
  let valueTwo = 42;
  let summary = 12.936;
  let sign = 'x'

  const topButtons = ['AC', '+/-', '%', '/'];
</script>

<div class="p-10 w-100 flex flex-col items-end">
  <h3>
    {valueOne} 
    <span class="text-red-600 font-bold">
        {sign}
    </span>
    {valueTwo}
  </h3>

  <h2 class="text-4xl font-semibold my-2">
    {summary}
  </h2>
</div>

<div class="rounded-t-3xl bg-zinc-900">
  <section class="flex pt-5">
    {#each topButtons as button}
      <button class="p-4 m-1 border-0 rounded-xl w-14 h-14 bg-zinc-800 text-emerald-500">
        {button}
      </button>
    {/each}
  </section>
</div>
