import React from 'react';

const ImageGallery = ({ images }) => {
    return(
        <div className="photo_container">
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className="collection__img"/>
            ))}
        </div>
    )
}

export default ImageGallery;
