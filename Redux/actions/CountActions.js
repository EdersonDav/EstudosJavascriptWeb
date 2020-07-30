const incrementAction = (value) => { return { type: "INCREMENT", payload: value || 1 } }
const decrementAction = (value) => { return { type: "DECREMENT", payload: value || 1 } }

module.exports = {
  incrementAction,
  decrementAction
}
