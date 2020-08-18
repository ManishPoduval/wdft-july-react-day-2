import React, {useState} from 'react'

//using state in functions with the help of hooks
function ButtonFunc(props){

    const [count, setCount] = useState(props.startCount)

    return <button onClick={() => setCount(count+1)}>
                {count} {props.children}
        </button>
}


export default ButtonFunc
