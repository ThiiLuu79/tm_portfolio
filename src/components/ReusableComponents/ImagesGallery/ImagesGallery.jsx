import { useEffect } from 'react';


const ImageGallery = ({ images }) => {

    useEffect(() => {
        function handleImageClick() {
            document.getElementById('myModal').style.display = "block";
            document.getElementById('modal_img').src = this.src;
        }

        function handleCloseClick() {
            document.getElementById('myModal').style.display = "none";
        }

        var collectionImages = document.querySelectorAll('.collection__img');
        collectionImages.forEach(function(image) {
            image.addEventListener('click', handleImageClick);
        });

        document.querySelector('.close').addEventListener('click', handleCloseClick);

        return () => {
            collectionImages.forEach(function(image) {
                image.removeEventListener('click', handleImageClick);
            });
            
        };
    }, []);

    return(
        <div className="photo_container">
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className="collection__img" data-aos="fade-right"/>
            ))}

            <div id="myModal" className="modal">
                <span className="close">&times;</span>
                <img className="modal-content" id="modal_img" alt='modal'/>
            </div>
        </div>
    )
}

export default ImageGallery;
