import React from 'react'
import ReactDOM from 'react-dom';
import ImagePicker from './ImagePicker';
import { useDispatch } from 'react-redux';
import "./model.css";

import { changeProfileImage } from "../../../stores/editprofileReducer";


function Model({ isVisible, toggleVisible, }) {
    const dispatch = useDispatch();

    if (isVisible === false) return null;

    const handleSaveButton = (image) => {

        console.log("Image is : ", image);
        toggleVisible();
        dispatch(changeProfileImage({ profileImage: image }))
    }

    return ReactDOM.createPortal(
        <>
            <div className="model-overlay" onClick={toggleVisible}></div>

            <div className="model-container">
                <div className="model-close" onClick={toggleVisible}>
                    <i class="far fa-times-circle"></i>
                </div>
                <ImagePicker onSave={handleSaveButton} />
                {/* <button className="btn btn-primary">Save Image</button> */}

            </div>
        </>,
        document.getElementById('app-modal')
    )
}

export default Model
