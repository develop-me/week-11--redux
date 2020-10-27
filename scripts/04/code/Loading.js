import { Component } from "react";

class Loading extends Component {
    render() {
        const { children, loaded } = this.props;

        return loaded ? children : (
            <div className="progress">
                <div
                    className="progress-bar progress-bar-striped active"
                    style={{ width: "100%" }}
                />
            </div>
        );
    }
}

export default Loading;
