import SearchBar from "./components/SearchBar.tsx";
import {useRestaurants} from "./hooks/useRestaurants.ts";
import RestaurantList from "./components/RestaurantListProps.tsx";
import {useState} from "react";

export default function App() {
    const [searchInput, setSearchInput] = useState('');
    const [postcode, setPostcode] = useState('');

    const {data, isLoading, isError} = useRestaurants(postcode)
    const findRestaurants = () => {
        setPostcode(searchInput.replace(/\s/g, ''));
    }
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Find Restaurants</h1>
                <SearchBar value={searchInput} onChange={setSearchInput} onSearch={findRestaurants}/>
                <div className="mt-8 flex flex-col gap-4">
                    {isLoading && (
                        <div className="flex justify-center items-center mt-16">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"/>
                        </div>
                    )}

                    {isError && (
                        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-center">
                            Something went wrong. Please check the postcode and try again.
                        </div>
                    )}

                    {!isLoading && !isError && !postcode && (
                        <div className="mt-16 text-center text-gray-400">
                            <p className="text-5xl mb-4">🍕</p>
                            <p className="text-lg font-medium">Enter a UK postcode to find restaurants near you</p>
                        </div>
                    )}

                    {!isLoading && !isError && data && (
                        <RestaurantList restaurants={data ?? []} />
                    )}
                </div>
            </div>
        </div>
    )
}