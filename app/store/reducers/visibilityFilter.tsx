
import { SET_VISIBILITY_FILTER } from '../actions'
import { VisibilityFilters } from '../models'
const { SHOW_ALL } = VisibilityFilters

export default function visibilityFilter(state: VisibilityFilters = SHOW_ALL, action: any) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
