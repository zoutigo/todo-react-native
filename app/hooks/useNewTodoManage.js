import React, { useState } from "react";
import useAsyncStorageCrud from "@hooks/useAsyncStorageCrud";

const useNewTodoManage = () => {
  const [title, titleChange] = useState(null);
  const [description, descriptionChange] = useState(null);

  const { todoCreate } = useAsyncStorageCrud();

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

  const handleSubmit = async () => {
    if (!title || title.length === 0) return alert("title mandatory");

    await todoCreate({ title, description });
    titleChange("");
    descriptionChange("");
  };

  return { fieldsTab, handleSubmit };
};

export default useNewTodoManage;
