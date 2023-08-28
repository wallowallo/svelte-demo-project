import type { Invalidator, Subscriber, Unsubscriber } from "svelte/motion";

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
	id: number,
	src: string,
	liked: boolean,
	description: string
}

export interface StoreCatImages {
    subscribe: (this: void, run: Subscriber<{
        id: number;
        src: string;
        liked: boolean;
        description: string;
    }[]>, invalidate?: Invalidator<{
        id: number;
        src: string;
        liked: boolean;
        description: string;
    }[]> | undefined) => Unsubscriber;
    remove: (image: CatImageObject) => void;
    like: (image: CatImageObject, liked: boolean) => void;
}
