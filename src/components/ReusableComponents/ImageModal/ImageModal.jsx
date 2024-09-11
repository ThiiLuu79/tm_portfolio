import React from 'react';

const ImageModal = () => {
    return(
        <div id="myModal" className="modal">
            <span className="close">&times;</span>
            <img className="modal-content" id="modal_img" alt='modal'/>
        </div>
    )
}

export default ImageModal;
