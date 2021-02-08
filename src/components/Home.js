import React, { Component } from 'react'

export default class Home extends Component {

    constructor(props) {
        super(props) // solo lectura los props
        this.state = {}
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="grid grid-cols-1 place-items-center">
                <img className="md:h-96 md:mt-44" src="https://raw.githubusercontent.com/rexxars/react-hexagon/master/logo/react-hexagon.png" alt="" />
            </div>
        )
    }
}