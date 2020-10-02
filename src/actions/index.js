export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
})

export const updateStatus = id => ({
  type: 'UPDATE_STATUS',
  id
})

export const setDisplayFilter = filter => ({
  type: 'SET_DISPLAY_FILTER',
  filter
})

export const DisplayFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}