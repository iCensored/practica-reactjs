import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import firebase from '../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

//import Links from './components/Links'
import Navbar from './Navbar'
import LogIn from './LogIn'
import SignIn from './SignIn'
import Home from './Home'
import List from './List'

export default class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }

        this.logIn = this.logIn.bind(this)
        this.signOut = this.signOut.bind(this)
    }

    logIn(email, password) {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then((user) => {
                        this.setState({ user })
                    })
                console.log("Iniciaste sesión correctamente!")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
    }

    signOut(e) {
        e.preventDefault()
        firebase.auth().signOut().then(() => {
            this.setState({
                user: null,
            })
            console.log("Saliste de la sesión correctamente!")
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    componentDidMount() {
    }

    render() {
        const user = firebase.auth().currentUser
        console.log("Usuario: ", user)
        const tasksActiveOrDisable = user ? true : false

        const logInOrSignOut = user ?
            <Link className="flex flex-none items-center" onClick={this.signOut}>
                <h1>Logout</h1>
                <FontAwesomeIcon className="m-2" icon={faUserCircle} size="2x" />
            </Link> :
            <Link className="flex flex-none items-center" to="/login">
                <h1>Login</h1>
                <FontAwesomeIcon className="m-2" icon={faUserCircle} size="2x" />
            </Link>
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <BrowserRouter>
                    <Navbar logInOrSignOut={logInOrSignOut} signOut={this.signOut} tasksActive={tasksActiveOrDisable} />
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <LogIn logIn={this.logIn} />
                        </Route>
                        <Route path="/signin">
                            <SignIn />
                        </Route>
                        <Route path="/list">
                            <List />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
