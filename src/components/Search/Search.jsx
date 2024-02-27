import React, { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

const Search = () => {
    const [search, setSearch] = useState();

    const toggle = () => {
        setSearch(true);
    };

    const closeSearch = () => (search === true ? setSearch(false) : null);

    const ref = useOnclickOutside(() => {
        closeSearch();
    });

    const handleSearch = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className="my-auto" ref={ref}>
                <form
                    className={`searchbar ${search ? 'fadeInWidth' : 'fadeOutWidth'}`}
                    onSubmit={handleSearch}
                >
                    {search && (
                        <input
                            ref={ref}
                            className="transition-opacity duration-200 opacity-0"
                            type="text"
                            name=""
                            placeholder="Search..."
                        />
                    )}
                    {!search && (
                        <div className="transition-all duration-200 opacity-100">
                            <button
                                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200 text-base"
                                id="basic-addon2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                </form>

            </div>
        </>
    );
};

export default Search;
