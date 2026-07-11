import {Link} from 'react-router-dom'
const categories = ['All', 'Frontend', 'Backend', 'Design', 'Data', "Other"]
const canTeachCategories = ['All', 'Can teach', 'Want to learn']

function FilterBar({onCategoryChange, activeCategory, onCanTeachCategoryChange, activeCanTeachCategory}){
    const token = localStorage.getItem('token')
    return(
        <div className='flex justify-between p-4'>
            <div className="px-6 flex gap-4">
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
            <div className='flex gap-4'>
                {canTeachCategories.map(canTeachcat =>( 
                    <button
                    key={canTeachcat}
                    onClick={() => onCanTeachCategoryChange(canTeachcat)}
                    className={`px-3 py-1 rounded-full text-sm ${activeCanTeachCategory === canTeachcat ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                        {canTeachcat}
                    </button>
                ))}
            </div>
            {token && <Link to="/add" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Add Skill</Link> }
            
        </div>
        
        
    )
}

export default FilterBar;