import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from 'react' //this is a react hook that allows us to add state to a functional component. It returns an array with two values, the current state and a function to update it.
import satData from './components/satData';

function App() { //creating the buttons
  const [sat, setSat] = useState(satData); //using useState function to update the state
  const displaySats = [...new Set(satData.map((data) => data.orbitType))]; //using the map method to extract orbit types from each sat.
  const filterByType = (currentType) => { //here we are defining a function that will filter the satellite data based on orbit type
    const filteredSats = satData.filter((newSatDisplay) => { //uses filter method to create a new array that contains only the satellites that match the orbit type I want.
      return newSatDisplay.orbitType === currentType; //checking to make sure the orbit type is the same as the currentType
    });
    setSat(filteredSats); //updates the sat state with the filtered satellites.
  };


  return (
    <div>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table
        sat={sat}
      />
    </div>
  );
}

export default App;