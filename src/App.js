import React, { useState, useEffect } from 'react'
import { MenuItem, FormControl, Select, Card, CardContent } from '@material-ui/core'
import "./App.css"
import InfoBoxs from './components/InfoBoxs'
import Map from './components/Map'


const App = () => {
  const [countries, setCountries] = useState(['USA', "UK", "NIGERIA"])
  const [selected, setSelected] = useState('WORLDWIDE')


  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }))
          setCountries(countries)
        })
    }
    getCountriesData()
  }, [])

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header ">
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
        <div className="app__stats">
          <InfoBoxs title="Coronavirus Cases" cases={123} total={2000} />
          <InfoBoxs title="Recovered" cases={1234} total={3000} />
          <InfoBoxs title="Deaths" cases={12345} total={4000} />
        </div>

        <Map />
      </div>
      <Card className="app__right">
        <CardContent >
          <h3>Live case</h3>
          <h2>Worldwide cases</h2>
        </CardContent>
      </Card>
    </div>
  )
}

export default App;
