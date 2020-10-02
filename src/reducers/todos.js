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
    default:
      return state;
  }
}