import React from 'react';

class Qtwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { surname: "......" };
    }

    componentWillMount() {
        console.log("componentWillMount()");
    }

    componentDidMount() {
        console.log("componentDidMount()");
    }

    changeState() {
        this.setState({ surname: "MASU!" });
    }

    render() {
        return (
            <div>
                <h1>Hello,My name is AMIR{this.state.surname}</h1>
                <h3>
                    <button onClick={this.changeState.bind(this)}>Click Here</button>
                </h3>
            </div>);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }

    componentWillUpdate() {
        console.log("componentWillUpdate()");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
}

export default Qtwo;