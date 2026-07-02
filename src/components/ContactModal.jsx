import {useState} from 'react'


function ContactModal({skillId, onClose}){
    const [mssg, setMssg] = useState("")

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
                <h1 className="text-lg font-semibold mb-4">Enter your message</h1>
                <textarea
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm mb-4 min-h-[100px]"
                    onChange={(e) => setMssg(e.target.value)}
                    placeholder='Enter your message to author'
                    value={mssg}
                />
                <div className="flex gap-3 ">
                    <button 
                        type='button' 
                        onClick={() => {
                            fetch(`http://localhost:3000/api/skills/${skillId}/contact`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                                },
                                body: JSON.stringify({ mssg })
                                })
                            .then(res => res.json())
                            .then(() => {
                            alert('Message sent')
                            onClose()
                         })
                        }}
                        className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm hover:text-blue-600 hover:bg-white hover:border-blue-600 hover:border transition"
                    >
                        Send
                    </button>
                    <button 
                        type='button' 
                        onClick={onClose}
                        className="flex-1 border border-gray-200 py-2 rounded-lg text-sm hover:text-white hover:bg-red-600 hover:border hover:border-red-600"
                    >
                         Cancel
                    </button>
                </div>
            </div>
         </div>
    )
}

export default ContactModal