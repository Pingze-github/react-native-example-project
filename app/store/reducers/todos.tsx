
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions'

type TODO = {
  text: string,
  completed: boolean
}

export default function todos(state: TODO[] = [], action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo: TODO, index) => {
        if (index === action.index) {
          return {...todo, ...{
            completed: !todo.completed
          }}
        }
        return todo
      })
    case REMOVE_TODO:
      const s =  state.filter((todo: TODO, index) => {
        if (index !== action.index) return true
      })
      return s
    default:
      return state
  }
}