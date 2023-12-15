import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from 'react'
import satData from './components/satData';

function App() {
  const [sat, setSat] = useState(satData);
 
  const filterByType = (currentType) => {
    const filteredSats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(filteredSats);
   };
  
  //const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  //const filterByType = (currentType) => {
    //const displaySats = satData.filter((newSatDisplay) => {
       //return newSatDisplay.orbitType === currentType;
   
    const displaySats = [...new Set(satData.map((data) => data.orbitType))];
 
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