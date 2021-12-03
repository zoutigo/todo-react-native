import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorageCrud = () => {
  const [todoList, todoListChange] = useState([]);

  useEffect(async () => {
    await AsyncStorage.getItem("todoList").then((savedTodoList) => {
      if (savedTodoList) {
        let parsedList = JSON.parse(savedTodoList);
        todoListChange(parsedList);
      }
    });
  }, []);
  console.log("todoList", todoList);

  const todoCreate = async (toDo) => {
    const newTodoList = [...todoList];
    newTodoList.push(toDo);
    const jsonValue = JSON.stringify(newTodoList);
    await AsyncStorage.setItem("todoList", jsonValue).then(() =>
      console.log("todoList", todoList)
    );
  };

  const todoDelete = async (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    const jsonValue = JSON.stringify(newTodoList);
    await AsyncStorage.setItem("todoList", jsonValue);
  };
  const todoUpdate = async (index, toDo) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1, toDo);
    const jsonValue = JSON.stringify(newTodoList);
    await AsyncStorage.setItem("todoList", jsonValue);
  };

  return { todoList, todoCreate, todoUpdate, todoDelete };
};

export default useAsyncStorageCrud;
