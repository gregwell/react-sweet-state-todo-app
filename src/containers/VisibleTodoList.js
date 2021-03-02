import React from 'react'
import TodoList from '../components/TodoList'
import multiStoreSelectors from '../stores/multi-store.selectors'
import visibilityFilterSelectors from '../stores/visibilityFilter/visibilityFilter.selectors'

import { Alert, message } from 'antd'
import 'antd/dist/antd.css';


const VisibleTodoList = ({ children }) => {
  const [visibleTodos, { toggleTodo }] = multiStoreSelectors.useVisibleTodos()
  const [visibilityFilter, visibilityFilterActions] = visibilityFilterSelectors.useVisibilityFilter()


  return (
    <div>
    <TodoList
      todos={visibleTodos}
      toggleTodo={toggleTodo}>
      {children}
    </TodoList>
    <Alert message="Showing: " description={visibilityFilter} />
    </div>
  )
}

export default VisibleTodoList