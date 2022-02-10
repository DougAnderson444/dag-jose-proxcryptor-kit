import { writable } from 'svelte/store';

export const rootCID = writable(null);
export const ipfsNode = writable(null);
export const CID = writable(null);

export const contacts = writable([]);
