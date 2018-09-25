import React, { Component } from 'react';

class Check extends Component {
    constructor(props) {
        super(props)

        this.state = {
            check: false
        }
    }


    onInputChange = () => {
        this.setState({check: !this.state.check})
    }

    render() {
        return (
            <div>
                <input type="checkbox" onChange={()=>this.props.changeChecked(this.props.id)} checked={this.props.checked} />
            </div>
        )
    }
}

export default Check;