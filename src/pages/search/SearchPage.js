import React from "react";
import MainSearchBar from "../../components/MainSearch/MainSearch";
import SildeShow from "../../components/Sildeshow/Sildeshow";

const SearchPage = () => {
    return (
        <>
            <SildeShow/>
            <div>
                <MainSearchBar/>
            </div>
        </>
    );
}

export default SearchPage;