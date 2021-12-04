import React, { createContext, useReducer } from "react"
const initialState = { toDoList: [] }
export const Store = createContext()
const reducer = (prevState, action) => {
  switch (action.type) {
    case "TO_DO_LIST_CHANGE":
      return { ...prevState, toDoList: action.toDoList }
    default:
      return prevState
  }
}
export const AppStateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = { state, dispatch }

  return <Store.Provider value={value}>{props.children}</Store.Provider>
}
