"use client"
import React, { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import { LuSearch } from "react-icons/lu"
import { CarFront } from "lucide-react"
import { useRouter } from "next/navigation"

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
    return (
        <button type="submit" className={`ml-3 z-10 text-slate-600 dark:text-slate-300 ${otherClasses}`}>
            <LuSearch size={20} />
        </button>
    )
}


const SearchBar = ({ setManufacturer, setModel }) => {
    const [searchManufacturer, setSearchManufacturer] = useState("")
    const [searchModel, setSearchModel] = useState("")
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(searchManufacturer === "" && searchModel === "") {
            return alert("Please fill in the search bar")
        }

        setModel(searchModel) 
        setManufacturer(searchManufacturer) 
    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>

            <div className="searchbar__item">
                <CarFront size={20} className="absolute ml-4 text-slate-500" />
                <input 
                    type="text"
                    name="model"
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder="Tiguan"
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    )
}

export default SearchBar