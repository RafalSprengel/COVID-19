import React from 'react';
import { getDate } from '../lib.js'
const SingleCountryTable = ({ singleCountryData, latest, removeCountry, countriesListData }) => {
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
    const CountryDataTable = () => {
        //const scm = singleCountryData.filter((el, index) => (index < 20));
        const countryDataTable = singleCountryData.map((el, index) => {
            let latest5 = (latest) ? Boolean(index > (singleCountryData.length - 6)) : true;
            let [day, month, year] = getDate(el.Date);
            if ((singleCountryData[singleCountryData.length - 1].Cases === 0 || index > (NumberOfzeroCasesInList - 1)) && latest5 ) {

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
            }
            else return null
        })
        
        return (
            countryDataTable
        )
    }


    return (
        <div className='single-country-wrap'>
            <h3 style={{ display: 'inline' }}>{singleCountryData ? singleCountryData[0].Country : null} </h3>
            <input
                type='button'
                value='X'
                id='remove-country'
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
                    {<CountryDataTable />}
                </tbody>
            </table>
        </div>)
}

export default SingleCountryTable