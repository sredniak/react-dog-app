import React, { useState, useEffect } from 'react';

export default ({ getDogPics }) => {
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    getBreedList();
  }, []);

  async function getBreedList() {
    const data = await fetch('https://dog.ceo/api/breeds/list/all');
    const { message } = await data.json();
    setBreedList(Object.keys(message));
  }

  return (
    <div>
      <label htmlFor="breedList" className='mb-2'>Wybierz rasę psa: </label>
      <select className="form-select mb-2" name="breedList" onChange={(e) => getDogPics(e.target.value)}>
        <option value="">Lista ras</option>
        {breedList.map((breed) => {
          return (
            <option value={breed} key={breed}>
              {breed}
            </option>
          );
        })}
      </select>
    </div>
  );
};
