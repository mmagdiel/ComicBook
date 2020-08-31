import React from "react";
import { Row } from "reactstrap";
import ListCard from "../../cards/list/list";

export default function panelGrid({ response }) {
  const { results } = response;
  return (
    <>
      {results.map((item, i) => (
        <Row key={`card-${item.id}`}>
          <ListCard item={item} />
        </Row>
      ))}
    </>
  );
}
