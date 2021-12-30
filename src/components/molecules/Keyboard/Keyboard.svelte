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

{#each keyboard as group, iGroup}
  <div>
    {#each group as buttonValue, iButton}
      {#if !isNaN(buttonValue) || buttonValue === '↺' || buttonValue === '.'}
        <Button color={'text-zinc-200'}>
          {buttonValue}
        </Button>
      {:else if iGroup === 0 && iButton !== 3}
        <Button color={'text-emerald-500'}>
          {buttonValue}
        </Button>
      {:else}
        <Button color={'text-red-400'}>
          {buttonValue}
        </Button>
      {/if}
    {/each}
  </div>
{/each}
