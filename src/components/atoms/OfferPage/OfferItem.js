import React from 'react';
import ButtonLink from '../../../styles/Buttons/ButtonLink';

const OfferItem = ({content, path, poster, price, title}) => {
    return(
        <div>
            <figure>
                <img src={poster}/>
            </figure>
            <div>
                <h3>
                    {title}
                </h3>
                <p>
                    {content}
                </p>
                <b>
                    {price}
                </b>
            </div>
            <div>
                <ButtonLink path={path}>
                    więcej
                </ButtonLink>
            </div>
        </div>
    )
}

export default OfferItem;