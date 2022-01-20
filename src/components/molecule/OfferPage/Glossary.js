import React from 'react';
import offer from '../../../data/offer';
import GlossaryItem from '../../atoms/OfferPage/GlossaryItem';

const Glossary = () => {
    return(
        <div>
            {
                offer.glossary.map( i => 
                    <GlossaryItem
                        defninition={i.defninition}
                        name={i.name}
                    />
                )
            }
        </div>
    )
}

export default Glossary;