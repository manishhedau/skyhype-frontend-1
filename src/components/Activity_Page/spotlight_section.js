import './styles/spotlight_section.css';
// import add_image from '../assets/activity_link/add_image.png';
// import { getSpotlightData } from '../../services/apiEndpoint';

// import { Tooltip } from '@mui/material';
// import {useParams} from 'react-router-dom';
import {useState} from 'react';
import {useSelector} from 'react-redux';

const SpotlightSection = () => {

    const spotlightData = useSelector(state => state.entities.spotlight.spotlight);    
    console.log(spotlightData);

    const [title, setTitle] = useState(spotlightData.title);
    const [url, setUrl] = useState(spotlightData.url);

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleUrl = (e) => {
        setUrl(e.target.value);
    }

    const emptyInputFields = () => {
        setTitle("");
        setUrl("");
    }

    return (
        <div id="spotlight-section">
            <h1>Add your Hightlight</h1>

            <div id="spotlight-container">
                <form>

                    {/* <div id="image-input-section">
                        <Tooltip title={<h6>Add Image</h6>} placement="top">
                            <label htmlFor="add-image" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "auto" }}>
                                <img style={{ height: "70%", width: "35%" }} src={add_image} alt="Spotlight Link" />
                            </label>
                        </Tooltip>

                        <input id="add-image" type="file" accept="image/*" hidden={true}/>
                    </div> */}

                    <div id="text-input-section">
                        <input type="text" id="spotlight-title" onChange={handleTitle} placeholder="Title" value={title} />
                        <input type="text" id="spotlight-url" onChange={handleUrl} placeholder="URL" value={url} />
                    </div>
                    <i className="fa-solid fa-trash" onClick={emptyInputFields} id="delete-spotlight-button" style={{ color: "black" }}></i>
                </form>
            </div>
        </div>
    );
}

export default SpotlightSection;