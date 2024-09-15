import React from 'react'
import ContactUs from '../components/ContactUs'
import HeroSection from '../components/HeroSection';
import background from '../assets/video.mp4';
import FooterImage from '../components/stripeFooter';

const AboutUspage = () => {

    const heading = "We are Dream Comes True Travels World class travel agency";
    const paragraph = "Exprience the best travel with us";


    return (
        <div className="max-sm:h-[70%]">             
            <section className="relative bg-cover bg-center">
            
                <HeroSection background={background} heading={heading} paragraph={paragraph} height={"h-75%99999999999999999999999999ok, /=p"}/>

                <div className="relative w-full h-60 z-20">
                    <div className="w-full h-full absolute left-0 bg-[#1e1e1e] z-10">q
                    
                    </div>
                </div>
                <ContactUs />
            </section>

            <section className="w-full h-full bg-white">
            </section>
        </div>
    )
}

export default AboutUspage;
/*
    ABOUT US
Dream Comes True Travels

“Travel is the main thing you purchase that makes you more extravagant”. We, at ‘Dream Comes True Travels’, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.

We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental travel administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary travel encounters.

We offer the best limits on our top-rated visit bundles to clients who pick our viable administrations over and over. How about we remind you indeed that we don’t expect to be your visit and travel specialists; we endeavor to be your vacation accomplices until the end of time.

*/