import ArticleCardWrapper from '../../../styles/Containers/ArticleCardWrapper';
import React from 'react';
import {Link} from 'gatsby';
import {VscBook, VscLinkExternal} from 'react-icons/vsc';
const ArticleCard = ({excerpt, path, title}) => {
    return(
        <ArticleCardWrapper>
            <div className='head'>
                <span className='head-item'>
                    <VscBook/>
                </span>
                <Link className='head-item' to={path}>
                    <VscLinkExternal/>
                </Link>
            </div>
            <div className='title'>
                <Link to={path}>
                    {title}
                </Link>
            </div>
            <div className='excerpt'>
                <p dangerouslySetInnerHTML={{__html:excerpt.substr(0,97) + "..."}}/>
            </div>
        </ArticleCardWrapper>
    )
}
export default ArticleCard;