import React from 'react';
import TimelineItemWrapper from './styles/TimelineItemWrapper';
const TimelineItem = ({color, content, date, icon, title}) => {
    return(
        <TimelineItemWrapper color={color}>
            <div className='head'>
                <span className='date'>
                    {date}
                </span>
                <span className='icon'>
                    {icon}
                </span>
            </div>
            <div className='content'>
                <p className='title'>
                    {title}
                </p>
                <p className='text'>
                    {content}
                </p>
            </div>
        </TimelineItemWrapper>
    )
}
export default TimelineItem;