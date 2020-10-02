import React from 'react';
import Todo from './ToDo';
import { connect } from 'react-redux';
import { filterTasks } from '../actions'


const ToDoList = ({ todos, filterTasks }) => {
  const displayTodos = todos.map(todo => {
    return (
      <Todo
        {...todo}
        key={todo.id}
      />
    )
  })

  return (
    <>
      <button onClick={() => filterTasks('all')}>SHOW ALL</button>
      <button onClick={() => filterTasks(false)}>SHOW ACTIVE</button>
      <button onClick={() => filterTasks(true)}>SHOW COMPLETED</button>
    <ul>
      {displayTodos}
    </ul>
    </>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = {
  filterTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);