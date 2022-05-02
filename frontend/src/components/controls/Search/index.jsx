import React, { useState } from 'react';

const SearchBar = ({ history }) => {

    const [keyword, setKeyword] = useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();

        if (keyword.trim()) {

            history.push(`/products/${keyword}`);
        }
        else {
            history.push("/products");
        }
    }

    return (
        <>
            <form className='search-bar' onSubmit={onSearchSubmit}>

                <input
                    type="text"
                    placeholder="search here..."
                    className='form-control'
                    onChange={(e) => setKeyword(e.target.value)} />

                <input
                    type="submit"
                    value="Search"
                    className='btn btn-primary' />

            </form>
        </>
    )
}

export default SearchBar;