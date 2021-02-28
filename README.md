# React Sweet State TODO app

**Created:** 23.02.2021, **last updated:** 28.02.2021

This simple app originally come from [redux todo list example](https://redux.js.org/tutorials/fundamentals/part-5-ui-react), then was [converted from redux to react-sweet-state](https://github.com/matterialize/todos-redux-to-react-sweet-state) by [@mattbajorek](https://github.com/mattbajorek). Along the way, I created *my very first pull request* to fix the mistake with the names! 😎 I drew two mind maps to understand react-sweet-state data flow. Then I planned some new features and a new Material-ui based design and I'm going to apply it.

### Goals:

1. **Understand react-sweet-state data flow logic as an alternative to Redux.**
    - see that using redux is not mandatory
    - understand the real goals of state management in React
    - compare an app without any state management system, an app with redux and an app with react-sweet-state and draw conclusions
2. **Apply Material-ui framework components to beautify the app.**
    - design a new Material-ui based look for the application and apply it.
3. **Expand the capabilities of an existing app.**
    - add a few more features to fully understand the data flow

### Table of contents:

**Understanding react-sweet-state:**

- [Data flow map](#data-flow-map)
- [How things work](#how-things-work)
- [Roadmap to show and toggle todos](#roadmap-to-show-and-toggle-todos)

**Planning:**

- [Planning new features](#planning-new-features)
- [Planning new layout](#planning-new-layout)

**Development:**

- [Development](#development)



## Data flow map:

![https://raw.githubusercontent.com/gregwell/react-sweet-state-todo-app/master/images/react-sweet-state.png](https://raw.githubusercontent.com/gregwell/react-sweet-state-todo-app/master/images/react-sweet-state.png)

## How things work:

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

## A roadmap to show and toggle todos

![https://raw.githubusercontent.com/gregwell/sweet/master/images/show-todos-and-allow-toggle.png](https://raw.githubusercontent.com/gregwell/sweet/master/images/show-todos-and-allow-toggle.png)

# Planning new features

### Initial features:

1. Basic todo app
    - **Add a todo**
    - **Display todos as an unordered list**
    - **Click on a todo make it completed (strikethrough text)**
    - **Filter by completion**

### Planned new features

1. Displaying todo
    - **Selection box instead of strikethrough**
2. Todo personalization 
    - **Select a due date and time for a todo**
    - **Select a color for a todo**
    - **Select a todo Segoe UI emoji for a todo**
3. New filters
    - **Filter by color**
    - **Filter by due date**
4. Background personalization
    - **Change the page background image**

# Planning new layout

### Initial layout:

![https://raw.githubusercontent.com/gregwell/react-sweet-state-todo-app/master/images/layout.png](https://raw.githubusercontent.com/gregwell/react-sweet-state-todo-app/master/images/layout.png)

### Planned new layout:

## A study based on:

[https://medium.com/@matthew.bajorek/react-sweet-state-intro-304ce0a619bd](https://medium.com/@matthew.bajorek/react-sweet-state-intro-304ce0a619bd)

[https://www.emgoto.com/react-sweet-state/](https://www.emgoto.com/react-sweet-state/)

[https://raw.githubusercontent.com/gregwell/sweet/master/images/show-todos-and-allow-toggle.png](https://raw.githubusercontent.com/gregwell/sweet/master/images/show-todos-and-allow-toggle.png)
