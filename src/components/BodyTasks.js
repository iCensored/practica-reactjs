import React from 'react'
import ListTasks from './ListTasks'

export default class BodyTasks extends React.Component {

    constructor(props) {
        super(props) // solo lectura los props
        this.state = {
            task: '',
            tasks: [],
            edit: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.cleanTask = this.cleanTask.bind(this)
    }

    handleChange(e) {
        this.setState({ task: e.target.value })
    }

    cleanTask() {
        this.setState({ task: '' })
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        /*
        <div className="">
                <div className="d-flex mb-2 bd-highlight">
                    <div className="p-2 pb-0 flex-grow-1 bd-highlight">
                        <input className="form-control" type="text" placeholder="Filter for task" value={this.state.task} onChange={this.handlerChange} aria-label="default input example" />
                    </div>
                </div>
                <ListTasks task={this.state.task} cleanTask={this.cleanTask} />
            </div>
        */
        return (
            <>
                <input className="border-r-0 border-t-0 mb-2 p-1" type="text" placeholder="Filtered tasks" name="text" onChange={this.handleChange} value={this.state.email} id="text" />
                <ListTasks task={this.state.task} cleanTask={this.cleanTask} />
            </>
        )
    }
}