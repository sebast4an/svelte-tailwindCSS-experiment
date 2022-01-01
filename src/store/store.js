import { writable } from 'svelte/store';

export const calculatorStore = writable({
  valueOne: null,
  valueTwo: null,
  mark: null,
  summary: null,
});

export const calculatorStoreUpdate = (number1, mark, number2) => {
  calculatorStore.update(n => {
    n.valueOne = number1;
    n.mark = mark;
    n.valueTwo = number2;
    return n;
  });
};

export const calculatorStoreSetSummary = summary => {
  calculatorStore.update(n => {
    n.summary = summary;
    return n;
  });
};

export const calculatorStoreReset = () => {
  calculatorStore.set({
    valueOne: null,
    valueTwo: null,
    mark: null,
    summary: null,
  });
};
