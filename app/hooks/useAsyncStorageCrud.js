import React, { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import useAppContext from "./useAppContext"

const useAsyncStorageCrud = () => {
  const {
    state: { toDoList },
    dispatch,
  } = useAppContext()

  const toDoListChange = (newList) => {
    dispatch({ type: "TO_DO_LIST_CHANGE", toDoList: newList })
  }

  useEffect(async () => {
    await AsyncStorage.getItem("toDoList").then((savedTodoList) => {
      if (savedTodoList) {
        let parsedList = JSON.parse(savedTodoList)
        toDoListChange(parsedList)
      }
    })
  }, [])

  const todoCreate = async (toDo) => {
    const newTodoList = [...toDoList]
    newTodoList.push(toDo)
    const jsonValue = JSON.stringify(newTodoList)
    await AsyncStorage.setItem("toDoList", jsonValue)
    toDoListChange(newTodoList)
  }

  const toDoDelete = async (index) => {
    const newTodoList = [...toDoList]
    newTodoList.splice(index, 1)
    const jsonValue = JSON.stringify(newTodoList)
    await AsyncStorage.setItem("toDoList", jsonValue)
    toDoListChange(newTodoList)
  }
  const todoUpdate = async (index, toDo) => {
    const newTodoList = [...toDoList]
    newTodoList.splice(index, 1, toDo)
    const jsonValue = JSON.stringify(newTodoList)
    await AsyncStorage.setItem("toDoList", jsonValue)
    toDoListChange(newTodoList)
  }

  return { toDoList, todoCreate, todoUpdate, toDoDelete }
}

export default useAsyncStorageCrud
