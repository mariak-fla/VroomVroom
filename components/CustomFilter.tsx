"use client"
import { LuChevronsUpDown } from "react-icons/lu"
import { Listbox, Transition } from "@headlessui/react"
import { updateSearchParams } from "@/utils"
import { CustomFilterProps } from "@/types"
import { Fragment, useState } from "react"
import { useRouter } from "next/navigation"

const CustomFilter = ({ title, options }: CustomFilterProps) => {
    const router = useRouter();
    const [selected, setSelected] = useState(options[0]);

    const handleUpdateParams = (e: { title: string; value: string }) => {
        const newPathName = updateSearchParams(title, e.value.toLowerCase());

        router.push(newPathName, {scroll: false});
    };

    
    return (
        <div className="w-fit">
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e);
                    handleUpdateParams(e);
                }}
            >
                <div className="relative w-fit z-10">
                    <Listbox.Button className="custom-filter__btn">
                        <span className="block truncate text-slate-600 dark:text-slate-400">{selected.title}</span>
                        <LuChevronsUpDown className="text-slate-500" />
                    </Listbox.Button>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="custom-filter__options">
                            {options.map((option) => (
                                <Listbox.Option
                                    key={option.title}
                                    value={option}
                                    className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? "bg-primary-blue text-white" : "text-slate-900 dark:text-slate-100"}`}
                                >
                                    {({ selected }) => (
                                        <span className={`block truncate ${selected ? "font-semibold" : "font-normal"}`}>
                                            {option.title}
                                        </span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default CustomFilter