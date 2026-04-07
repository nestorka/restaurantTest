import type {Restaurant} from "../types/restaurant.ts";

export const transformRestaurant = (raw: any): Restaurant => ({
    name: raw.name,
    address: raw.address.firstLine,
    cuisines: raw.cuisines.map(((c: any) => c.name)),
    rating: raw.rating.starRating
})