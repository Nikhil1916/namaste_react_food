import UserClass from "./UserClass";
import React from "react";

class About  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
        console.log("parent constructor");
    }


    componentDidMount() {
        console.log("parent mounted");
    }

    handleClick = () => {
        this.setState({
            count: ++this.state.count
        })
    }

    componentDidUpdate() {
        console.log("About us component did update");
    }
    render() {
        console.log("parent render");
        return (
            <div>
                <h1 onClick={this.handleClick}>ABout us page</h1>
                <UserClass name={"Nikhil"} state={"Punjab"} />
                <UserClass name={"Nikhil"} state={"Punjab"} />
            </div>
        )
    }
}

export default About;