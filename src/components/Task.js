import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* Estilos */
import './Task.css'
/*Componente que obtiene una tarea */
class Task extends Component {
    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.tarea.done ? 'gray' : 'green', //Si la tarea es true retorna gray sino yellow
            textDecoration: this.props.tarea.done ? 'line-through' : 'none'
        }
    }
    render() {
        /* Desestructuramos la tarea que le mandamos atraves de los props en Tasks*/
        const { tarea } = this.props;
        return (
            <div style={ this.StyleCompleted() }>
                { tarea.id } - { tarea.title } - { tarea.description } - { tarea.done }
                   <input type="checkbox" onChange={this.props.updateDone.bind(this, tarea.id)}/>
                   <button
                   className="btnDelete"
                   title="Eliminar"
                   onClick={this.props.deleteTask.bind(this, tarea.id)}
                   >
                       x
                   </button>
            </div>
        )
    }
}

/* Tipo de dato que espera el componente */ 
Task.propTypes = {
    tarea: PropTypes.object.isRequired
}
export default Task