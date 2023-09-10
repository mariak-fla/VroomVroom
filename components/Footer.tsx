import Image from "next/image"

import { footerLinks } from "@/contants"
import Link from "next/link"
import { LuGithub, LuLinkedin } from "react-icons/lu"

const Footer = () => {
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-slate-100 dark:border-slate-800">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                    <p className="text-xs text-slate-500">Vroom Vroom 2023 <br />
                    All rights reserved &copy;</p>
                </div>

                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
                            <h3 className="font-bold dark:text-slate-300">{link.title}</h3>
                            {link.links.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className="text-slate-500 hover:text-primary-blue duration-200"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-center flex-wrap mt-10 border-t border-slate-100 dark:border-slate-800 sm:px-16 px-6 py-6">
                <div className="text-sm text-slate-600 dark:text-slate-500 flex items-center gap-2">
                    <Link href="https://github.com/mariak-fla" className="text-indigo-700 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 duration-200 drop-shadow-md"><LuGithub /></Link>
                    <Link href="https://www.linkedin.com/in/mariak-fla/" className="text-indigo-700 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 duration-200 drop-shadow-md"><LuLinkedin /></Link>
                    &copy; Maria Almeida
                </div>

                <div className="footer__copyrights-link">
                    <Link href="/" className="text-slate-500">Privacy Policy</Link>
                    <Link href="/" className="text-slate-500">Terms of Use</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer