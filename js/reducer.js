function changeState(state, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 }
    default:
      return state;
  }
}

function render() {
  document.body.textContent = state.count
}

function dispatch(action) {
  state = changeState(state, action)
  // return state
  render()
}

let state = { count: 0 }
let action = { type: 'INCREASE_COUNT' }

// changeState(state, action)

// Each time dispatch is called, the current version of state is passed into changeState, 
// and then state is assigned a new value based on what changeState returns.

// dispatch({ type: "INCREASE_COUNT" })
dispatch(action)