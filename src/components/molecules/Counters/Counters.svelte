<script>
  import { calculatorStore } from '../../../store/store';

  const { valueOne, valueTwo, sign, summary } = $calculatorStore;
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
