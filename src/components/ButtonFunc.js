import React, {useState} from 'react'

function ButtonFunc(props){

    const [count, setCount] = useState(props.startCount)

    return <button onClick={() => setCount(count+1)}>
                {count} {props.children}
        </button>
}


export default ButtonFunc
