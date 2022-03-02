import React from 'react';
import StackWrapper from './styles/StackWrapper';
interface Istack {
    stack : Array<any>
}
const Stack = ({stack}:Istack) => {
    return(
        <StackWrapper>
            {stack.map(i => <li>{i}</li>)}
        </StackWrapper>
    )
}
export default Stack;