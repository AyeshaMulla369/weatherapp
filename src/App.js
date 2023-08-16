import React, { useState } from 'react'
import axios from 'axios'

function App() {

    
  const[data, setCity] = useState({})
  const [location, setLocation] = useState('')

  const url = 'http://localhost:8000/'

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url+'?city='+{location})
      .then((response) => {
        setCity(response.data)
        console.log(response.data)
      })
      .catch(err => { console.log(err)})
      setLocation('')
    }
  }


    return(
        <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            {data.city ?<p>{data.city}</p>:null}
          </div>
          <div className="temp">
            {data.temp ?<h1>{data.temp}</h1> :null}
          </div>
          <div className="humidity">
              {data.main ? <p className='bold'><p>Humidity</p>{data.hum}%</p>: null}
              
            </div>
          <div className="description">
          {data.description?<h1>{data.description}</h1> :null}
          </div>
        </div>
        
      </div>
    </div>
    );

}

export default App;
