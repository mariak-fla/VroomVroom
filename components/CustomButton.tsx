"use client"

import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({ title, containerStyles, btnType, handleClick, textStyles, rightIcon, isDisabled }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex items-center ${textStyles}`}>
                {title}{rightIcon}
            </span>
        </button>
    )
}

export default CustomButton