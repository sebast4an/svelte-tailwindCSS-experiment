<script>
  import Keyboard from '../../molecules/Keyboard/Keyboard.svelte';

  let valueOne = 308;
  let valueTwo = 42;
  let summary = 12.936;
  let sign = 'x';
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

<div class="flex justify-center rounded-t-3xl bg-black-800 w-full max-h-128 min-h-max">
  <Keyboard />
</div>
