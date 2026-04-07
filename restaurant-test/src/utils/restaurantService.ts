import {API_BASE_URL} from "../config.ts";
import {transformRestaurant} from "./transformRestaurant.ts";

export const getRestaurants = async (postcode: string) => {
    const res = await fetch(`${API_BASE_URL}/${postcode}`);
    if (!res.ok) throw new Error("Failed to fetch restaurants")
    const rawData = await res.json();
    return rawData.restaurants.slice(0, 10).map(transformRestaurant);
}

