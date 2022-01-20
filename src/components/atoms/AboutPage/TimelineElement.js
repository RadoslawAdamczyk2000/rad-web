import React from 'react';
import TimelineElementWrapper from '../../../styles/Containers/TimelineElementWrapper';

const TimelineItem = ({color, content, date, icon, title}) => {
    return(
        <TimelineElementWrapper color={color}>
            <div className='head'>
                <span className='head__date'>
                    {date}
                </span>
                <span className='head__icon'>
                    {icon}
                </span>
            </div>
            <div className='content'>
                <p className='content__title'>
                    {title}
                </p>
                <p className='content__text'>
                    {content}
                </p>
            </div>
        </TimelineElementWrapper>
    )
}

export default TimelineItem;