import React, { useState, useEffect } from 'react';
import './BreedSelector.css';

function BreedSelector({
  breed,
  numImages,
  onBreedChange,
  onNumImagesChange,
  onFetchImages,
}) {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    // Fetch the list of breeds from Dog CEO API
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        setBreeds(Object.keys(data.message));
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };
    fetchBreeds();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFetchImages();
  };

  return (
    <form className="breed-selector-form" onSubmit={handleSubmit}>
      <label htmlFor="breed">Select Breed:</label>
      <select
        id="breed"
        value={breed}
        onChange={(e) => onBreedChange(e.target.value)}
      >
        <option value="">--Choose a breed--</option>
        {breeds.map((breedName) => (
          <option key={breedName} value={breedName}>
            {breedName}
          </option>
        ))}
      </select>

      <label htmlFor="numImages">Number of Images (1-100):</label>
      <input
        type="number"
        id="numImages"
        min="1"
        max="100"
        value={numImages}
        onChange={(e) => onNumImagesChange(e.target.value)}
      />

      <button type="submit">Fetch Images</button>
    </form>
  );
}

export default BreedSelector;