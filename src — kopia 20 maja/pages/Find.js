import React from 'react';
import SearchBar from '../components/SearchBar'
import CountriesListResult from '../components/CountriesListResult'

const Find = (props) => {
    return (
        <>
            <SearchBar {...props} />
            <CountriesListResult {...props} countriesListData={props.countriesListData} />
        </>
    )
}

export default Find;