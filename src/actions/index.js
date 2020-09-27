export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
})

export const updateStatus = id => ({
  type: 'UPDATE_STATUS',
  id
})