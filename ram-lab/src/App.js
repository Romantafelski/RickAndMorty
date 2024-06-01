import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Location from './components/locations';
import Character from './components/characters'


const App = () => {
  let [locations, setLocations] = useState([])
 

  const getLocations = () => {
    axios.get("https://rickandmortyapi.com/api/location").then((response) => {
      setLocations(response.data.results)
    })
  }

  useEffect(() => {
    getLocations()
  }, [])


  let [characters, setCharacters] = useState ([])

  const getCharacters = () => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setCharacters(response.data.results)
    
      
    })
  }
  useEffect(() => {
    getCharacters()
  }, [])

  const [showLocations, setShowLocations] = useState(false)

  const showLocationsFunc = () => {
    setShowLocations(!showLocations);
    setShowCharacters(false)
  }

  const [showCharacters, setShowCharacters] = useState(false)

  const showCharactersFunc = () => {
    setShowCharacters(!showCharacters);
    setShowLocations(false)
  }

  const [hover, setHover] = useState();

  const addHover = () => {
      setHover(true);
    };
  
  const noHover = () => {
      setHover(false);
  };

  const [hoverChar, setHoverChar] = useState();

  const addHoverChar = () => {
      setHoverChar(true);
    };
  
  const noHoverChar = () => {
      setHoverChar(false);
  };



  return (
    <div>
      <button  onMouseOver={addHover} onMouseOut={noHover} className={hover ? "addHover" : "add"} onClick={showLocationsFunc}>Show Locations</button> 
      <button onMouseOver={addHoverChar} onMouseOut={noHoverChar} className={hoverChar ? "addHoverChar" : "addChar"} onClick={showCharactersFunc}>Show Characters</button>
      {locations.map((location) => {
        return (
          <div className={showLocations ? "showLocations" : "hideLocations"}> 
          <Location location={location}/>
       </div>
        )
      })}
      
      {characters.map((character) => {
return (
  <div className={showCharacters ? "showChars" : "hideChars" }>
    <Character character={character}/>
      </div>
)
})}
    </div>
  )
}

export default App;




