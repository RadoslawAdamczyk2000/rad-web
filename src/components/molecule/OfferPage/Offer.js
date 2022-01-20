import React from 'react';
import offer from '../../../data/offer';
import OfferItem from '../../atoms/OfferPage/OfferItem';

const Offer = () => {
    return(
        <div>
            {offer.offerItem.map( i => 
                <OfferItem
                    content={i.content}
                    key={i.id}
                    path={i.path}
                    poster={i.poster}
                    price={i.price}
                    title={i.title}
                />    
            )}
        </div>
    )
}

export default Offer;