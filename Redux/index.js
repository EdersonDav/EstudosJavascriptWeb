const redux = require('redux')
const creatStore = redux.createStore;
const combineReducer = redux.combineReducers;

const { incrementAction, decrementAction } = require('./actions/CountActions')
const { addItemAction } = require('./actions/AddListActions')

const counterReducer = require("./reducers/CounterReducers")
const addItemReducer = require("./reducers/AddItensReducer")

const allReducer = combineReducer({
  counterReducer,
  addItemReducer
})

const store = creatStore(allReducer)
store.subscribe(() => { console.log(store.getState()); })
store.dispatch(incrementAction(10))
store.dispatch(addItemAction("Item Teste"))
store.dispatch(incrementAction(20))

