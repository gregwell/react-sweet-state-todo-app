# React Sweet State TODO app - project analysis

**Created:** 23.02.2021, **last updated:** 24.02.2021

- [Motivation](#motivation)
- [Data flow map](#data-flow-map)
- [How things work](#how-things-work)
- [Roadmap to show and toggle todos](#roadmap-to-show-and-toggle-todos)

# Motivation:

This simple app originally come from [redux todo list example](https://redux.js.org/tutorials/fundamentals/part-5-ui-react), then was [converted from redux to react-sweet-state by @matterialize](https://github.com/matterialize/todos-redux-to-react-sweet-state) and finally I drew two maps to understand react-sweet-state logic.

# Data flow map:

![https://raw.githubusercontent.com/gregwell/react-sweet-state-todo-app/master/images/react-sweet-state.png](https://raw.githubusercontent.com/gregwell/react-sweet-state-todo-app/master/images/react-sweet-state.png)

# How things work:

### A hook without a selector

- the selector in the first hook of `todoSelectors` is **`null` - i**t's because **this hook is used only to access the actions, doesn't need any data.**

```css
const todoSelectors = {
  **useTodosActions: null,**
  useVisibleTodos: (todos, visibilityFilter) => {
    something...
    }
  }
}
```

- then we make use of this hook, we **ignore the first element in the array.**

```css
const [, { addTodo }] = todosSelectors.useTodosActions()
```

- this way we get the access to the `addTodo` action:

```css
addTodo: text => ({ setState }) => {
      setState(todos => {
        todos.push({
          id: nextTodoId++,
          text,
          completed: false
        })
      })
    },
```

### Understanding `setState`

- sweet-state will handle providing the `setState` parameter behind the scenes
- when we call `setState` it will do **a shallow merge** with what is currently in the store (example: `setState({ listName })` :`{ ...state, listName }`)

# Roadmap to show and toggle todos

![https://raw.githubusercontent.com/gregwell/sweet/master/images/show-todos-and-allow-toggle.png](https://raw.githubusercontent.com/gregwell/sweet/master/images/show-todos-and-allow-toggle.png)

### Initial layout:

![https://raw.githubusercontent.com/gregwell/react-sweet-state-todo-app/master/images/layout.png](https://raw.githubusercontent.com/gregwell/react-sweet-state-todo-app/master/images/layout.png)

## A study based on:

[https://medium.com/@matthew.bajorek/react-sweet-state-intro-304ce0a619bd](https://medium.com/@matthew.bajorek/react-sweet-state-intro-304ce0a619bd)

[https://www.emgoto.com/react-sweet-state/](https://www.emgoto.com/react-sweet-state/)
