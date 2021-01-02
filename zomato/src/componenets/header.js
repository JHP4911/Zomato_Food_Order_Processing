import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/restaurant.css';
import './css/header.css';
import Modal from 'react-modal';
import axios from 'axios';

const customStyles = {
    content: {
        top: '30%',
        left: '40%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-30%',
        transform: 'translate{-50%, -50%}',
        backgroundColor: 'Lightgray',
        border: 'solid 3px red'
    }
}

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            isModalOpen: false,
            isSignInModalOpen: false,
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            isLoggedIn: ''
        }
    }

    handleChange = (event, statevariable) => {
        this.setState({
            [statevariable]: event.target.value
        })
    }
    signUpHandler = (event) => {
        //make API calls
        const {
            email, password, firstname, lastname
        } = this.state;

        const signUpRequestobj = {
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname
        }
        axios({
            method: 'POST',
            url: 'http://localhost:5008/api/signup',
            headers: { 'Content-Type': 'application/json' },
            data: signUpRequestobj
        }).then(
            response => {
                if (response.data.message == 'User signed up successfully') {
                    this.setState({
                        isModalOpen: false,
                        email: '',
                        password: '',
                        firstname: '',
                        lastname: ''
                    });
                    alert(response.data.message);
                }
            }
        ).catch(
            error => {
                console.log(error);
                alert(error);
            }
        )

    }
    cancelHandler = (event) => {
        this.setState({
            isModalOpen: false,
        })
    }
    signupOpenHandler = (event) => {
        this.setState({
            isModalOpen: true,
        })
    }
    signinOpenHandler = (event) => {
        this.setState({
            isSignInModalOpen: true,
        })
    }
    loginHandler = (event) => {
        const {
            email, password
        } = this.state;

        const signInRequestobj = {
            email: email,
            password: password
        }
        axios({
            method: 'POST',
            url: 'http://localhost:5008/api/login',
            headers: { 'Content-Type': 'application/json' },
            data: signInRequestobj
        }).then(
            response => {
                if (response.data.user.length >= 1) {
                    this.setState({
                        isSignInModalOpen: false,
                        email: '',
                        password: '',
                        isLoggedIn: response.data.isAuthenticated,
                        firstname : response.data.user[0].firstname
                    });
                    sessionStorage.setItem('isLoggedIn', response.data.isAuthenticated);
                    //alert(response.data.message);
                }
            }
        ).catch(
            error => {
                console.log(error);
                alert(error);
            }
        )

    }
    cancelloginHandler = (event) => {
        this.setState({
            isSignInModalOpen: false,
        })
    }
    signoutOpenHandler  = (event) => {
        this.setState({
            firstname : '',
            isLoggedIn: false,
           
        });
        sessionStorage.setItem('isLoggedIn', false);
    }
    render() {
        const { isModalOpen,
            isSignInModalOpen,
            email,
            password,
            firstname,
            lastname,
            isLoggedIn } = this.state;
        return (
            <React.Fragment>
                <div className="header">
                    <div className="logo">e!</div>
                    <div>
                        {
                            isLoggedIn ?  
                            <div>
                                <span className="login btn">{firstname}</span>
                                <button className="btn" onClick={this.signoutOpenHandler} style = {{position: 'absolute', top: '3%', marginLeft: '4px', color: 'white', borderColor: 'white'}}
                                >Logout </button>
                            </div>    
                           
                                :
                                <div>
                                    <button className="login btn" onClick={this.signinOpenHandler}>Login </button>
                                    <button type="button" onClick={this.signupOpenHandler} className="btn" style = {{position: 'absolute', top: '3%', marginLeft: '4px', color: 'white', borderColor: 'white'}}
                                    > Create an account</button>
                                </div>
                        }
                    </div>
                </div>
                <Modal isOpen={isModalOpen} style={customStyles}>
                    <div>
                        <h3>Signup User</h3>
                        <div>
                            <span>Email : </span>
                            <input type="text" value={email} onChange={(event) => this.handleChange(event, 'email')} />
                        </div> <br />
                        <div>
                            <span>Password: </span>
                            <input type="text" value={password} onChange={(event) => this.handleChange(event, 'password')} />
                        </div> <br />
                        <div>
                            <span>First Name : </span>
                            <input type="text" value={firstname} onChange={(event) => this.handleChange(event, 'firstname')} />
                        </div> <br />
                        <div>
                            <span>Last Name : </span>
                            <input type="text" value={lastname} onChange={(event) => this.handleChange(event, 'lastname')} />
                        </div> <br />

                        <button onClick={this.signUpHandler} className="btn btn-sm btn-primary">Sign Up</button>
                        <button onClick={this.cancelHandler} className="btn btn-sm ">Cancel</button>

                    </div>
                </Modal>
                <Modal isOpen={isSignInModalOpen} style={customStyles}>
                    <div>
                        <h3>Login User</h3>
                        <div>
                            <span>Email : </span>
                            <input type="text" value={email} onChange={(event) => this.handleChange(event, 'email')} />
                        </div> <br />
                        <div>
                            <span>Password: </span>
                            <input type="text" value={password} onChange={(event) => this.handleChange(event, 'password')} />
                        </div> <br />


                        <button onClick={this.loginHandler} className="btn btn-sm btn-primary">Log in</button>
                        <button onClick={this.cancelloginHandler} className="btn btn-sm ">Cancel</button>

                    </div>
                </Modal>
            </React.Fragment >
        )
    }


}

export default Header;