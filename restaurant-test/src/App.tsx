import SearchBar from "./components/SearchBar.tsx";
import RestaurantCard from "./components/RestaurantCard.tsx";

export default function App() {
    const list = ['greek', 'italian', 'turkish', 'spanish']
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Find Restaurants</h1>
                <SearchBar value={""} onChange={console.log} onSearch={console.log}/>
                <div className="mt-8 flex flex-col gap-4">
                    <RestaurantCard name={'My Restaurant'} cuisines={list} rating={4} address={'30 Home Street, Enschede'}/>
                </div>
            </div>
        </div>
    )
}