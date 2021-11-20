import ImageCropper from "./ImageCropper";
import { useState } from "react";
import "./imagePicker.css";

function ImagePicker({ onSave }) {

    const [imageToCrop, setImageToCrop] = useState(undefined);
    const [croppedImage, setCroppedImage] = useState(undefined);

    const onUploadFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                const image = reader.result;

                setImageToCrop(image);
            });

            console.log(event.target.files[0])

            reader.readAsDataURL(event.target.files[0]);
        }
    };


    const handleSaveImage = (event) => {
        onSave(croppedImage)
    }

    console.log("Image cropp : ", croppedImage);

    return (
        <div className="image-picker">
            <input type="file" accept="image/*" onChange={onUploadFile} />
            <div className="image-crop">
                <ImageCropper
                    imageToCrop={imageToCrop}
                    onImageCropped={(croppedImage) => setCroppedImage(croppedImage)}
                />
            </div>
            {croppedImage && (
                <div>
                    {/* <p>Cropped Image</p> */}
                    <img alt="Cropped Img" src={croppedImage} />
                    {/* {croppedImage && <input type="file" accept="image/*" value={imageToCrop} />} */}
                </div>
            )}

            <button className="btn btn-primary" onClick={handleSaveImage} disabled={!croppedImage}>Save Image</button>
        </div>
    );
}

export default ImagePicker;
