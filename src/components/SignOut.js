import React from 'react'
import firebase from '../firebase'

export default class SignOut extends React.Component {

    constructor(props) {
        super(props) // solo lectura los props
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
        console.log("El formulario se envió!")
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
        return (
            <div className="position-relative">
                <div className="card float-end w-75 my-3 position-absolute top-0 start-50 translate-middle-x">
                    <h5 className="card-title m-3">Sign in</h5>
                    <form className="m-3" onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" onChange={this.handleChange} value={this.state.email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" onChange={this.handleChange} value={this.state.password} id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}