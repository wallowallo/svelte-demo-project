import type { Invalidator, Subscriber, Unsubscriber } from 'svelte/motion';

export interface TextareaObj {
	idx: number;
	text: string;
}

export interface XCoordinates {
	left: number;
	right: number;
}
export interface YCoordinates {
	bottom: number;
	top: number;
}

export interface CatImageObject {
	id: number;
	src: string;
	url: string;
	liked: boolean;
	description: string;
}

export interface CatImageWithBreedDetailsObject extends CatImageObject {
	breed: {weight: { imperial: string, meteric: string}, id: string, name: string, temperament: string, origin: string, country_codes: string, country_code: string, life_span: string, wikipedia_url: string }[]
}

export interface StoreCatImages {
	subscribe: (
		this: void,
		run: Subscriber<CatImageObject[]>,
		invalidate?: Invalidator<CatImageObject[]> | undefined
	) => Unsubscriber;
	remove: (image: CatImageObject) => void;
	like: (image: CatImageObject) => void;
}
