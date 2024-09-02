import React from "react";
import RenderSmoothImage from "./RenderSmoothImage";

export default function Card({ img, title, desc }) {
    const [OnClick, setOnClick] = React.useState(0);

    const handleClick = () => {
        setOnClick(OnClick + 1);
    };

    const deckremenClick = () => {
        if (OnClick > 0) {
            setOnClick(OnClick - 1);
        }
    }

    return (
        <div className="container-wrapper items-center border border-gray-200 flex justify-center align-middle bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-72 md:w-64 lg:w-60 xl:w-56 h-80">
            <div className="relative m-3 h-full w-full flex flex-col justify-between">
                {/* Gambar dari makanannya */}
                <div className='h-40 w-full overflow-hidden rounded-t-lg'>
                    <RenderSmoothImage
                        src={img}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                    />
                </div>

                {/* Judul dari makanannya */}
                <div className="bg-white p-2 text-center font-semibold text-gray-800">
                    {title}
                </div>

                {/* Deskripsi dari makanannya */}
                <div className="bg-white p-2 text-sm text-gray-600">
                    {desc}
                </div>

                {/* Button */}
                <div className="bg-white p-2 text-center font-semibold text-gray-800">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" onClick={handleClick}>
                        Order Now
                    </button>
                    <span className="mx-2 ">
                        {OnClick}
                    </span>
                    <button className="text-2xl px-2" onClick={deckremenClick}>
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}
