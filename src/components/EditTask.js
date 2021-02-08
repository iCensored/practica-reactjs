import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

export default class EditTask extends React.Component {

    constructor(props) {
        super(props) // solo lectura los props
        this.state = {
            newTask: this.props.task,
            oldTask: this.props.task
        }

        this.handleEdit = this.handleEdit.bind(this, this.state.newTask)
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleEdit() {
        //console.log(this.state.oldTask)
        if (this.props.updateTask(this.state.oldTask, this.state.newTask)) {
            this.props.updateEdit()
        }
    }

    handleCancel(e) {
        this.props.updateEdit()
    }

    handleChange(e) {
        this.setState({ newTask: e.target.value })
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            if (this.props.updateTask(this.state.oldTask, this.state.newTask)) {
                this.props.updateEdit()
            }
        }
        if (e.key === 'Escape') {
            this.props.updateEdit()
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="flex flex-row items-center">
                <div className="flex-none">
                </div>
                <div className="flex-grow">
                    <input className="border-0 p-0 text-xl" type="text" placeholder="Edit task" value={this.state.newTask} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
                </div>
                <div className="flex-none">
                    <button className="mr-1" type="button" onClick={this.handleEdit}>
                        <FontAwesomeIcon className="text-xl" color="blue" icon={faPencilAlt} />
                    </button>
                    <button className="ml-1" type="button" onClick={this.handleCancel}>
                        <FontAwesomeIcon className="text-2xl" color="red" icon={faTimes} />
                    </button>
                </div>
            </div>
        )
    }
}