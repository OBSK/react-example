import React, { Component } from 'react'

class TaskForm extends Component {
    state = {
        title: '',
        descripcion: ''
    }
    //Enviando el formulario 
    enviar = (e) => {
        
        this.props.addTask(this.state.title, this.state.descripcion)
        //Enviando sin que actualize la pagina
        e.preventDefault();
    }
    //Evento que detecta el ingreso de texto de los inputs
    onChange = (e) => {
        //console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value // Seteamos atraves del nombre del input los valores con el target.value
        });
    }

    render() {
        
        return (
            <form onSubmit={ this.enviar }>
                <input 
                    name="title"
                    type="text" 
                    placeholder="Escribe una tarea" 
                    onChange={ this.onChange } 
                    value={ this.state.title }
                />
                <br />
                <textarea 
                    name="descripcion"
                    placeholder="Escribe una descripcion"
                    onChange={ this.onChange }  
                    value={ this.state.descripcion }
                ></textarea>
                <input type="submit"/>
            </form>
        )
    }
}

export default TaskForm