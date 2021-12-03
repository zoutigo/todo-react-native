import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorageCrud = () => {
  const [todoList, todoListChange] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("todoList").then((savedTodoList) => {
      if (savedTodoList) {
        let parsedList = JSON.parse(savedTodoList);
        todoListChange(savedTodoList);
      }
    });
  }, []);

  const todoCreate = async (toDo) => {
    const newTodoList = [...todoList];
    newTodoList.push(toDo);
    const jsonValue = JSON.stringify(newTodoList);
    await AsyncStorage.setItem("@todoList", jsonValue);
  };

  return { todoList, todoCreate };
};

export default useAsyncStorageCrud;
