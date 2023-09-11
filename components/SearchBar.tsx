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


const SearchBar = () => {
    const [manufacturer, setManuFacturer] = useState("");
    const [model, setModel] = useState("");

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufacturer.trim() === "" && model.trim() === "") {
            return alert("Please provide some input");
        }

        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    };

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);
    
        if (model) {
          searchParams.set("model", model);
        } else {
          searchParams.delete("model");
        }
    
        if (manufacturer) {
          searchParams.set("manufacturer", manufacturer);
        } else {
           searchParams.delete("manufacturer");
        }
    
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    
        router.push(newPathname, {scroll: false});
    };
    
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer
                manufacturer={manufacturer}
                setManuFacturer={setManuFacturer}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>

            <div className="searchbar__item">
                <CarFront size={20} className="absolute ml-4 text-slate-500" />
                <input 
                    type="text"
                    name="model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
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