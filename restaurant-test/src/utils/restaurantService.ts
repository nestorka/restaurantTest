import {API_BASE_URL} from "../config.ts";

export const getRestaurants = async (postcode: string) => {
    const res = await fetch(`${API_BASE_URL}/${postcode}`);
    return res.json();
}