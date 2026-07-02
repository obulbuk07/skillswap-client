
const categories = ['All', 'Frontend', 'Backend', 'Design', 'Data', "Other"]
const canTeachCategories = ['All', 'Can teach', 'Want to learn']
function FilterBar({onCategoryChange, activeCategory, onCanTeachCategoryChange, activeCanTeachCategory}){

    return(
        <div>
            <div className="px-6 py-3">
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
            <div>
                {canTeachCategories.map(canTeachcat =>( 
                    <button
                    key={canTeachcat}
                    onClick={() => onCanTeachCategoryChange(canTeachcat)}
                    className={`px-3 py-1 rounded-full text-sm ${activeCanTeachCategory === canTeachcat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                        {canTeachcat}
                    </button>
                ))}
            </div>
        </div>
        
        
    )
}

export default FilterBar;