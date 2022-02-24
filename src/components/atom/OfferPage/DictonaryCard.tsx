import React from 'react';
interface IdictonaryCard {
    definition : string,
    title : string
}
const DictonaryCard = ({definition,title}:IdictonaryCard) => {
    return(
        <article>
            <div>
                {title}
            </div>
            <div>
                {definition}
            </div>
        </article>
    )
}
export default DictonaryCard;