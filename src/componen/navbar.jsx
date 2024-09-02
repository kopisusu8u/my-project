import React, { useState, useEffect } from 'react';
import '../App.css';



function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <>
            <div className={`w-full bg-white flex flex-col items-center shadow-md ${isScrolled ? 'sticky top-0 z-10' : ''}`}>
              <div className="w-full bg-white">
                <div
                  className={`bg-white w-full flex items-center justify-center gap-3 flex-col md:gap-8 p-4 shadow-md transition-all sm:gap-4 sm:flex-row duration-300 ${
                    isScrolled ? 'py-2 border-b border-gray-300' : 'py-4'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src="./src/assets/resto.png"
                      alt="logo"
                      className={`cursor-pointer transition-all duration-300 ${isScrolled ? 'w-12 md:w-16' : 'w-16 md:w-20'}`}
                    />
                    <h1
                      className={`text-gray-800 font-bold transition-all duration-300 ${
                        isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
                      }`}
                    >
                      Tempat Makan
                    </h1>
                  </div>
                  
                  <div className="w-full lg:w-auto flex items-center justify-center lg:justify-end">
                    <div className="relative w-full lg:w-96">
                      <input
                        className="w-full border border-gray-300 rounded-full p-2 pr-10 shadow-md focus:outline-none focus:border-bla hover:border-black transition duration-300 cursor-pointer"
                        type="text"
                        placeholder="Cari Makanan?"
                      />
                      <img
                        src="./src/assets/logoSearch.png"
                        alt="search icon"
                        className="w-6 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer hover:scale-125 transition duration-300"
                      />
                    </div>
                    <div className='ms-3 '>
                        <img 
                        src="/src/assets/tempatSaji.png" 
                        alt="keranjang" 
                        className="w-12 cursor-pointer hover:scale-125 transition duration-300"
                        />
                        <checkout className="text-red-600">
                          1
                        </checkout>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default Navbar