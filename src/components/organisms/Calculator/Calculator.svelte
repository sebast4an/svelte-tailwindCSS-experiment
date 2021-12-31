<script>
  import Counters from '../../molecules/Counters/Counters.svelte';
  import Keyboard from '../../molecules/Keyboard/Keyboard.svelte';

  let valueOne = 308;
  let valueTwo = 42;
  let summary = 12.936;
  let sign = 'x';
</script>

<Counters>
  <span slot="value1">{valueOne}</span>
  <span slot="char">{sign}</span>
  <span slot="value2">{valueTwo}</span>
  <span slot="summary">{summary}</span>
</Counters>

<div class="flex justify-center rounded-t-3xl bg-black-800 w-full max-h-128 min-h-max">
  <Keyboard />
</div>
