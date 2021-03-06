# React Sweet State TODO app

**Created:** 23.02.2021, **last updated:** 02.03.2021

This simple app originally come from [redux todo list example](https://redux.js.org/tutorials/fundamentals/part-5-ui-react), then was [converted from redux to react-sweet-state](https://github.com/matterialize/todos-redux-to-react-sweet-state) by [@mattbajorek](https://github.com/mattbajorek). Along the way, I created *my very first pull request* to fix the mistake with the names! 😎 I drew two mind maps to understand react-sweet-state data flow. Then I planned some new features and designed a new Material-ui based layout and I'm going to apply it. Finally I want to completely rebuild the application and add new functionalities

### Goals:
1. **Improve my skills in HTML/CSS/JavaScript**
2. **Understand better React state management**
    - using redux is not mandatory, nor using react-sweet-state or any other library.
    - understand the real goals of state management in React.
    - compare an app without any state management library, an app with redux and an app using react-sweet-state and draw conclusions.
3. **Redesign and apply Material-ui framework components to beautify the app.**
    - design a new material layout of the application and apply it.
4. **Completely rebuild the app.**
    - adding new functionalities requires understanding the data flow and React multi-file project structure.
    - keeping the initial features + adding new ones and adapting to the latest design trends is like working for a real customer.

### Table of contents:

**Understanding react-sweet-state:**

- [Data flow map](#data-flow-map)
- [External notes](#external-notes)

**Planning:**

- [Planning new features](#planning-new-features)
- [Planning new layout](#planning-new-layout)

**Development:**

- [Selected Material-ui components](#selected-material-ui-components)
- [Development](#development)



## Data flow map:

![images/react-sweet-state.png](images/react-sweet-state.png)

## External notes:

- [react #react-sweet-state](https://github.com/gregwell/university-notes/blob/main/english/javascript/react.md#react-sweet-state)


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

### Initial layout

<p align="center">
    <img src="images/layout.png">
</p>

### Planned new layout
![images/sweet-todo-layout.png](images/sweet-todo-layout.png)

### Selected Material-ui components
![images/sweet-todo-layout.png](images/material-ui-components-to-use.png)

### Development

## A study based on:

[https://medium.com/@matthew.bajorek/react-sweet-state-intro-304ce0a619bd](https://medium.com/@matthew.bajorek/react-sweet-state-intro-304ce0a619bd)

[https://www.emgoto.com/react-sweet-state/](https://www.emgoto.com/react-sweet-state/)

[https://raw.githubusercontent.com/gregwell/sweet/master/images/show-todos-and-allow-toggle.png](https://raw.githubusercontent.com/gregwell/sweet/master/images/show-todos-and-allow-toggle.png)
