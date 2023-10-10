import React from 'react'
import LOGO from '../../assets/pngimg.com - amazon_PNG24.png'

const index = () => {
    return (
        <div className='w-full'>
            <footer className="flex flex-col text-white justify-center w-full items-center">
                <div className="w-full bg-[#37475a] text-center py-4 text-xs font-medium">Back To Top</div>
                <div className="flex w-full bg-[#232f3e] justify-between px-8 py-6">
                    <div className="flex flex-col gap-1">
                        <h2 className='font-bold'>Get To Know Us</h2>
                        <p className='text-sm'>Carrier</p>
                        <p className='text-sm'>Blog</p>
                        <p className='text-sm'>About Amazon</p>
                        <p className='text-sm'>Investor Relations</p>
                        <p className='text-sm'>Amazon Devices</p>
                        <p className='text-sm'>Amazon Science</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className='font-bold'>Make Money with Us</h2>
                        <p className='text-sm'>Sell products on Amazon</p>
                        <p className='text-sm'>Sell on Amazon Business</p>
                        <p className='text-sm'>Sell apps on Amazon</p>
                        <p className='text-sm'>Become an Affiliate</p>
                        <p className='text-sm'>Advertise Your Products</p>
                        <p className='text-sm'>Self-Publish with Us</p>
                        <p className='text-sm'>Advertise Your Products</p>
                        <p className='text-sm'>›See More Make Money with Us</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className='font-bold'>Amazon Payment Products</h2>
                        <p className='text-sm'>Amazon Business Card</p>
                        <p className='text-sm'>Shop with Points</p>
                        <p className='text-sm'>Reload Your Balance</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className='font-bold'>Let Us Help You</h2>
                        <p className='text-sm'>Amazon and COVID-19</p>
                        <p className='text-sm'>Your Account</p>
                        <p className='text-sm'>Your Orders</p>
                        <p className='text-sm'>Shipping Rates & Policies</p>
                        <p className='text-sm'>Returns & Replacements</p>
                        <p className='text-sm'>Manage Your Content and Devices</p>
                        <p className='text-sm'>Amazon Assistant</p>
                        <p className='text-sm'>Help</p>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full py-6 gap-8 border border-[#3a4553] bg-[#232f3e]">
                    <div className="flex h-10">
                        <img className='' src={LOGO} />
                    </div>
                    <div className="flex gap-2">
                        <div className="border border-[#3a4553] rounded-md p-2 px-4">English</div>
                        <div className="border border-[#3a4553] rounded-md p-2 px-4">USD - U.S Dollar</div>
                        <div className="border border-[#3a4553] rounded-md p-2 px-4">United State</div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default index