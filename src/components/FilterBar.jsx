
const categories = ['All', 'Frontend', 'Backend', 'Design', 'Data']
function FilterBar({onCategoryChange, activeCategory}){

    return(
        <div>
            {categories.map(cat => (
                <button
                    key = {cat}
                    onClick={() => onCategoryChange(cat)}
                    className={`px-3 py-1 rounded-full text-sm ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                    {cat}
                </button>
                ))}
        </div>
        
    )
}

export default FilterBar;