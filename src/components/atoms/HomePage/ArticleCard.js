import React from 'react';
import {Link} from 'gatsby';
import {VscBook, VscLinkExternal, VscMilestone, VscTerminalCmd, VscHeart} from 'react-icons/vsc';
import ArticleCardWrapper from '../../../styles/Containers/ArticleCardWrapper';

const ArticleCard = ({excerpt, path, title, type}) => {

    const articleType = () => {
        if(type === 'history'){
            <VscBook/>;
        }else if(type === 'travel'){
            <VscMilestone/>
        }else if(type === 'it'){
            <VscTerminalCmd/>
        }else if(type === 'lifestyle'){
            <VscHeart/>
        }else{
            return null;
        }
    }

    // console.log(type);
    // console.log(articleType());

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
                <p>
                    {excerpt.substr(0,97) + "..."}
                </p>
            </div>
        </ArticleCardWrapper>
    )
}

export default ArticleCard;