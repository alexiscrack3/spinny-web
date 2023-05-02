import React from "react";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import "./UpdatePlayer.css";

export function UpdatePlayer() {
  const { id } = useParams();

  return (
    <Container>
      <p>Update player {id}</p>
    </Container>
  );
}
