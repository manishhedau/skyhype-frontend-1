import QRCode from 'react-qr-code';
import './qr_code_section.css';

const QRCodeSection = ({ url }) => {

    const closeQRModal = () => {
        const qrModal = document.getElementById("qr-section");
        console.log(qrModal);
        qrModal.style.display = "none";
    }

    return (
        <div id="qr-section">
            <i className="fas fa-times-circle" onClick={closeQRModal} id="close-button"></i>
            <p>Scan to view Profile</p>
            <QRCode value={url} level="L" />
        </div>
    );
}

export default QRCodeSection;