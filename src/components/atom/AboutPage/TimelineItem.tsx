import React from 'react';
const TimelineItem = ({color, content, date, icon, title}) => {
    return(
        <div color={color}>
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
        </div>
    )
}
export default TimelineItem;