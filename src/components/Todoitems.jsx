import React from 'react'
import tick_icon from '../assets/tick_icon.webp'
import not_tick from '../assets/not_tick.webp'
import delete_icon from '../assets/delete_icon.webp'

const Todoitems = ({ text }) => {
    return (
        <div className='flex items-center my-3 gap-2'>
            <div className='flex flex-1 items-center cursor-pointer'>
                <img src={tick_icon} alt="" className='w-7' />
                <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
            </div>

            <img src={delete_icon} alt="" className='w-4 cursor-pointer' />

        </div>
    )
}

export default Todoitems
