import React from "react";
import Header from "./components/Header";
import CardOne from "./components/CardOne"
import CardTwo from "./components/CardTwo"
import Footer from "./components/Footer"


import PIC from './assets/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg'


function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#e3e6e6]">
      <Header />
      <div className="w-[95%]">
        <div className="flex bg-blue-400 h-[60vh] relative z-10">
          <div className="flex bg-slate-200 h-14 w-full absolute bottom-0 right-0"></div>
        </div>

        <main className="flex flex-col -mt-60 z-20 relative justify-center items-center gap-4 px-4">
          <div className="bg-[#f5f6f6] text-xs w-full p-2 text-center">You are on amazon.com. You can also shop on Amazon Turkey for millions of products with fast local delivery. Click here to go to amazon.com.tr  </div>
          <div className="grid grid-cols-4 gap-4">
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
          </div>

          <div className="flex flex-col gap-3 bg-white p-4">
            <h2 className="font-bold">Top Pics for International</h2>
            <div className="flex justify-center items-center gap-4">
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col p-4 gap-4 bg-white ">
            <div className="flex items-center gap-4">
              <h2 className="font-bold">Deals Under $25</h2>
              <p className="text-xs">See More</p>
            </div>
            <div className="flex  justify-center items-center gap-4">
              <CardTwo />
              <CardTwo />
              <CardTwo />
              <CardTwo />
              <CardTwo />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
          </div>

          <div className="flex flex-col p-4 gap-4 bg-white ">
            <div className="flex items-center gap-4">
              <h2 className="font-bold">Exiting Deals</h2>
              <p className="text-xs">See More</p>
            </div>
            <div className="flex  justify-center items-center gap-4">
              <CardTwo />
              <CardTwo />
              <CardTwo />
              <CardTwo />
              <CardTwo />
            </div>
          </div>

          <div className="flex flex-col gap-3 bg-white p-4">
            <h2 className="font-bold">International Top Sellers</h2>
            <div className="flex justify-center items-center gap-4">
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
          </div>

          <div className="flex flex-col gap-3 bg-white p-4">
            <h2 className="font-bold">Popular Items This Season</h2>
            <div className="flex justify-center items-center gap-4">
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 bg-white p-4">
            <h2 className="font-bold">New International Custormers Purchased</h2>
            <div className="flex justify-center items-center gap-4">
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <CardOne />
            <CardOne />
            <CardOne />
            <CardOne />
          </div>

          <div className="flex flex-col gap-3 bg-white p-4">
            <h2 className="font-bold">Home Decor under $20</h2>
            <div className="flex justify-center items-center gap-4">
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
              <div className="flex">
                <img className='w-[70%] h-full object-cover' src={PIC} alt="" />
              </div>
            </div>
          </div>
        </main>

        <Footer />


      </div>
    </div>
  );
}

export default App;
