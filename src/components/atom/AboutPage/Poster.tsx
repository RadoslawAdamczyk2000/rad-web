import PosterWrapper from './styles/PosterWrapper';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
const Poster = () => {
    return(
        <PosterWrapper>
            <StaticImage    
                src='https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/270036280_260706896160356_6959786809740748845_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=HK0qajQSThMAX9ofARj&tn=6IEtS-MtJhWxEQnr&_nc_ht=scontent-frx5-1.xx&oh=00_AT9wMNj4ZD8_Q4EoP9IN4mMAia29nlXooZKAsCIocRTTwQ&oe=621E8ABE' 
                layout='constrained'
                alt=''
                placeholder='tracedSVG'
                style={{
                    height:'100%',
                    objectFit:'cover',
                    objectPosition:'center',
                    width:'100%'
                }}
            />
        </PosterWrapper>
    )
}
export default Poster;