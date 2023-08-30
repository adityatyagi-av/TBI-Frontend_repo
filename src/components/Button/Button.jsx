import React from 'react'
function Button({ content, onClick }) {
    return (
        <button onClick={onClick} className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 px-6 py-4 rounded-lg focus:outline-none focus:shadow-outline">
            {content}
        </button>
    )
}

export default Button
