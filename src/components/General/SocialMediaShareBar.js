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


const SocialMediaShareBar = ({ shareUrl, title, description, media }) => {

    // console.log(process.env.PUBLIC_URL);
    const urlToShare = "https://gpsonvermont.com.au/" + shareUrl;
    // console.log(urlToShare);
    // console.log(media);
    if (!media) media = ["facebook","twitter","whatsapp","reddit","linkedin","email"];
    return (
        <>
            <div className="Demo__container">
                {media.includes("facebook") ?
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
                    </div> :
                    null
                }
                {media.includes("twitter") ?
                    <div className="Demo__some-network">
                        <TwitterShareButton
                            url={urlToShare}
                            title={title}
                            className="Demo__some-network__share-button"
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>

                        <div className="Demo__some-network__share-count">&nbsp;</div>
                    </div> :
                    null
                }
                {media.includes("whatsapp") ?
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
                    </div> :
                    null
                }
                {media.includes("linkedin") ?
                    <div className="Demo__some-network">
                        <LinkedinShareButton url={urlToShare} summary={description} source={"Gps On Vermont"} className="Demo__some-network__share-button">
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                    </div> :
                    null
                }

                {media.includes("reddit") ?
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
                    </div> :
                    null
                }

                {media.includes("email") ?
                    <div className="Demo__some-network">
                        <EmailShareButton
                            url={urlToShare}
                            subject={title}
                            body="body"
                            className="Demo__some-network__share-button"
                        >
                            <EmailIcon size={32} round />
                        </EmailShareButton>
                    </div> :
                    null
                }
            </div>
        </>
    )
}

export default SocialMediaShareBar;