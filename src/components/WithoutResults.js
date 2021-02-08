import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class WithoutResults extends React.Component {

    constructor(props) {
        super(props) // solo lectura los props
        this.state = {}

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if (this.props.task !== '') {
            this.props.addTask()
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        /*
        <div className="d-flex mb-2 bd-highlight">
                <div className="p-2 pb-0 flex-grow-1 bd-highlight">
                    <p className="fs-4 mb-0">Sin resultados. Presione el botón para agregar una tarea</p>
                </div>
                <div className="p-2 pb-0 bd-highlight">
                    <button className="btn btn-outline-success" type="button" onClick={this.handleClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="3 4 10 10">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                </div>
            </div>
        */
        return (
            <div className="flex flex-row">
                <div className="flex flex-none items-center">
                </div>
                <div className="flex flex-grow">
                    <h1 className="">Sin resultados. Presione el botón para agregar una tarea</h1>
                </div>
                <div className="flex flex-none items-center">
                    <button type="button" onClick={this.handleClick}>
                        <FontAwesomeIcon color="green" icon={faPlus} size="lg" />
                    </button>
                </div>
            </div>
        )
    }
}