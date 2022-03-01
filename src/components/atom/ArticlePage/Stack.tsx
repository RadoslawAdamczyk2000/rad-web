import React from 'react';
interface Istack {
    stack : Array<any>
}
const Stack = ({stack}:Istack) => {
    return(
        <div>
            <ul>
                {stack.map(i => <li>{i}</li>)}
            </ul>
        </div>
    )
}
export default Stack;