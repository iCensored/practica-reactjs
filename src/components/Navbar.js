import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import "tailwindcss/tailwind.css"

export default class Navbar extends React.Component {

    constructor(props) {
        super(props) // solo lectura los props
        this.state = {}
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        let tasks = ''
        if (this.props.tasksActive) {
            tasks = (
                <Link className="mr-5 flex flex-grow" to="/list">
                    <h1>Tasks</h1>
                </Link>
            )
        } else {
            tasks = (
                <Link className="mr-5 flex flex-grow invisible" to="/list">
                    <h1>Tasks</h1>
                </Link>
            )
        }

        console.log(tasks)
        return (
            <nav className="w-screen text-white bg-indigo-900 flex flex-row align-center items-center justify-items-auto fixed">
                <Link className="mr-5 flex flex-none items-center" to="/home">
                    <img className="w-6 ml-2 mr-1" src="https://images.emojiterra.com/google/android-pie/512px/1f3e0.png" alt="casa" />
                    <h1 className="text-lg font-semibold">Inicio</h1>
                </Link>
                {tasks}
                {this.props.logInOrSignOut}
            </nav>
        )
    }
}