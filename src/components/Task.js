import React from 'react'
import EditTask from './EditTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

export default class Task extends React.Component {

    constructor(props) {
        super(props) // solo lectura los props
        this.state = {
            edit: false
        }

        this.handleEdit = this.handleEdit.bind(this, this.state.newTask)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleEdit() {
        this.setState({ edit: !this.state.edit })
    }

    handleDelete(e) {
        this.props.deleteTask(this.props.task)
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        if (this.state.edit) {
            return (
                <EditTask task={this.props.task} updateTask={this.props.updateTask} updateEdit={this.handleEdit} />
            )
        } else {
            return (
                <div className="flex flex-row items-center">
                    <div className="flex-none">
                    </div>
                    <div className="flex-grow">
                        <h1 className="break-all text-xl overflow-ellipsis overflow-hidden ...">
                            {this.props.task}
                        </h1>
                    </div>
                    <div className="flex-none">
                        <button className="mr-1" type="button" onClick={this.handleEdit}>
                            <FontAwesomeIcon className="text-xl" color="blue" icon={faPencilAlt} />
                        </button>
                        <button type="button" onClick={this.handleDelete}>
                            <FontAwesomeIcon className="text-xl"color="green" icon={faCheck} />
                        </button>
                    </div>
                </div>
            )
        }
    }
}