
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// 枚举变量
export enum VisibilityFilters {
  SHOW_ALL= 'SHOW_ALL',
  SHOW_COMPLETED= 'SHOW_COMPLETED',
  SHOW_ACTIVE= 'SHOW_ACTIVE'
}

export default {
  addTodo(text: string) {
    return { type: ADD_TODO, text }
  },
  
  toggleTodo(index: number) {
    return { type: TOGGLE_TODO, index }
  },

  removeTodo(index: number) {
    return { type: REMOVE_TODO, index }
  },
  
  setVisibilityFilter(filter: VisibilityFilters) {
    return { type: SET_VISIBILITY_FILTER, filter }
  },
}
