import React from 'react'

import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    EmailShareButton,
    WhatsappShareButton
} from "react-share";
import { FacebookIcon, TwitterIcon, LinkedinIcon, EmailIcon, WhatsappIcon } from "react-share";
import "./social_share.css";


function SocialShare({ url, isVisible, toggleVisible }) {

    if (isVisible === false) return null;

    return (
        <div className="social-share">
            <FacebookShareButton
                url={url}
                // quote={"If you want to render anything else but the count, you can provide a function as a child element that takes in shareCount as an argument and returns an element:"}
                // hashtag={"#hashtag"}
                // description={"aiueo"}
                className="Demo__some-network__share-button"
                onClick={() => toggleVisible()}
            >
                <FacebookIcon size={40} round /> Facebook share
            </FacebookShareButton>
            <TwitterShareButton
                title={"test"}
                url={url}
                hashtags={["hashtag1", "hashtag2"]}
                onClick={() => toggleVisible()}
            >
                <TwitterIcon size={40} round />
                Twitter share
            </TwitterShareButton>

            <LinkedinShareButton
                // title={"test"}
                url={url}
                // hashtags={["hashtag1", "hashtag2"]}
                onClick={() => toggleVisible()}
            >
                <LinkedinIcon size={40} round />
                Linkedin share
            </LinkedinShareButton>
            <EmailShareButton
                // title={"test"}
                url={url}
                // hashtags={["hashtag1", "hashtag2"]}
                onClick={() => toggleVisible()}
            >
                <EmailIcon size={40} round />
                Email share
            </EmailShareButton>
            <WhatsappShareButton
                // title={"test"}
                url={url}
                // hashtags={["hashtag1", "hashtag2"]}
                onClick={() => toggleVisible()}
            >
                <WhatsappIcon size={40} round />
                Whatsapp share
            </WhatsappShareButton>
        </div>
    )
}

export default SocialShare
