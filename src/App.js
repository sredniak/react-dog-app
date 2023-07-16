import { useState, useEffect } from 'react';
import DogsList from './components/DogsList/DogsList'
import Navbar from './components/Navbar/Navbar';

function App() {
  //stan początkowy dogs oraz stan po aktualizacji setDogs
  const [dogs, setDogs] = useState([])

    // pobieramy dane za pomocą funkcji useEffect
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())//wykorzystanie Object.entries() poniewaz otrzymane dane sa obiektem
    .then(data => setDogs(Object.entries(data.message)))
  },[]) //pusta tablica, w celu pobrania danych jednorazowo (zeby się nie zapętliło)

  return (
    <div className="App">
      <Navbar />
      {/* przekazujemy propsy z komponentu rodzica do komponentu dziecka */}
      <DogsList dogs={dogs} />
    </div>
  );
}

export default App;
