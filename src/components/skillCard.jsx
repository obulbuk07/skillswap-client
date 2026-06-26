function SkillCard({name, category, author, canTeach}){
    return(
        <div className="bg-white rounded-xl p-4 border border-gray-200">
            <span className={`text-xs px-2 py-1 rounded-full ${canTeach ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{canTeach? "Могу научить" : "Хочу научится"}</span>
            <p className="font-medium">{name}</p>
            <p className="text-sm">{category}</p>
            <p>{author}</p>
           
        </div>
    )
}
export default SkillCard