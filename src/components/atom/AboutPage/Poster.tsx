import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
const Poster = () => {
    return(
        <div className='head__image'>
            <StaticImage    
                src='https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/270036280_260706896160356_6959786809740748845_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=gUfDc0uTZx8AX8iXBu6&_nc_ht=scontent-frx5-1.xx&oh=00_AT9VtISXw7u_UzNzpFmqknLR_6b26_mgfQO_31Z5ta-b0A&oe=62189BFE' 
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
        </div>
    )
}
export default Poster;