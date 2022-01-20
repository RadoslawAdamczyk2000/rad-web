import React from 'react';
import offer from '../../../data/offer';
import GlossaryWrapper from '../../../styles/Containers/GlossaryWrapper';
import GlossaryItem from '../../atoms/OfferPage/GlossaryItem';

const Glossary = () => {
    return(
        <GlossaryWrapper>
            {
                offer.glossary.map( i => 
                    <GlossaryItem
                        defninition={i.defninition}
                        name={i.name}
                    />
                )
            }
        </GlossaryWrapper>
    )
}

export default Glossary;