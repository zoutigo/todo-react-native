import React, { useContext } from "react"
import { Store } from "../state/AppContext"

const useAppContext = () => {
  const { state, dispatch } = useContext(Store)
  return { state, dispatch }
}

export default useAppContext
