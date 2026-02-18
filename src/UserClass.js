import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        console.log("child constructor");
    }

    handleCounter(){
        console.log(this);
        this.setState((prevState)=>({
            count: prevState.count+1
        }))
    }

    componentDidUpdate() {
        console.log("user class updated");
    }

    componentDidMount() {
        console.log("child component mounted");
    }
    render() {
        console.log("child render");
        return (
            <div>
                <UserContext.Consumer>
                {/* <div>{this.props.name}</div> */}
                {(data)=><p>{data?.loggedInUser}</p>}
                </UserContext.Consumer>
                <div>{this.props.state}</div>
                <div>{this.state.count}</div>
                <button onClick={this.handleCounter.bind(this)}>Increase</button>
            </div>
        )
    }

    componentWillUnmount() {
        console.log("user class unmount");
    }
}

export default UserClass;