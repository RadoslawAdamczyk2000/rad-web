import styled from 'styled-components';
const ProjectItemWrapper = styled.article`
    height:25rem;
    overflow:hidden;
    position:relative;
    width:35rem;
    & > .content{
        align-items:center;
        background-color:${({theme}) => theme.colors.page.card};
        display:flex;
        flex-direction:column;
        height:25rem;
        left:0;
        justify-content:center;
        position:absolute;
        row-gap:4rem;
        top:110%;
        transition:.12s linear transform;
        width:35rem;
        & > a{
            transition:.12s linear color;
            &:hover{
                color:${({theme}) => theme.colors.page.buttons};
            }
        }
        & > .title{
            align-items:center;
            display:flex;
            font-size:2.3rem;
            font-weight:700;
            justify-content:center;
            text-align:center;
            width:95%;
        }
        & > .icons{
            align-items:center;
            column-gap:.5rem;
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            font-size:1.65rem;
            justify-content:center;
        }
        & > .button{
            font-size:1.95rem;
            font-weight:600;
            overflow:hidden;
            padding:.25rem 1rem;
            position:relative;
            &::before{
                background-color:${({theme}) => theme.colors.page.buttons};
                bottom:0;
                height:.2rem;
                left:-110%;
                transition:.12s linear transform;
                width:100%;
            }
            &:hover::before{
                transform:translateX(110%);
            }
        }
    }
    &:hover > .content{
        transform:translateY(-110%);
    }
`
export default ProjectItemWrapper;