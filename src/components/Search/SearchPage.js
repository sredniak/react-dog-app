import React, { useState } from 'react';
import Dog from '../Dog/Dog';
import Search from './Search';
import Navbar from '../Navbar/Navbar';


function SearchPage() {
  const [dogImages, setDogImages] = useState(undefined);

  const getDogPics = async (breed) => {
    setDogImages(null);
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random/1`
    );
    const { message } = await response.json();
    setDogImages(message);
  };

  return (
    <div className='p-5 w-100 s flex-column align-items-center'>
        <Search getDogPics={getDogPics} />
        <Dog dogImages={dogImages} />
      <Navbar />
    </div>
  );
}
export default SearchPage;