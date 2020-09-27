import React from 'react'

const ToDo = ({ id, todo}) => {

  const updateStatus = (e) => {
    e.preventDefault()
    
  }

  return (
    <section className='ToDo' id={id}>
      <li onclick={updateStatus}>{todo}</li>
    </section>
  )
}

export default ToDo;