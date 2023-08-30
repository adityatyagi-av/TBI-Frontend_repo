import React from 'react'
import './Button.css'
function Button({ content, onClick }) {
    return (
        <button onClick={onClick} className='button2'>
            {content}
        </button>
    )
}

export default Button
