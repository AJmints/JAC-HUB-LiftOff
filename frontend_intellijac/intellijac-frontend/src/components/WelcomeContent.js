import * as React from 'react';
import "../styles/Authentication.css";

export default class WelcomeContent extends React.Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="jumbotron ">
                    <div className="container">
                <h1 className="dispaly-4">Welcome!!</h1>
                <p className="lead">Login to rule the world of quiz!!..</p>
                </div>
                </div>
            </div>
        )
    }
}