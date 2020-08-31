import React from "react";
import chuck from "../../../utils/chuck";
import { Row, Col } from "reactstrap";
import GridCard from "../../cards/grid/grid";

export default function panelGrid({ response }) {
  const nCard = 3;
  const nCols = 12 / nCard;
  const { results } = response;
  const chucking = chuck(results, nCard, true);
  return (
    <>
      {chucking.map((row, i) => (
        <Row key={`row-${i}`}>
          {row.map((item) => (
            <Col key={`card-${item.id}`} sm={nCols}>
              <GridCard item={item} />
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
}
