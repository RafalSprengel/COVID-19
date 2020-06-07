import React, { useState } from 'react';
import '../styles/CountriesListResult.css'
import SingleCountryTable from './SingleCountryTable'
import Pagination from './Pagination'

const CountriesListResult = (props) => {
    const [perPage, SetPerPage] = useState(10)
    const [currPage, setCurrPage] = useState(0)
    const [resultsLength, setResultsLength] = useState(0)
    const pageMin = (currPage * perPage) + 1;
    const pageMax = (pageMin + perPage) - 1
    const changeCurrPage = (page) => {
        setCurrPage(page.page)
    }

    if (!props.countriesListData) return null;

    const allCountries = props.countriesListData.map((el, index) => {
        return (
            <SingleCountryTable
                {...props}
                key={index}
                singleCountryData={el}
                perPage={perPage}
                currPage={currPage}
                setResultsLength={setResultsLength}
                pageMin={pageMin}
                pageMax={pageMax}
            />
        )
    })

    return (
        <>
            <div className='countries-list-res-wrap'>
                {allCountries}
            </div>
            <Pagination
                changeCurrPage={changeCurrPage}
                resultsLength={resultsLength}
                currPage={currPage}
                setCurrPage={setCurrPage}
                perPage={perPage}
                pageMin={pageMin}
                pageMax={pageMax}
            />

        </>)
}

export default CountriesListResult;