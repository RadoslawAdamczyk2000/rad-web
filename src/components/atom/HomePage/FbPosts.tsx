import React from 'react';
import { FacebookEmbed, InstagramEmbed } from 'react-social-media-embed';
import { facebook, instagram } from '../../../data/socialPosts';
import FbPostsWrapper from './styles/FbPostsWrapper';
const FbPosts = () => {
    return(
        <FbPostsWrapper>
            {
                facebook.map( i => 
                    <FacebookEmbed
                        linkText="przeczytaj więcej na moim fanpage'u"
                        placeholderImageUrl=""
                        url={i}
                        width={300}
                    />        
                )
            }
            {
                instagram.map( i =>
                    <InstagramEmbed
                        linkText="Zobacz więcej na moim profilu"
                        url={i}
                        width={350}
                    />                    
                )
            }
        </FbPostsWrapper>
    )
}
export default FbPosts;