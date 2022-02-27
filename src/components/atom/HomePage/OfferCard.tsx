import React from 'react';
import Button from './Button';
interface IofferCard {
    icon : any,
    text : string,
    title : string,
    path : string
}
const OfferCard = ({icon,text,title,path}:IofferCard) => {
    return(
        <article>
            <div>
                <span>{icon}</span>
                <h5>{title}</h5>
            </div>
            <div>
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
        </article>
    )
}
export default OfferCard;