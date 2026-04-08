import type {Restaurant} from "../types/restaurant.ts";
import {NOISE_TAGS} from "../config.ts";

export const transformRestaurant = (raw: any): Restaurant => ({
    name: raw.name,
    address: raw.address.firstLine,
    cuisines: raw.cuisines.map((c: any) => c.name)
        .filter((name: string) => !NOISE_TAGS.has(name)),
    rating: raw.rating.starRating
})