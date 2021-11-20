import './profile_link_section.css';
import { Tooltip } from '@mui/material';
import { useState } from 'react';
import QRCodeSection from './qr_code_section';

import SocialShare from './SocialShare';
import Model from '../Preview/Model';
import { getLocalUserId } from '../../services/local';
import configration from '../../config';

const ProfileLinkSection = (props) => {

    const [text, setText] = useState("Copy");
    const userId = getLocalUserId();
    console.log(userId);
    const [isVisible, setIsVisible] = useState(false);
    const [isPreviewShow, setIsPreviewShow] = useState(false);

    const handleClick = (e) => {
        setText("Copied!");
        // console.log(e.target.innerHTML);
        navigator.clipboard.writeText(e.target.innerHTML)
    }

    const openQRModal = () => {
        const qrModal = document.getElementById("qr-section");
        qrModal.style.display = "flex";
    }

    const toggleVisible = () => {
        setIsVisible(!isVisible);
    }


    const togglePreview = () => {
        setIsPreviewShow(!isPreviewShow);
    }

    const profileURI = `${configration.frontendURI}user/${userId}`

    return (
        <>
            <div className="profile-link-section">
                <div className="profile-link-container">
                    <i className="far fa-eye" onClick={togglePreview}></i>
                    <QRCodeSection url={profileURI} />
                    <div id="profile-link">
                        <Tooltip title={<h6 style={{ width: "100%" }}>{text}</h6>}>
                            <h5 onClick={handleClick}>{profileURI}</h5>
                        </Tooltip>
                    </div>
                    <div>
                        <i className="fa-solid fa-share-nodes" onClick={toggleVisible}></i>
                        <SocialShare url={profileURI} isVisible={isVisible} toggleVisible={toggleVisible} />
                    </div>
                    <i className="fas fa-qrcode" onClick={openQRModal}></i>
                </div>
            </div>
            <Model isVisible={isPreviewShow} toggleVisible={togglePreview} />
        </>
    );
}

export default ProfileLinkSection;