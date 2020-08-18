import React from 'react'

function StudentDetail(props){

    let containerStyles = {
        display: 'flex',
        // marginLeft: props.margin *10 + 'px'
    }
    

    return (
        <div style={containerStyles}>
            <p>{props.student.name}</p>
            <button onClick={() => props.onDelete(props.id) }>Delete</button>
        </div>
    )
}


export default StudentDetail


