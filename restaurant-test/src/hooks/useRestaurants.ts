import {useQuery} from "@tanstack/react-query";
import {getRestaurants} from "../utils/restaurantService.ts";

export const useRestaurants = (postcode: string) => {
    return useQuery({
        queryKey: ['restaurants', postcode],
        queryFn: () => getRestaurants(postcode)
    })
}