import React from 'react'
import ReactDOM from 'react-dom';
import ModelPreview from './ModelPreview';
import "./styles/model.css";

function Model({ isVisible, toggleVisible, }) {

    if (isVisible === false) return null;

    return ReactDOM.createPortal(
        <>
            <div className="model-overlay" onClick={toggleVisible}></div>
            <div className="preview-model-container">
                {/* lorem ipsum */}
                <ModelPreview closeEye={toggleVisible} />
            </div>
        </>,
        document.getElementById('app-modal')
    );
}

export default Model
