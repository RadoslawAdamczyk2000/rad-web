import React from 'react';
import Button from './Button';
import OfferCardWrapper from './styles/OfferCardWrapper';
interface IofferCard {
    icon : any,
    text : string,
    title : string,
    path : string
}
const OfferCard = ({icon,text,title,path}:IofferCard) => {
    return(
        <OfferCardWrapper>
            <div className='head'>
                <span>{icon}</span>
                <h5>{title}</h5>
            </div>
            <div className='content'>
                <p>
                    {text}
                </p>
                <Button
                    center={true}
                    path={path}
                    small={true}
                    title='czytaj więcej'
                />
            </div>
        </OfferCardWrapper>
    )
}
export default OfferCard;