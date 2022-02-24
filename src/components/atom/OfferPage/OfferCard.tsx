import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
interface IofferCard {
    description : string,
    path : string,
    price : number,
    title : string
}
const OfferCard = ({description,path,price,title}:IofferCard) => {
    return(
        <div>
            <figure>
                <StaticImage
                    alt={`${title} poster`}
                    src='https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_960_720.jpg'
                />
            </figure>
            <div>
                <h4>
                    {title}
                </h4>
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
        </div>
    )
}
export default OfferCard;