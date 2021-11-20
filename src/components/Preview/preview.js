import './styles/preview.css';
import ActivityTile from './activity_tile';
import { iconsObject } from '../../pages/iconObject';
import { useSelector } from 'react-redux';
import SecondScreen from './second_screen';
import { useState } from 'react';;

const Preview = () => {

    const userData = useSelector(state => state.entities);
    // console.log("Preview: Data");
    // console.log(userData);
    const socialMediaLinks = userData.socialLinks.filter(link => link.isActive);
    const [screen, setScreen] = useState(1);

    const showSecondScreen = () => {
        const secondScreenButton = document.getElementById("preview-screen-2");
        // const secondScreenButtonAlt = document.getElementById("second-preview-screen-2");
        // const firstScreenButtonAlt = document.getElementById("second-preview-screen-1");
        const firstScreenButton = document.getElementById("preview-screen-1");

        secondScreenButton.style.background = "lightblue";
        // secondScreenButtonAlt.style.background = "lightblue";
        // firstScreenButtonAlt.style.background = "lightgrey";
        firstScreenButton.style.background = "lightgrey";

        setScreen(2);
    }

    const showFirstScreen = () => {
        const secondScreenButton = document.getElementById("preview-screen-2");
        // const secondScreenButtonAlt = document.getElementById("second-preview-screen-2");
        // const firstScreenButtonAlt = document.getElementById("second-preview-screen-1");
        const firstScreenButton = document.getElementById("preview-screen-1");

        secondScreenButton.style.background = "lightgrey";
        // secondScreenButtonAlt.style.background = "lightgrey";
        // firstScreenButtonAlt.style.background = "lightblue";
        firstScreenButton.style.background = "lightblue";

        setScreen(1);
    }

    const store = {

        profile_image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",

        styles: {
            background: "lightblue",
            font: "Arial"
        },

        views: 100,
        posts: 50,
        likes: 170,

        username: "Purohit",
        activity_links: ["foo", "bar", "meek", "root"],
        social_media_links: ["foo", "baar", "meek", "loo", "loo"],
        designation: "Developer",
    }

    if (screen === 1) {
        return (
            <section className="preview-section">

                <div className="preview-container" style={{ background: userData.appearance.styles.background, fontFamily: userData.appearance.styles.font }}>

                    <p className="skyhype-logo">Skyhype</p>

                    {/* <img className="profile-image" src={store.profile_image} alt={store.username} /> */}

                    <div className="preview-profile-info">
                        <img className="first-screen-profile-image" src={store.profile_image} alt={store.username} />

                        <h1>{userData.editProfile.editprofile.username}</h1>
                        <p id="user-designation">{userData.editProfile.editprofile.designation}</p>

                        <div className="preview-stats">
                            <p>Views: {store.views}</p>
                            {/* <p>Likes: {store.likes}</p> */}
                            <p>Posts: {userData.activityLinks.length}</p>
                        </div>

                        <div className="social-media-links">
                            {socialMediaLinks.map((link, ind) => {
                                return <a key={ind} href={iconsObject[link.social_media].baseURL + link.link} style={{ color: "white" }}><i className={`fab ${iconsObject[link.social_media].icon}`}></i></a>
                            })}
                        </div>
                    </div>

                    <div className="slideshow">
                        <img src="https://miro.medium.com/max/4800/1*scwcpro6eU-pORVH_Fpc_g.png" alt="slideshow" />
                    </div>

                    <div className="activity-links">
                        {userData.activityLinks.map(link => {
                            return <ActivityTile key={10000 + Math.ceil(Math.random() * 10000)} thumbnail="https://miro.medium.com/max/4800/1*scwcpro6eU-pORVH_Fpc_g.png" title={link.title} />
                        })}
                    </div>

                    <button className="btn btn-block btn-primary join-button">Join My Club</button>
                </div>

                <div id="preview-switch-buttons">
                    <div id="preview-screen-1" onClick={showFirstScreen}>1</div>
                    <div id="preview-screen-2" onClick={showSecondScreen}>2</div>
                </div>

            </section>
        );
    }

    else {
        return (
            <div className="second-preview-section">
                <SecondScreen />

                <div id="preview-switch-buttons" className="second-screen-preview">
                    <div className="preview-buttton">
                        <p id="preview-screen-1" onClick={showFirstScreen}>1</p>
                        <p id="preview-screen-2" onClick={showSecondScreen}>2</p>
                    </div>
                </div>
            </div>
        );
    }



}

export default Preview;