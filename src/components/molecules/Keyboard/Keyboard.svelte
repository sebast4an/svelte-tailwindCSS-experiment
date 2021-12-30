<script>
  import Button from '../../atoms/Button/Button.svelte';

  const keyboard = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['↺', '0', '.', '='],
  ];
</script>

<section class="py-2.5 w-full">
{#each keyboard as group, iGroup}
  <div class="flex justify-evenly">
    {#each group as buttonValue, iButton}
      {#if !isNaN(buttonValue) || buttonValue === '↺' || buttonValue === '.'}
        <Button color={'text-zinc-200'}>
          {buttonValue}
        </Button>
      {:else if iGroup === 0 && iButton !== 3}
        <Button color={'text-green-special'}>
          {buttonValue}
        </Button>
      {:else}
        <Button color={'text-red-special'}>
          {buttonValue}
        </Button>
      {/if}
    {/each}
  </div>
{/each}
</section>