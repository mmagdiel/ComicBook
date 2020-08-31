import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import List from "../list/list";

export default function CardDetail({ results }) {
  const { original_url } = results.image;
  const { character_credits, location_credits, team_credits } = results;
  const { name, volume } = results;
  const title = `${name ? name + ": " : ""} ${volume.name}`;
  return (
    <Card className="border-0">
      <Row style={{ marginRight: "0px" }}>
        <Col sm="6">
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <List list={character_credits} title="Character Credits" />
            <List list={location_credits} title="Location Credits" />
            <List list={team_credits} title="Team Credit" />
            <CardText></CardText>
          </CardBody>
        </Col>
        <Col sm="6">
          <CardImg top width="100%" src={original_url} alt="Card image cap" />
        </Col>
      </Row>
    </Card>
  );
}
