import {Component} from 'react'

class ClassComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.click = this.click.bind(this)
    }

    click() {
        console.log(this.state)
        this.setState({counter: this.state.counter + 1})
    }

    render() {

        return (
            <div>
                <h1>Component de classe</h1>
                <h3>{this.props.subtitle}</h3>
                <div>{this.state.counter}</div>
                <button onClick={this.click}>+1</button>
            </div>
        )
    }
}

export default ClassComponent;