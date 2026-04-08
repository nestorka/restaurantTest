import SearchBar from "./components/SearchBar.tsx";
import {useRestaurants} from "./hooks/useRestaurants.ts";
import RestaurantList from "./components/RestaurantListProps.tsx";
import {useState} from "react";

export default function App() {
    const [searchInput, setSearchInput] = useState('');
    const [postcode, setPostcode] = useState('');

    const {data} = useRestaurants(postcode)
    const findRestaurants = () => {
        setPostcode(searchInput.replace(/\s/g, ''));
    }
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Find Restaurants</h1>
                <SearchBar value={searchInput} onChange={setSearchInput} onSearch={findRestaurants}/>
                <div className="mt-8 flex flex-col gap-4">
                    <RestaurantList restaurants={data ?? []}/>
                </div>
            </div>
        </div>
    )
}