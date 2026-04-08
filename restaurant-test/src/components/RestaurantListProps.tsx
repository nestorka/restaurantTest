import type {Restaurant} from "../types/restaurant.ts";
import RestaurantCard from "./RestaurantCard.tsx";

interface RestaurantListProps {
    restaurants: Restaurant[]
}

const RestaurantList = ({restaurants}: RestaurantListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">            {restaurants.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.name}
                    name={restaurant.name}
                    address={restaurant.address}
                    cuisines={restaurant.cuisines}
                    rating={restaurant.rating}
                />
            )
        )}
        </div>
    )
}

export default RestaurantList