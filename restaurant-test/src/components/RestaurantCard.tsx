interface RestaurantCardProps {
    name: string,
    cuisines: string[],
    rating: number,
    address: string
}

const RestaurantCard = ({name, cuisines, rating, address}: RestaurantCardProps) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow border border-gray-100">
            <div className="flex justify-between items-start">
                <h2 className="text-lg font-bold text-gray-800">{name}</h2>
                <span
                    className="flex items-center gap-1 bg-orange-100 text-orange-600 font-semibold text-sm px-2 py-1 rounded-full">
            ★ {rating}
        </span>
            </div>
            <p className="text-gray-500 text-sm mt-1">{address}</p>
            <div className="flex flex-wrap gap-2 mt-3">
                {cuisines.map((cuisine) => (
                    <span key={cuisine} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                {cuisine}
            </span>
                ))}
            </div>
        </div>
    )
}
export default RestaurantCard