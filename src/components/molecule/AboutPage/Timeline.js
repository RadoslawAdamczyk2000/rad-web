import about from '../../../data/about'
import React from 'react';
import TimelineElement from '../../atoms/AboutPage/TimelineElement';
import TimelineWrapper from '../../../styles/Containers/TimelineWrapper';

const Timeline = () => {
    return(
        <TimelineWrapper>
            {
                about.timeline.map( i => 
                    <>
                        <TimelineElement
                            color={i.color}
                            content={i.content}
                            date={i.date}
                            icon={i.icon}
                            title={i.title}
                        />
                        <span/>
                    </>
                )
            }
        </TimelineWrapper>
    )
}

export default Timeline;