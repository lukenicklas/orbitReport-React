import satData from './satData';

const Buttons = ({ filterByType, setSat, displaySats }) => { //passing in the three props
  return (
    <div>
      {displaySats.map((sat, id) => { //mapping over displaySats array and is creating a new array of buttons based on each orbit type
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};
//when the button is clicked  the filterbytype function is called with sat as the argument. the second onclick is calling setData as teh argument resetting the displayed sat orbits
export default Buttons;