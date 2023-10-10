import React from 'react'
import PIC from '../../assets/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg'

const index = () => {
    return (
        <div className='flex'>
            <div className="flex flex-col bg-white gap-3 items-left justify-center">
                <div className="flex justify-center h-40 items-center">
                    <img className='w-full h-full object-cover' src={PIC} alt="" />
                </div>
                <div className="flex flex-col items-left justify-center py-2">
                    <div className="flex gap-2 justify-start items-center">
                        <div className="bg-red-600 text-xs p-1 text-white">30% off</div>
                        <p className='text-red-600'>Deal</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                        <div className="">149.00</div>
                        <p className='text-xs'>List Price: $32.99</p>
                    </div>
                    <p className='text-xs'>Melica & Doug Safari Wooden</p>
                </div>

            </div>
        </div>
    )
}

export default index