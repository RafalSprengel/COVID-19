import React, { useEffect } from 'react';
import { getDate } from '../lib.js'
const SingleCountryTable = ({
    singleCountryData,
    latest, removeCountry,
    countriesListData,
    currPage, perPage,
    setResultsLength,
    pageMin, pageMax
}) => {

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

    const countryDataTable = singleCountryData.filter((el, index) => {
        let latest5 = (latest) ? Boolean(index > (singleCountryData.length - 6)) : true;
        if ((singleCountryData[singleCountryData.length - 1].Cases === 0 || index > (NumberOfzeroCasesInList - 1)) && latest5) {

            return true
        }
        else return false
    })

    const pagined = countryDataTable.filter((el, index) => (index >= pageMin && index <= pageMax)) //tutaj zmienic 11 na zmienną

    const result = pagined.map((el, index) => {
        let [day, month, year] = getDate(el.Date);
        return (
            <tr key={el.Date}>
                <td >
                    <h4 style={{ display: 'inline' }}> {day}</h4>/
                        <h5 style={{ display: 'inline' }}>{month}/{year}</h5>
                </td>
                <td>
                    {el.Cases}
                </td>
            </tr >
        )
    })

    useEffect(() => {
        setResultsLength(countryDataTable.length)
    }, [countryDataTable.length])

    return (
        <div className='single-country-wrap'>
            <h3 style={{ display: 'inline' }}>{singleCountryData ? singleCountryData[0].Country : null} </h3>
            <input
                type='button'
                value='X'
                className='remove-country'
                onClick={() => removeCountry(singleCountryData[0].Country)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Cases</th>
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>
        </div>)
}

export default SingleCountryTable