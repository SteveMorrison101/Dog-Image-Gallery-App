import React, { useState } from 'react';
import BreedSelector from './BreedSelector';
import ImageGallery from './ImageGallery';
import './App.css';

function App() {
  const [breed, setBreed] = useState('');
  const [numImages, setNumImages] = useState(1);
  const [images, setImages] = useState([]);

  const handleBreedChange = (selectedBreed) => {
    setBreed(selectedBreed);
  };

  const handleNumImagesChange = (number) => {
    setNumImages(number);
  };

  const handleFetchImages = async () => {
    if (breed && numImages > 0 && numImages <= 100) {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${breed}/images/random/${numImages}`
        );
        const data = await response.json();
        setImages(data.message);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    } else {
      alert('Please select a breed and enter a number between 1 and 100.');
    }
  };

  return (
    <div className="app-container">
      <h1>Dog Image Gallery</h1>
      <BreedSelector
        breed={breed}
        numImages={numImages}
        onBreedChange={handleBreedChange}
        onNumImagesChange={handleNumImagesChange}
        onFetchImages={handleFetchImages}
      />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
