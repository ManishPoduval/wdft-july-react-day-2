// class component 

import React from 'react'
import StudentDetail from './StudentDetail'

class Students extends React.Component {

    constructor(props){
        super(props) // read more on this
        this.state = {
            students: [
                {name: 'Lucy', city: 'Antartica'},
                {name: 'Ana', city: 'Spain'},
                {name: 'Ivana', city: 'Germany'},
                {name: 'Aurore', city: 'France'}
            ], 
            newName: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            newName: event.currentTarget.value
        })
    }

    handleClick = () => {
        let cloneStudents = [...this.state.students]
        cloneStudents.push({name: this.state.newName})
        this.setState({
            students: cloneStudents,
            newName: ''
        })
    }

    handleSort = () => {
        let cloneStudents = [...this.state.students]
        cloneStudents.sort((a,b) => {
            if (a.name < b.name){
                return -1
            }
            else if (a.name > b.name){
                return 1
            }
            return 0
        })

        console.log(cloneStudents)
        this.setState({
            students: cloneStudents,
        })
    }

    handleDelete = (id) => {
        console.log('Delete working!', id)
        let cloneStudents = [...this.state.students]
        cloneStudents.splice(id, 1)
        this.setState({
            students: cloneStudents
        })

    }

    render() {
        return <div>
            <input value={this.state.newName} onChange={this.handleChange} placeholder="Enter name"></input>
            <button onClick={this.handleClick} >Submit</button>
            <button onClick={this.handleSort} >Sort</button>
            {
              this.state.students.map((student, i) => {
                return <StudentDetail 
                        key={i} 
                        student={student}
                        id={i} 
                        onDelete={this.handleDelete}
                        />
              })  
            }
        </div>
    }
}

export default Students