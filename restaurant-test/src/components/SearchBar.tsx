interface SearchProps {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;

}

const SearchBar = ({value, onChange, onSearch}: SearchProps) => {

    return (
        <div className="flex gap-2">
            <input
                type="text"
                placeholder="Enter a UK postcode..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSearch()}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
                onClick={onSearch}
                className="px-6 py-2 text-white  rounded-lg hover:bg-orange-600 bg-orange-500 transition-colors"
            >
                Search
            </button>
        </div>
    )
}

export default SearchBar