// class component 

import React from 'react'

class Button extends React.Component {

    constructor(props){
        super(props) // read more on this
        this.state = {
            count: this.props.startCount
        }
    }

    

    handleClick = () => {
        console.log('CLicked!!!')
        //pass an object as a parameter
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <button onClick={this.handleClick}>
                    {this.state.count} {this.props.children}
            </button>
    }
}

export default Button