import React from 'react';
import ButtonLink from '../../../styles/Buttons/ButtonLink';
import OfferItemWrapper from '../../../styles/Containers/OfferItemWrapper';

const OfferItem = ({content, path, poster, price, title}) => {
    return(
        <OfferItemWrapper>
            <figure className='poster'>
                <img src={poster} alt={title}/>
            </figure>
            <div className='content'>
                <h3 className='content__title'>
                    {title}
                </h3>
                <p className='content__text'>
                    {content}
                </p>
                <b className='content__price'>
                    {price + ' PLN'}
                </b>
            </div>
            <div className='button'>
                <ButtonLink path={path}>
                    więcej
                </ButtonLink>
            </div>
        </OfferItemWrapper>
    )
}

export default OfferItem;