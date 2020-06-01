import React, { useEffect, useState } from 'react';
import '../styles/Header.css'

const Datalist = ({ currentCountryName, countriesSuggList, id }) => {
    if ((countriesSuggList === '') || (currentCountryName === '')) return false;
    let countries = countriesSuggList.filter(el => new RegExp('\\b' + currentCountryName + '(.*)', 'i').test(el.Country))

    const options = countries.map((el, index) => {
        if (true) {
            return (
                <option key={el.Slug}>
                    {el.Country}
                </option>
            )
        } else return false;
    })

    return (
        <datalist id={id}>
            {options}
        </datalist>
    )
}

const SearchBar = ({ handleSubmit, handleInput, handleShowLatest, currentCountryName, latest, errors }) => {
    const [countriesSuggList, setCountriesSuggList] = useState('')

    useEffect(() => {
        /* const proxyurl = "https://cors-anywhere.herokuapp.com/"; */
        const API = `https://api.covid19api.com/countries`;
        fetch(API)
            .then(response => { if (response.ok) return response; else throw new Error('There was a problem retrieving the list of countries') })
            .then(response => response.json())
            .then(data => setCountriesSuggList(data))
            .catch(error => console.warn(error))
    }, [])
    //console.log('currentCountryName to : ' + currentCountryName)
    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={handleSubmit}>
                <label htmlFor='form>'>Please enter the Country</label>
                <br></br>
                < input
                    type='text'
                    autoComplete='off'
                    id='searchCountry'
                    name="myCountry"
                    placeholder='Country...'
                    onChange={handleInput}
                    value={currentCountryName}
                    list="countriesSuggList"
                ></input>
                <Datalist
                    countriesSuggList={countriesSuggList}
                    id='countriesSuggList'
                    currentCountryName={currentCountryName}
                />
                <button type='submit'> <span className='magnifier' aria-label=' search' role='img' >&#128269;</span> Find</button>
                {errors &&
                    <div id='errors'> {errors}</div>
                }
                <hr></hr>
                <input
                    type="checkbox"
                    id="latest"
                    value={latest}
                    onChange={handleShowLatest}
                    checked={latest}
                />
                <label htmlFor="latest">Show only the last 5 days</label>
            </form>
        </>

    )
}

export default SearchBar;