import React from 'react'
import { updateStatus } from '../actions'
import { connect } from 'react-redux';

const ToDo = ({ id, todo, completed, updateStatus}) => {

  return (
      <li className={completed ? 'completed' : 'not-completed'}
      onClick={() => updateStatus(id)}>{todo}</li>
  )
}

const mapDispatchToProps = dispatch => ({
  updateStatus: id => dispatch(updateStatus(id))
})

export default connect(null, mapDispatchToProps)(ToDo);