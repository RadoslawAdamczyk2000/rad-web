import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import OfferCardWrapper from './styles/OfferCardWrapper';
interface IofferCard {
    description : string,
    path : string,
    price : number,
    poster : string,
    title : string
}
const OfferCard = ({description,path,price,poster,title}:IofferCard) => {
    return(
        <OfferCardWrapper>
            <figure>
                <img
                    alt={`${title} poster`}
                    src={poster}
                    style={{
                        height:'100%',
                        objectFit:'cover',
                        objectPosition:'center',
                        width:'100%'
                    }}
                />
            </figure>
            <div>
                <Link to={path}>
                    <h4>
                        {title}
                    </h4>
                </Link>
                <p>
                    {description}
                </p>
                <strong>
                    {price}PLN
                </strong>
                <Link to={path}>
                    więcej
                </Link>
            </div>
        </OfferCardWrapper>
    )
}
export default OfferCard;