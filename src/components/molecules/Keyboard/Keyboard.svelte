<script>
  import Button from '../../atoms/Button/Button.svelte';
  import { onMount } from 'svelte';
  import { calculatorStore, calculatorStoreUpdate, calculatorStoreReset } from '../../../store/store';

  let givenNumber;

  const keyboard = [
    ['AC', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  onMount(() => {
    givenNumber = 1;
  });

  let valueOne;
  let mark;
  let valueTwo;

  const handleClick = e => {
    const whichButton = e.target.innerHTML;

    if (whichButton === 'AC') {
      givenNumber = 1;
      valueOne = null;
      mark = null;
      valueTwo = null;

      calculatorStoreReset();
      console.log($calculatorStore);
    } else {
      if ((givenNumber === 1 && !isNaN(whichButton)) || (givenNumber === 1 && whichButton === '.')) {
        valueOne ? (valueOne = valueOne += whichButton) : (valueOne = whichButton);
      } else if (isNaN(whichButton) && whichButton !== '.') {
        givenNumber = 2;
        mark = whichButton;
      } else if ((givenNumber === 2 && !isNaN(whichButton)) || (givenNumber === 2 && whichButton === '.')) {
        valueTwo ? (valueTwo = valueTwo += whichButton) : (valueTwo = whichButton);
      }
      calculatorStoreUpdate(valueOne, mark, valueTwo);
    }

    console.log(valueOne, mark, valueTwo);
  };
</script>

<section class="py-2.5 w-full">
  {#each keyboard as group, iGroup}
    <div class="flex justify-center">
      {#each group as buttonValue, iButton}
        {#if !isNaN(buttonValue) || buttonValue === '.'}
          {#if buttonValue === '0'}
            <Button handle={handleClick} color={'text-zinc-200'} isBig={true}>
              {buttonValue}
            </Button>
          {:else}
            <Button handle={handleClick} color={'text-zinc-200'} isBig={false}>
              {buttonValue}
            </Button>
          {/if}
        {:else if iGroup === 0 && iButton !== 3}
          {#if buttonValue === 'AC'}
            <Button handle={handleClick} color={'text-green-special'} isBig={true}>
              {buttonValue}
            </Button>
          {:else}
            <Button handle={handleClick} color={'text-green-special'} isBig={false}>
              {buttonValue}
            </Button>
          {/if}
        {:else}
          <Button handle={handleClick} color={'text-red-special'} isBig={false}>
            {buttonValue}
          </Button>
        {/if}
      {/each}
    </div>
  {/each}
</section>
