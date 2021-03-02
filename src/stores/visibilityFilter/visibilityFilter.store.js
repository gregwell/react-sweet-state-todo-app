import { createStore } from 'react-sweet-state'
import actions from './visibilityFilter.actions'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const initialState = VisibilityFilters.SHOW_ALL

const visibilityFilterStore = createStore({ initialState, actions })

export default visibilityFilterStore