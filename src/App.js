import {Component} from 'react';
import {Button, TextInput, FormLabel, FormGroupText} from 'nsw-ds-react'
import './App.css';
import 'nsw-design-system/dist/css/main.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!event.target.email.value) {
            alert("Email is required");
        } else if (!event.target.email.value) {
            alert("Valid email is required");
        } else if (!event.target.password.value) {
            alert("Password is required");
        } else if (
            event.target.email.value && event.target.password.value
        ) {
            alert("Successfully logged in");
            event.target.username.value = "";
            event.target.email.value = "";
            event.target.password.value = "";
        } else {
            alert("Wrong email or password combination");
        }
    }

    render() {
        return (
            <div>
                <div className="nsw-container nsw-body-content nsw-p-top-lg nsw-p-bottom-lg">
                    <div className="nsw-grid">
                        <div className="nsw-col nsw-col-lg-6 nsw-offset-lg-3">
                            <div className="nsw-section--box">
                                <form className="nsw-form" onSubmit={this.handleSubmit}>
                                    <h4 className="nsw-section-title">Sign up form</h4>
                                    <FormGroupText
                                        htmlId="username"
                                        label="Username"
                                    />
                                    <FormGroupText
                                        htmlId="email"
                                        label="Email"
                                    />
                                    <FormGroupText
                                        helper="Must be at least 8 characters"
                                        htmlId="password"
                                        label="Password"
                                    />
                                    <Button
                                        type="submit">
                                        Sign Up
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
