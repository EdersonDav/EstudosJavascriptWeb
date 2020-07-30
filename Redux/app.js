const { createStore, applyMiddleware } = require('redux')
const fetch = require('node-fetch')
const thunk = require('redux-thunk').default


const initialStates = [{
  id: 0,
  title: "Tarefa",
  description: "primeira tarefa",
  completed: false
}]

const addItem = (value) => { return { type: "ADD", payload: value } }

const loadAndAdd = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(res => {
      dispatch(addItem(res))
    })
  }
}

const listReducer = (state = initialStates, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]

    default:
      return state
  }
}

const store = createStore(listReducer, applyMiddleware(thunk))
console.log(store.getState());
store.subscribe(() => { console.log(store.getState()); })
store.dispatch(loadAndAdd())
