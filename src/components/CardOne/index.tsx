import React from 'react'
import PIC from '../../assets/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg'

const index = () => {
    return (
        <div className='flex'>
            <div className="flex flex-col bg-white px-4 py-4 gap-3 items-center justify-center">
                <h2 className='font-bold'>Health & Personal Care</h2>
                <div className="flex h-[17rem] justify-centeritems-center">
                    <img className='w-full h-full object-cover' src={PIC} alt="" />
                </div>
                <p className='text-xs text-blue-500 text-left w-full'>shop Now</p>
            </div>
        </div>
    )
}

export default index