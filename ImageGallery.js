import React from 'react';
import './ImageGallery.css';

function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      {images.length > 0 ? (
        images.map((imgUrl, index) => (
          <div className="image-container" key={index}>
            <img src={imgUrl} alt="Dog" />
          </div>
        ))
      ) : (
        <p>No images to display.</p>
      )}
    </div>
  );
}

export default ImageGallery;
