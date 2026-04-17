import React from "react";
import { useState } from "react";
import { Container, TextField, Button, List, ListItem } from "@mui/material";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    setTodos([...todos, text]);
    setText("");
  };

  return (
    <Container>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        label="Новая задача"
      />
      <Button onClick={addTodo}>Добавить</Button>

      <List>
        {todos.map((t, i) => (
          <ListItem key={i}>{t}</ListItem>
        ))}
      </List>
    </Container>
  );
}