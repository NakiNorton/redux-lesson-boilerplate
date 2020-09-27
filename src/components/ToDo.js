import React from 'react'

const ToDo = ({ id, todo}) => {
  return (
    <section className='ToDo' id={id}>
      <li>{todo}</li>
    </section>
  )
}

export default ToDo;