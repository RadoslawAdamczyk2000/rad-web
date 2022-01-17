import React from 'react';
import Text from '../../../styles/Text/Text';
import PropTypes from 'prop-types';
import OfferSnapCardWrapper from '../../../styles/Containers/OfferSnapCardWrapper';

const OfferSnapCard = ({content, icon, title}) => {
    return(
        <OfferSnapCardWrapper>
            <div className='box'>
                <div>
                    <span className='icon'>
                        {icon}
                    </span>
                    <span className='title'>
                        {title}
                    </span>
                </div>
            </div>
            <div className='box'>
                <Text className='content'>
                    {content}
                </Text>
            </div>
        </OfferSnapCardWrapper>
    )
}

OfferSnapCard.propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default OfferSnapCard;