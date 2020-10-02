import { DisplayFilters } from '../actions'

const displayFilter = (state = DisplayFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_DISPLAY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default displayFilter