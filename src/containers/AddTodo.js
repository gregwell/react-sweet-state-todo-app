import React from 'react'
import todosSelectors from '../stores/todos/todos.selectors'
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const AddTodo = () => {
  let input

  const [, { addTodo }] = todosSelectors.useTodosActions()

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo(input.value)
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <Button type="submit">
          Add Todo
        </Button>
      </form>
    </div>
  )
}

export default AddTodo
