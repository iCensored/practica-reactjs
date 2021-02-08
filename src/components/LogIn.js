import React from 'react'
import { Link, Redirect } from "react-router-dom";

export default class LogIn extends React.Component {

    constructor(props) {
        super(props) // solo lectura los props
        this.state = {
            email: '',
            password: '',
            redirect: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.logIn(this.state.email, this.state.password)
        this.setState({ redirect: '/home' })
    }

    handleChange(e) {
        let value = e.target.value
        let name = e.target.name

        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="grid grid-cols-2 gap-2">
                <div className="h-screen bg-center bg-cover" style={{
                    backgroundImage: "url(" + "https://wallpaperaccess.com/full/3949076.jpg" + ")"
                }}>
                </div>
                <div className="grid grid-cols-1 place-items-center">
                    <div className="md:w-96">
                        <form onSubmit={this.handleSubmit} className="flex flex-col">
                            <div className="flex justify-center">
                                <h1 className="mb-8 text-2xl font-medium">Log In</h1>
                            </div>
                            <label className="mb-2" htmlFor="email">Email</label>
                            <input className="p-1 border-r-0 border-t-0 mb-6" type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="example@email.com" id="email" />
                            <label className="mb-2" htmlFor="password">Password</label>
                            <input className="p-1 border-r-0 border-t-0 mb-6" type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="password" id="password" />
                            <div className="flex flex-row items-center">
                                <button type="submit" className="bg-blue-500 rounded-full border-b-2 border-r-2 border-cGray-500">
                                    <h1 className="m-2 text-white font-medium ">Submit</h1>
                                </button>
                                <Link className="ml-4" to="/signin">
                                    <h1>Sign in</h1>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}