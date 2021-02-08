import React from 'react'

import BodyTasks from './BodyTasks'

export default class List extends React.Component {

    constructor(props) {
        super(props) // solo lectura los props
        this.state = { }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        /*
        <div className="position-relative">
                <div className="card float-end p-3 w-75 my-3 position-absolute top-0 start-50 translate-middle-x">
                    <div className="d-flex mb-2 bd-highlight">
                        <div className="p-2 pb-0 flex-grow-1 bd-highlight">
                            <h1 className="mb-0">Tasks</h1>
                        </div>
                    </div>
                    <BodyTasks />
                </div>
            </div>
        */
        return (
            <div className="md:mx-60 md:pt-20">
                <div className="m-3">
                    <div className="flex flex-col">
                        <h1 className="text-3xl mb-2">Tasks</h1>
                        <BodyTasks />
                    </div>
                </div>
            </div>
        )
    }
}