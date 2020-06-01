import React from 'react';
import { getDate } from '../lib.js'
import '../styles/CountriesListResult.css'

const SingleCountry = ({ singleCountryData, latest, removeCountry, countriesListData }) => {
    if (!singleCountryData) return null
    let NumberOfzeroCasesInList = 9999

    for (let i in countriesListData) {
        let NumberOfzeroCasesInCountry = 0;
        for (let x in countriesListData[i]) {
            if (countriesListData[i][x].Cases === 0) NumberOfzeroCasesInCountry++
        }
        if (NumberOfzeroCasesInCountry < NumberOfzeroCasesInList) {
            NumberOfzeroCasesInList = NumberOfzeroCasesInCountry
        }
    }

    //console.log('NumberOfzeroCasesInList to: ' + NumberOfzeroCasesInList)
    const singleCountryDates = singleCountryData.map((el, index) => {
        let latest5 = (latest) ? Boolean(index > (singleCountryData.length - 6)) : true;
        let [day, month, year] = getDate(el.Date);

        if ((singleCountryData[singleCountryData.length - 1].Cases === 0 || index > (NumberOfzeroCasesInList - 1)) && latest5)
            return (
                <td key={el.Date}>
                    <h4 style={{ display: 'inline' }}> {day}</h4>/
                    <h5 style={{ display: 'inline' }}>{month}/{year}</h5>
                </td>
            );
        else
            return null;
    })

    const singleCountryCase = singleCountryData.map((el, index) => {
        let condition = (latest) ? Boolean(index > (singleCountryData.length - 6)) : true;
        if (index > (NumberOfzeroCasesInList - 1) && condition) return (
            <td key={el.Date}>
                {el.Cases}
            </td>
        ); else return null
    })

    return (<div id='single-country-wrap'>
        <h3 style={{ display: 'inline' }}>{singleCountryData ? singleCountryData[0].Country : null} </h3>
        <input
            type='button'
            value='X'
            id='remove-country'
            onClick={() => removeCountry(singleCountryData[0].Country)}
        />
        <table>
            <tbody>
                <tr>
                    <th>Date</th>{singleCountryDates}
                </tr>
                <tr>
                    <th>Cases confirmed</th>{singleCountryCase}
                </tr>
            </tbody>
        </table>

    </div>)
}

const CountriesListResult = ({ latest, currentCountryName, countriesListData, removeCountry }) => {
    if (!countriesListData) return null;

    const allCountries = countriesListData.map((el, index) => {
        return (
            <SingleCountry
                key={index}
                singleCountryData={el}
                latest={latest}
                currentCountryName={currentCountryName}
                removeCountry={removeCountry}
                countriesListData={countriesListData}
            />
        )
    })

    return (<>{allCountries}</>)
}

export default CountriesListResult;