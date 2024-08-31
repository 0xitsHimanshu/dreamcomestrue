import React from 'react'
import video from '../assets/video.mp4'
import bgImg from '../assets/bg-image1.png';
import "../utils/hero-section.css"

const Homepage = () => {

    return (
        <div className='h-screen sm:h-[50%]'>
            {/* Hero sections */}
            <section className='hero-section h-screen  relative'>
                {/* <video src={video} className='absolute top-0 left-0 w-full h-full object-cover' autoPlay muted loop playsInline/> */}

                {/* <img src={bgImg} className='absolute top-0 left-0 w-full h-full object-cover '  /> */}
                <div className="relative z-10 container mx-auto h-full flex flex-col justify-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif">Explore the world with exciting people</h1>
                    <p className="mt-4 text-base font-thin md:text-xl">We help people find co-travellers and structure their travel plans.</p>
                </div>

                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6befbf50e63365c71e47352a789a1e201bc230fd5b3141079ec2afbbdaaa3316?placeholderIfAbsent=true&apiKey=25ce0e8c4ce54353824bfcfe4962d633"
                    alt=""
                    className="relative lg:bottom-16 bottom-10 object-cover z-10  w-full  aspect-[9.09] max-md:max-w-full"
                />
            </section>
            <section className="w-full">
                
            </section>
        </div>
    )
}

export default Homepage