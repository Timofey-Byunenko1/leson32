import React from "react";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

export default function Swapi() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then(res => res.json())
      .then(data => setPeople(data.results));
  }, []);

  return (
    <Container>
      <Typography variant="h4">Star Wars Characters</Typography>

      {people.map((p) => (
        <Typography key={p.name}>{p.name}</Typography>
      ))}
    </Container>
  );
}