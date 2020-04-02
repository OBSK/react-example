import React, { Component } from 'react';
import PropTypes from 'prop-types'
/* Componente que lista todas las tareas */
/* Importamos el componente Task (Tarea) */
import Task from './Task';
class Tasks extends Component {
    render() {
        return (
            this.props.tasks.map((e) => 
            <Task
                tarea={e}
                key={ e.id }
                deleteTask={this.props.deleteTask}
                updateDone= {this.props.updateDone}
            />
            )
        )
    }
}
/* Validamos que el componente reciba como parametro un array que sea requerido */
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}
export default Tasks