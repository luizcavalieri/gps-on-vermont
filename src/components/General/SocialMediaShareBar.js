import React from 'react'
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    FacebookShareCount,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon,
    RedditShareButton,
    RedditIcon,
    RedditShareCount
} from "react-share";


const SocialMediaShareBar = ({ shareUrl, title }) => {

    console.log(process.env.PUBLIC_URL);
    const urlToShare = "https://gpsonvermont.com.au/news/" + shareUrl;
    console.log(urlToShare);
    return (
        <>
            <div className="Demo__some-network">
                <FacebookShareButton
                    url={urlToShare}
                    quote={title}
                    className="Demo__some-network__share-button"
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <div>
                    <FacebookShareCount url={urlToShare} className="Demo__some-network__share-count">
                        {count => count}
                    </FacebookShareCount>
                </div>
            </div>
            <div className="Demo__some-network">
                <TwitterShareButton
                    url={urlToShare}
                    title={title}
                    className="Demo__some-network__share-button"
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

                <div className="Demo__some-network__share-count">&nbsp;</div>
            </div>
            <div className="Demo__some-network">
                <WhatsappShareButton
                    url={urlToShare}
                    title={title}
                    separator=":: "
                    className="Demo__some-network__share-button"
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <div className="Demo__some-network__share-count">&nbsp;</div>
            </div>

            <div className="Demo__some-network">
                <LinkedinShareButton url={urlToShare} className="Demo__some-network__share-button">
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>

            {/* <div className="Demo__some-network">
                <PinterestShareButton
                    url={String(window.location)}
                    media={`${String(window.location)}/${exampleImage}`}
                    className="Demo__some-network__share-button"
                >
                    <PinterestIcon size={32} round />
                </PinterestShareButton>

                <div>
                    <PinterestShareCount url={shareUrl} className="Demo__some-network__share-count" />
                </div>
            </div> */}
            <div className="Demo__some-network">
                <RedditShareButton
                    url={urlToShare}
                    title={title}
                    windowWidth={660}
                    windowHeight={460}
                    className="Demo__some-network__share-button"
                >
                    <RedditIcon size={32} round />
                </RedditShareButton>

                <div>
                    <RedditShareCount url={urlToShare} className="Demo__some-network__share-count" />
                </div>
            </div>
            <div className="Demo__some-network">
                <EmailShareButton
                    url={urlToShare}
                    subject={title}
                    body="body"
                    className="Demo__some-network__share-button"
                >
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </div>
        </>
    )
}

export default SocialMediaShareBar;