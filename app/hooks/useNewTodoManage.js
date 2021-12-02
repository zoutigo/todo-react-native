import React, { useState } from "react";
import { View, Text } from "react-native";

const useNewTodoManage = () => {
  const [title, titleChange] = useState(null);
  const [description, descriptionChange] = useState(null);

  const fieldsTab = [
    {
      value: title,
      onChange: (e) => titleChange(e),
      placeholder: "Name of the task to do",
    },
    {
      value: description,
      onChange: (e) => descriptionChange(e),
      placeholder: "Description (optional)",
    },
  ];

  const handleSubmit = () => {
    if (!title || title.length === 0) return alert("title mandatory");
  };

  return { fieldsTab, handleSubmit };
};

export default useNewTodoManage;
