import { writable } from 'svelte/store';

export const calculatorStore = writable({
  valueOne: 308,
  valueTwo: 42,
  summary: 12.936,
  sign: 'x',
});

export const calculatorStoreUpdate = (number1, number2) => {
  calculatorStore.update(n => {
    n.valueOne = 1;
    return n;
  });
};
