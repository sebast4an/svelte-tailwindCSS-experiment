<script>
  import Button from '../../atoms/Button/Button.svelte';
  // import { calculatorStore } from '../../../store/store';

  const keyboard = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['↺', '0', '.', '='],
  ];

  let clickCounter = 0;
  let valueOne;
  let sign;
  let valueTwo;

  const handleClick = e => {
    const whichButton = e.target.innerHTML;

    clickCounter += 1;
    console.log(clickCounter);

    if (isNaN(whichButton)) {
      if (clickCounter === 2) {
        sign = whichButton;
      }
    } else {
      switch (clickCounter) {
        case 1:
          valueOne = whichButton;
          break;
        case 3:
          valueTwo = whichButton;
          break;
      }
    }
    console.log(valueOne, sign, valueTwo);
  };
</script>

<section class="py-2.5 w-full">
  {#each keyboard as group, iGroup}
    <div class="flex justify-evenly">
      {#each group as buttonValue, iButton}
        {#if !isNaN(buttonValue) || buttonValue === '↺' || buttonValue === '.'}
          <Button handle={handleClick} color={'text-zinc-200'}>
            {buttonValue}
          </Button>
        {:else if iGroup === 0 && iButton !== 3}
          <Button handle={handleClick} color={'text-green-special'}>
            {buttonValue}
          </Button>
        {:else}
          <Button handle={handleClick} color={'text-red-special'}>
            {buttonValue}
          </Button>
        {/if}
      {/each}
    </div>
  {/each}
</section>
