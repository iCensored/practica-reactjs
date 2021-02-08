import React from 'react'
import WithoutResults from './WithoutResults'
import Task from './Task'

export default class ListTasks extends React.Component {

    constructor(props) {
        super(props) // solo lectura los props
        this.state = {
            tasks: ['asd', 'dsa']
        }

        this.handleClick = this.handleClick.bind(this) // aca
        this.deleteTask = this.deleteTask.bind(this, '')
        this.updateTask = this.updateTask.bind(this, '', '')
    }

    handleClick(e) {
        if (this.props.task !== '') {
            this.setState({ tasks: [...this.state.tasks, this.props.task] })
            this.props.cleanTask()
        }
    }

    updateTask(refThis, asd, findTask, replaceTask) {
        if (replaceTask === findTask && findTask !== '') {
            return true
        }
        if (replaceTask !== findTask && replaceTask !== '') {
            let newTasks = this.state.tasks.map((t) => {
                if (t === findTask) {
                    return replaceTask
                }
                return t
            })
            this.setState({ tasks: newTasks })
            console.log('La tarea fue actualizada correctamente!')
            return true
        }
        return false
    }

    deleteTask(refThis, taskSelect) {
        const index = this.state.tasks.indexOf(taskSelect);
        if (index > -1) {
            let newTasks = this.state.tasks
            newTasks.splice(index, 1);
            this.setState({ tasks: newTasks })
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const tasksFilter = this.state.tasks.filter(t => t.includes(this.props.task))
        if (tasksFilter.length >= 1) {
            return (
                <div> {
                    tasksFilter.map((task) => {
                        return (
                            <Task key={task} task={task} updateTask={this.updateTask} deleteTask={this.deleteTask} />
                        )
                    })
                } </div>
            )
        } else {
            return (
                <WithoutResults addTask={this.handleClick} />
            )
        }
    }
}