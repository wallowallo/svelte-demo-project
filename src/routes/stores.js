// @ts-nocheck
import { writable, derived } from 'svelte/store';
import { double, increment, decrement } from './utils/utils.svelte';
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

export const progress = tweened(0, {
	duration: 400,
	easing: cubicOut
});

const createCount = () => {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update(increment),
		decrement: () => update(decrement),
		reset: () => set(0)
	};
};

export const partyMode = writable(false);

export const count = createCount();

export const doubleIt = derived(count, double);

export const doubleIfParty = derived([partyMode, count], ([$partyMode, $count]) =>
	$partyMode ? double($count) : $count
);
