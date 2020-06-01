import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../layouts/Header'
import Page from '../layouts/Page'
import Footer from '../layouts/Footer'
import '../styles/App.css';

function App() {
  const [currentCountryName, setCurrentCountryName] = useState('');
  const [countriesListData, setCountriesListData] = useState('')
  const [latest, setLatest] = useState(false);
  const [errors, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const [countriesSuggList, setCountriesSuggList] = useState('')
  let countryAlredyInList = null;
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (countriesSuggList === '') {
      setLoading(false)
      setError('Problem with internet connection!')
      return false
    }
    const countryFound = countriesSuggList.find(el => currentCountryName.toLowerCase() === el.Country.toLowerCase())
    if (!countryFound) {
      setLoading(false)
      setError('I couldn`t find country "' + currentCountryName + '"');
      return false
    }

    if (countriesListData) countryAlredyInList = countriesListData.find((el, index) => currentCountryName.toLowerCase() === el[index].Country.toLowerCase())
    if (countryAlredyInList) {
      setLoading(false)
      setError('This country is alredy shown: "' + currentCountryName + '"');
      return false
    }

    const API = `https://api.covid19api.com/total/country/${countryFound.Slug}/status/confirmed`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          setError('');
          return response;
        }
        else {
          response.statusText === 'Not Found' ? setError('Country not fund!') : setError(response.statusText)
          throw Error(response.statusText)
        }
      })
      .then(response => response.json())
      .then((data) => {
        if (data.length === 0) {
          setError("sorry, no data found for this country")
          return false
        }
        setCountriesListData((prevStat) => [...prevStat, data])
      })
      .catch(errors => console.log(errors))
      .then(() => setLoading(false))
      .then(() => setCurrentCountryName(''))
  }

  const handleShowLatest = () => {
    setLatest(!latest)
  }

  const handleInput = (e) => {
    setCurrentCountryName(e.target.value)
  }

  const removeCountry = (country) => {
    const updatedCountriesList = countriesListData.filter((el, index) => {
      return (el[0].Country !== country)
    })
    setCountriesListData(updatedCountriesList)
  }

  useEffect(() => {
    /* const proxyurl = "https://cors-anywhere.herokuapp.com/"; */
    const API = `https://api.covid19api.com/countries`;
    fetch(API)
      .then(response => { if (response.ok) return response; else throw new Error('There was a problem retrieving the list of countries') })
      .then(response => response.json())
      .then(data => setCountriesSuggList(data))
      .catch(error => console.warn(error))
  }, [])

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <content>
          {loading &&
            "Loading..."
          }
          <Page
            handleSubmit={handleSubmit}
            handleInput={handleInput}
            handleShowLatest={handleShowLatest}
            currentCountryName={currentCountryName}
            latest={latest}
            errors={errors}
            countriesSuggList={countriesSuggList}
            countriesListData={countriesListData}
          />

        </content>

        <footer>
          <Footer />
        </footer>

      </div>
    </Router >
  );
}

export default App;
