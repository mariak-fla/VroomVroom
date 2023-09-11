import CustomButton from "./CustomButton"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <header className="w-full fixed z-50 backdrop-blur-md dark:bg-white/5 bg-grey/5 border-b dark:border-white/20 border-black/10 shadow-md">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-3">
                <Link href="/" className="flex justify-center items-center">
                    <Image 
                        src="/logo.svg"
                        alt="Vroom Vroom Logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                </Link>

                <CustomButton
                    title="Sign In"
                    btnType="button"
                    containerStyles="rounded-full bg-slate-50 dark:bg-slate-800 min-w-[130px] hover:primary-blue hover:text-white duration-200"
                    textStyles="dark:text-primary-blue-100 text-primary-blue"
                />
            </nav>
        </header>
    )
}

export default Navbar