import {useState} from 'react'
import ContactModal from './ContactModal'
function SkillCard({id, name, category, author, canTeach, onDelete, isOwner}){
    const[showModal, setShowModal] = useState(false)

    return(
        <div className="min-h-[160px] relative flex flex-col bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <span className={`self-start inline-block text-xs px-2 py-1 rounded-full ${canTeach ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{canTeach? "Can Teach" : "Want to learn"}</span>
            <p className="font-medium mt-2 text-gray-900">{name}</p>
            <p className="text-sm text-gray-500 mb-3">{category}</p>
            <div className="flex items-center gap-2 mt-auto">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs text-blue-600 font-medium">
                    {author[0].toUpperCase()}
                </div>
                <span className="text-xs text-gray-400">{author}</span>
                <button className='absolute bottom-5 right-5 hover:underline transition duration-300' type="button" onClick={() => setShowModal(true) } >Contact</button>
                {isOwner &&
                    <button onClick={onDelete} className="text-xs absolute top-5 right-5 text-red-400 hover:text-red-600">
                        Delete
                    </button>
                }
                
            </div>
            {showModal && <ContactModal
                skillId={id}
                onClose={() => setShowModal(false)}
            />}
           
        </div>
    )
}
export default SkillCard