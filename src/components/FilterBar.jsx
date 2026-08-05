import {Link} from 'react-router-dom'
const categories = ['All', 'Frontend', 'Backend', 'Design', 'Data', "Other"]
const canTeachCategories = ['All', 'Can teach', 'Want to learn']

function FilterBar({onCategoryChange, activeCategory, onCanTeachCategoryChange, activeCanTeachCategory}){
    const token = localStorage.getItem('token')
    return(
        <div className='flex justify-between p-4 flex-col md:flex-row gap-6 md:gap-0'>
            <div className="px-0 flex gap-2 flex-wrap md:px-6 md:gap-4">
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
            <div className='flex md:gap-4 gap-2'>
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
            {token && <Link to="/add" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm">Add Skill</Link> }
            
        </div>
        
        
    )
}

export default FilterBar;