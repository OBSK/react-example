import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
/* eslint-disable */
//Deshabilitamos todos los comentarios
/*Es el array de objetos de las tareas */
import tasksJson from './examples/tasks.json';

/*Imporamos el componente Tasks */
import Tasks from './components/Tasks';

/* Importamos el componente TaskForm */
import TaskForm from './components/TaskForm'

/* Importamos el componente Posts */
import Posts from './components/Posts'

class App extends Component {
  /*Guardamos en el estado la variable task y seteamos los datos del tasksJson */
  state = {
    tasks: tasksJson
  }
  //Agregando una tarea
  addTask = (title, descripcion) => {
    const newTask = {
      title: title,
      description: descripcion,
      id: this.state.tasks.length //Obtiene la longitud
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }
  //Eliminando una tarea 
  deleteTask = (id)  => {
    const delTask = this.state.tasks.filter( task => task.id !== id);
    this.setState({
      tasks: delTask
    })
  }

  //Cambiar el estado de una tarea
  updateDone = (id)  => {
    const updateTask = this.state.tasks.map(task => {
      if(task.id === id) {
        task.done = !task.done //Si el estado estaba en true le agregamos el valor contrario
      }
      return task;

    });
    this.setState({
      tasks: updateTask
    })
  }
  //Inicializamos el componente y enviamos el props conteniendo el array de objetos con el nombre tasks
  render () {
    return (
      <div>
        <Router>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/posts">Posts</Link>
          <Route exact path="/" render={() => {
            return (
            <div>
              <TaskForm 
                addTask={ this.addTask }
              /> 
              <Tasks 
                tasks={ this.state.tasks } 
                deleteTask= { this.deleteTask } 
                updateDone= { this.updateDone }
              />
              </div>
            )
          }}>
          </Route>
          <Route path="/posts" component={Posts} />
        </Router>
        
      </div>
    )
  }
}

export default App;
