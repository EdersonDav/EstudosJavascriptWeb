const addItemAction = (value) => { return { type: "ADD_ITEM", payload: value || "" } }

module.exports = { addItemAction }
