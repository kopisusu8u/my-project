import React from 'react';
import Slider from "react-slick";
import Navbar from './componen/navbar.jsx';
import Fotos from './componen/foto.jsx';
import Card from './componen/card.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <Navbar />
      <Fotos />
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold mb-4 text-gray-800'>Makanannya</h1>
        <div className='h-1 w-52 mx-auto bg-gradient-to-r from-black via-slate-700 to-red-900 rounded'></div>
      </div>
      <div className='container mx-auto p-6'>
        <Slider {...settings}>
          <Card
            img="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Roti Bakar"
            desc="Memiliki rasa yang bermacam-macam dengan perpaduan manis gurih dan masam"
          />
          <Card
            img="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Roti Bakar"
            desc="Memiliki rasa yang bermacam-macam dengan perpaduan manis gurih dan masam"
          />
          <Card
            img="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Roti Bakar"
            desc="Memiliki rasa yang bermacam-macam dengan perpaduan manis gurih dan masam"
          />
          <Card
            img="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Roti Bakar"
            desc="Memiliki rasa yang bermacam-macam dengan perpaduan manis gurih dan masam"
          />
          <Card
            img="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Roti Bakar"
            desc="Memiliki rasa yang bermacam-macam dengan perpaduan manis gurih dan masam"
          />
          <Card
            img="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Roti Bakar"
            desc="Memiliki rasa yang bermacam-macam dengan perpaduan manis gurih dan masam"
          />
          <Card
            img="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Roti Bakar"
            desc="Memiliki rasa yang bermacam-macam dengan perpaduan manis gurih dan masam"
          />
          <Card
            img="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Roti Bakar"
            desc="Memiliki rasa yang bermacam-macam dengan perpaduan manis gurih dan masam"
          />
        </Slider>
      </div>

      <div className='text-center m-8'>
        <h1 className='text-4xl font-bold mb-4 text-gray-800'>Minumannya</h1>
        <div className='h-1 w-52 mx-auto bg-gradient-to-r from-black via-slate-700 to-red-900 rounded'></div>
      </div>
      <div className='container mx-auto p-6'>
        <Slider {...settings}>
          <Card
            img="./src/assets/jo.jpg"
            title="Roti Bakar"
            desc="Memiliki rasa yang bermacam-macam dengan perpaduan manis gurih dan masam"
          />
          <Card
            img="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Roti Bakar"
            desc="Memiliki rasa yang bermacam-macam dengan perpaduan manis gurih dan masam"
          />
          <Card
            img="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Roti Bakar"
            desc="Memiliki rasa yang bermacam-macam dengan perpaduan manis gurih dan masam"
          />
          <Card
            img="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            title="Roti Bakar"
            desc="Memiliki rasa yang bermacam-macam dengan perpaduan manis gurih dan masam"
          />
        </Slider>
      </div>
    </>
  );
}
