import React from 'react';
import {AiOutlineGoogle,AiOutlineCrown} from 'react-icons/ai';
import {Link} from 'gatsby';
import {RiHeart3Line} from 'react-icons/ri';
import {VscBook, VscLinkExternal,VscCode} from 'react-icons/vsc';
import ArticleCardWrapper from './styles/ArticleCardWrapper';
interface IarticleCard {
    articleType : string,
    excerpt : string,
    path : string,
    title : string
}
const ArticleCard = ({articleType,excerpt,path,title}:IarticleCard) => {
    const variant = () => {
        if(articleType === 'seo'){
            return <AiOutlineGoogle/>;
        }else if(articleType === 'programming'){
            return <VscCode/>;
        }else if(articleType === 'history'){
            return <AiOutlineCrown/>
        }else if(articleType === 'lifestyle'){
            return <RiHeart3Line/>
        }else{
            return <VscBook/>
        }
    }
    return(
        <ArticleCardWrapper>
            <div className='head'>
                <span>
                    {variant()}
                </span>
                <Link to={path}>
                    <VscLinkExternal/>
                </Link>
            </div>
            <div className='content'>
                <Link to={path}>
                    <p>
                        {title}
                    </p>
                </Link>
                <p>
                    {excerpt}
                </p>
            </div>
        </ArticleCardWrapper>
    )
}
export default ArticleCard;