import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import OfferCardWrapper from './styles/OfferCardWrapper';
interface IofferCard {
    description : string,
    path : string,
    price : number,
    title : string
}
const OfferCard = ({description,path,price,title}:IofferCard) => {
    return(
        <OfferCardWrapper>
            <figure>
                <StaticImage
                    alt={`${title} poster`}
                    src='https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_960_720.jpg'
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