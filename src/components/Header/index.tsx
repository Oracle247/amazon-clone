import React from 'react'
import LOGO from '../../assets/pngimg.com - amazon_PNG24.png'


const index = () => {
    return (
            <div className='w-full text-white'>
            <header className="h-full flex flex-col">
                <div className="flex py-3 bg-[rgb(19,25,33)]">
                    <div className="flex justify-between w-full px-4 items-center h-full gap-4">
                        <div className="flex h-6 bg-slate-400">
                            <img className='h-full' src={LOGO} />
                        </div>
                        <div className="flex flex-col">
                            <p className='text-xs'>Delivers to</p>
                            <p className='font-bold'>Nigeria</p>
                        </div>
                        <div className="flex ">
                            <input className='h-full rounded-lg text-slate-700 py-2 px-4 w-[30rem]' placeholder="Search Amazon" />
                        </div>
                        <div className="flex flex-col">
                            <p className='text-xs'>Hello, sign in</p>
                            <p className='font-bold'>Account & List</p>
                        </div>
                        <div className="flex flex-col">
                            <p className='text-xs'>Returns</p>
                            <p className='font-bold'>& Orders</p>
                        </div>
                        <div className="flex flex-col">
                            <p className='font-bold'>Cart</p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-[#232f3e] py-2  px-2 justify-between items-center w-full">
                    <div className="flex justify-center items-center gap-4">
                        <p className='font-medium'>All</p>
                        <p className='font-medium'>Todays Deal</p>
                        <p className='font-medium'>Customers Service</p>
                        <p className='font-medium'>Registry</p>
                        <p className='font-medium'>Gift Cards</p>
                        <p className='font-medium'>Sell</p>
                    </div>
                    <div className="flex justify-center items-center">
                    <p className='font-medium'>Shop Top Categories</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default index