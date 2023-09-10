"use client"

import { CarProps } from "@/types"
import CustomButton from "./CustomButton";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { TbSteeringWheel, TbGasStation } from "react-icons/tb"
import { LuCar, LuChevronRight } from "react-icons/lu"
import { useState } from "react";
import { CarDetails } from ".";

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car

    const [isOpen, setIsOpen] = useState(false)

    const carRent = calculateCarRent(city_mpg, year)

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>

            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-center text-[14px] font-semibold">
                    $
                </span>
                {carRent}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image
                    src={generateCarImageUrl(car)}
                    alt="Car model"
                    fill 
                    priority
                    className="object-contain"
                />
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-slate-500">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <TbSteeringWheel size={25} />
                        <p className="text-[14px]">
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <LuCar size={25} />
                        <p className="text-[14px]">
                            {drive.toUpperCase()}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <TbGasStation size={25} />
                        <p className="text-[14px]">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <CustomButton
                        title="View More"
                        containerStyles="w-full py-[15px] rounded-full bg-primary-blue hover:bg-indigo-700 duration-200"
                        textStyles="text-white text-sm leading-[17px] font-bold justify-center g-2"
                        rightIcon={<LuChevronRight size={18} />}
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    )
}

export default CarCard