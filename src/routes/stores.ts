import { writable, derived } from 'svelte/store';
import { double, increment, decrement } from './utils/utils.svelte';
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
import type { CatImageObject, StoreCatImages } from '../models/models';

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

export function createCatImageStore(initImages: string[]): StoreCatImages {
	let uid = 0;

	const catImages = initImages.map((src: string) => {
		return {
			id: uid++,
			src,
			liked: false,
			description: 'Hello, you cutie cats!'
		};
	});

	const { subscribe, update } = writable(catImages);

	return {
		subscribe,
		remove: (image: CatImageObject) => {
			update(($catImages) => {console.log($catImages.filter((i) => i !== image)); return $catImages.filter((i) => i !== image)});
		},
		like: (image: CatImageObject, liked: boolean) => {
			update(($catImages: CatImageObject[]) => {
				const found = $catImages.filter(i => i === image);
				console.log(found);
				$catImages[found[0].id].liked = liked;
				return [...$catImages];
			});
		}
	};
};
