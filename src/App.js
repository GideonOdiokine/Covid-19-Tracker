import React, { useState, useEffect } from 'react'
import { MenuItem, FormControl, Select } from '@material-ui/core'
import "./App.css"


const App = () => {
  const [countries, setCountries] = useState(['USA', "UK", "NIGERIA"])
  const [selected, setSelected] = useState('WORLDWIDE')


  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.coutry,
            value: country.countryInfo.iso2
          }))
          setCountries(countries)
        })
    }
    getCountriesData()
  }, [])

  return (
    <div className="app">
      <div className="app__header container">
        <h1>COVID_19 TRACKER</h1>
        <FormControl className="app__dropdown" >
          <Select variant="outlined" value={selected} onChange={(e) => setSelected(e.target.value)}>
            <MenuItem value={selected}>WorldWide</MenuItem>
            {countries.map(country => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}

          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default App;
