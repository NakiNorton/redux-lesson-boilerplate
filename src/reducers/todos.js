export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, 
        { 
        id: Date.now(), 
        todo: action.todo, 
        completed: false 
        }];
    case 'UPDATE_STATUS':
      return state.map(todo => 
        action.id === todo.id ? { ...todo, completed: !todo.completed } : todo
      );

      // Need to refactor - filter works once but mutates state so can't be used again 
    case 'FILTER_TASKS':
      let value = action.filter
      if(value === 'all') {
        return state
      } else { 
        let filteredTasks = state.filter(task => {
          return task.completed === value
        })
      return filteredTasks
    }
    default:
      return state;
  }
}