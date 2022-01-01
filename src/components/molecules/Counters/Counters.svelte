<script>
  import { fade, slide } from 'svelte/transition';
  import { calculatorStore, calculatorStoreSetSummary } from '../../../store/store';

  $: if ($calculatorStore.valueOne && $calculatorStore.mark && $calculatorStore.valueTwo) {
    let { valueOne, mark, valueTwo } = $calculatorStore;

    valueOne = Number(valueOne);
    valueTwo = Number(valueTwo);

    switch (mark) {
      case '+':
        calculatorStoreSetSummary(valueOne + valueTwo);
        break;
      case '-':
        calculatorStoreSetSummary(valueOne - valueTwo);
        break;
      case 'x':
        calculatorStoreSetSummary(valueOne * valueTwo);
        break;
      case '/':
        calculatorStoreSetSummary(valueOne / valueTwo);
        break;
      case '%':
        calculatorStoreSetSummary((valueOne / 100) * valueTwo);
        break;
    }
  }
</script>

<div class="p-10 w-100 flex flex-col items-end">
  <h3>
    {#if $calculatorStore.valueOne}
      <span transition:fade>
        {$calculatorStore.valueOne}
      </span>
    {:else if !$calculatorStore.valueOne && !$calculatorStore.mark && !$calculatorStore.valueTwo}
      Select first value
    {/if}
    {#if $calculatorStore.valueOne && $calculatorStore.mark}
      <span transition:fade class="text-red-600 font-bold">
        {$calculatorStore.mark}
      </span>
    {/if}
    {#if $calculatorStore.valueOne && $calculatorStore.mark && $calculatorStore.valueTwo}
      <span transition:fade>
        {$calculatorStore.valueTwo}
      </span>
    {/if}
  </h3>

  <h2 class="text-4xl font-semibold my-2 min-h-[40px]">
    {#if $calculatorStore.summary}
      <span transition:fade>
        {$calculatorStore.summary}
      </span>
    {/if}
  </h2>
</div>
