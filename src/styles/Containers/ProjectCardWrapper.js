import styled from 'styled-components';

const ProjectCardWrapper = styled.div`
    align-items:center;
    display:flex;
    height:100%;
    justify-content:center;
    position:relative;
    width:100%;

    & > .content{
        align-items:center;
        background-color:${({theme}) => theme.colors.page.card};
        display:flex;
        flex-direction:column;
        height:100%;
        justify-content:space-evenly;
        opacity:0;
        position:absolute;
        transition:.12s linear opacity;
        width:100%;

        & > p{
            align-items:center;
            color:${({theme}) => theme.colors.page.title};
            display:flex;
            font-size:${({theme}) => theme.fonts.size.page.content};
            font-weight:${({theme}) => theme.fonts.weight.page.subTitle};
            justify-content:center;
            padding:.5rem 1rem;
            text-align:center;
            width:100%;

        }
     
        & > .tech{
            align-items:center;
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-evenly;
            width:90%;

            & > li{
                align-items:center;
                display:flex;
                height:3rem;
                font-size:2.75rem;
                justify-content:center;
                width:3rem;
            }
        }  
    }

    &:hover > .content{
        opacity:1;
    }

    & > .poster{
        height:100%;
        object-fit:cover;
        object-position:center;
        width:100%;
    }
`

export default ProjectCardWrapper;