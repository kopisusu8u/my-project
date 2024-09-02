import React, { useState , useEffect} from "react";
import '../App.css';

function BtnValid() {
    const [handleClick, setHandleClick] = useState(0);
    const plusClick = () => {
        setHandleClick(handleClick + 1);
    };
    const deckrementClick = () => {
        setHandleClick(handleClick - 1);
    };
    
    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
                <div className="bg-white p-10 shadow-lg rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300" onClick={plusClick}>
                    Take Away
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300" onClick={deckrementClick}>
                        Reservasi
                    </button>
                </div>
                <h2 className="text-2xl font-bold mt-8">Total Click: {handleClick}</h2>
                </div>
            </div>
        </>
    )
}


export default BtnValid