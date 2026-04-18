import React from "react";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Typography variant="h4">Моё резюме</Typography>

      <Typography>Имя: Tima</Typography>
      <Typography>Навыки: HTML, CSS, JS, React</Typography>
      <Typography>Опыт: Начинающий разработчик</Typography>
    </Container>
  );
}