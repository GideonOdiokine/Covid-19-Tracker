import React from 'react'
import { MenuItem, FormControl, Select } from '@material-ui/core'

const App = () => {
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID_19 TRACKER</h1>
        <FormControl className="app__dropdown" >
          <Select variant="outlined" value="abc">
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option one</MenuItem>
            <MenuItem value="worldwide">Option two</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default App;
