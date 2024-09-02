import RenderSmoothImage from './RenderSmoothImage';
import '../App.css';

function Fotos() {
    return (
        <div className="container-wrapper relative align-middle justify-center flex flex-col items-center md:py-2  sm:px-6 md:px-base lg:px-0 xl:px-8 2xl:px-16 lg:py-8 xl:py-16">
            <div className=" flex justify-center ">
                <RenderSmoothImage
                    src="./src/assets/jo.jpg"
                    alt="pe"
                    className="bg-center opacity-60 rounded-lg object-cover shadow-md border border-gray-300 mb-6 w-screen sm:w-3/4 md:w-base lg:max-w-7xl xl:max-w-full 2xl:w-2/4"
                />
            </div>
            <div className="mx-auto sm:px-6 md:px-base lg:px-8 xl:px-16 p-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className='bg-white rounded-lg p-4 bg-opacity-5'>
                    <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-4">Selamat Datang di Tempatku</h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-900 flex flex-col">
                        Tempatku adalah sebuah destinasi kuliner yang menggabungkan cita rasa lezat dan tentunya suasana nyaman.
                    </p>
                </div>
            </div>    
        </div>
    );
}

export default Fotos;
