import React from 'react'
import tick from '../assets/tick/webp'
import not_tick from '../assets/not_tick.webp'
import delete_icon from '../assets/delete_icon.webp'

const Todoitems = () => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div>
                <img src={tick} alt="" />
                <p>Learn Coding</p>
            </div>
        </div>
    )
}

export default Todoitems
