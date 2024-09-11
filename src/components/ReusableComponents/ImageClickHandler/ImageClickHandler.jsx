import { useEffect } from 'react';

const ImageClickHandler = () => {

    useEffect(() => {
        // JavaScript function to handle click events
        function handleImageClick() {
            document.getElementById('myModal').style.display = "block";
            document.getElementById('modal_img').src = this.src;
        }

        function handleCloseClick() {
            document.getElementById('myModal').style.display = "none";
        }

        // Add click event listeners to all images
        var collectionImages = document.querySelectorAll('.collection__img');
        collectionImages.forEach(function(image) {
            image.addEventListener('click', handleImageClick);
        });

        // Add click event listener to the close button
        document.querySelector('.close').addEventListener('click', handleCloseClick);

        // Clean up function to remove event listeners when component unmounts
        return () => {
            collectionImages.forEach(function(image) {
                image.removeEventListener('click', handleImageClick);
            });
            
        };
    }, []);

    return null;
}

export default ImageClickHandler;
