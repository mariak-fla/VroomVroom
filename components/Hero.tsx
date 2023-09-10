"use client"

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
    const handleScroll = () => {}

    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title dark:text-slate-50">
                    Find the perfect car
                </h1>

                <p className="hero__subtitle dark:text-slate-500">
                    Book or rent a car effortlessly through our booking platform.
                </p>

                <CustomButton
                    title="Browse Catalogue"
                    containerStyles="bg-primary-blue hover:bg-indigo-700 text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain" />
                </div>
                
                <div className="hero__image-overlay" />
            </div>
        </div>
    )
}

export default Hero