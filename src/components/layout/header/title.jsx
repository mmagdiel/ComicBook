import React from "react";
import { Container, Jumbotron } from "reactstrap";

export default function Title() {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">The ComicBook</h1>
        <p className="lead">
          The best place to get information about your favorite comic
        </p>
      </Container>
    </Jumbotron>
  );
}
