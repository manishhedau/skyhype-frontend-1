import {Tooltip} from "@mui/material";
import './styles/activity_link.css';
import { useState } from 'react';

import { useDispatch} from 'react-redux';
import {deleteActivity, changeActivity} from '../../stores/activityLinksReducer';
// import {ColorWheel} from '@react-spectrum/color';

import add_image from '../assets/activity_link/add_image.png';

const Activity = (props) => {

    const {activityKey, url, title, linkKey, deleteLink, updateLink} = props;

    const dispatch = useDispatch();
    console.log(url, title);
    // const [thumbnail, setThumbnail] = useState("");
    const [urlValue, setUrl] = useState(url);
    const [titleValue, setTitle] = useState(title);

    const handleTitle = (e) => {
        setTitle(e.target.value);
        console.log(titleValue);
    }

    const deleteData = (e) => {
        // console.log(e.target);
        // console.log("Data dispatched");
        
        // console.log("Activity Deleted");
        dispatch(deleteActivity({activityKey}));
        deleteLink(linkKey);
    }

    const updateData = (e) => {
        dispatch(changeActivity({activityKey}));
        updateLink(linkKey, e.target.value ? e.target.value : title, e.target.value ? e.target.value : url);
    }

    const handleUrl = (e) => {
        setUrl(e.target.value);
        console.log(urlValue);
    }

    return (

        <div className="activity-link" key={linkKey}>

            <form className="activity-form"> 

                {/*Image Input Section*/}
                <div className="image-section">

                    <div className="input-container">

                        <Tooltip title={<h6>Add Image</h6>} placement="top">
                            <label htmlFor="add-image" style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "auto"}}>
                                <img style={{height: "80%", width: "40%"}} src={add_image} alt="Activity Link"/>
                            </label>
                        </Tooltip>
                        
                        <input id="add-image" type="file" accept="image/*" hidden={true}/>

                    </div>

                </div>
                
                {/*Input Section for Title, URL, Spotlight and others*/}
                <div className="other-inputs">

                    <div className="text-inputs">
                        <input  onChange={handleTitle} onBlur={updateData} type="text" placeholder="Title" value={titleValue}/>
                        <input onChange={handleUrl} type="text" placeholder="URL" value={urlValue}/>
                    </div>

                    <div className="link-controls">
                        {/* <FormControlLabel control={<Switch size="small" color="error"/>} label={<p>Spotlight</p>} labelPlacement="bottom"/> */}
                        <i className="fa-solid fa-trash" onClick={deleteData} id="delete-button" style={{color: "black"}}></i>
                        {/* <i className="fa-solid fa-floppy-disk" id="save-button" onClick={dispatchData} style={{color: "steelblue"}}></i> */}
                        {/* <ColorWheel/> */}
                        <i className="fa-solid fa-calendar" style={{color: "black"}}>{/*<input type="date"/>*/}</i>
                    </div>

                </div>

            </form>

        </div>
    );
}

export default Activity;