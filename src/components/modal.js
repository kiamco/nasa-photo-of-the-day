import React from 'react'

const ModalView = (props) => {
    return(
        <div className='bg-modal'>
            <div className='modal-content'>
                <div className='top-content'>
                    <img src="#" alt="selected"/>
                    <p>comments</p>
                </div>
                <div className='bottom-content'>
                    <p>$description</p>
                </div>
            </div>
        </div>
    );
}

export default ModalView;