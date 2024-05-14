import { writable } from "svelte/store";
import type { Session } from "$lib/types/hotel-types";

export const currentSession = writable<Session>();
export const subTitle = writable<string>();
