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

export default function cardGrid({ item }) {
  const { original_url } = item.image;
  const { date_added, name, issue_number, volume, description } = item;
  const title = `${name ? name + ": " : ""} ${volume.name} ${
    " # " + issue_number
  }`;
  return (
    <Card body className="border-0">
      <a href="#">
        <Row>
          <Col sm="3">
            <CardImg
              top
              width="100%"
              heigth="300px"
              src={original_url}
              alt="Card image cap"
            />
          </Col>
          <Col sm="9">
            <CardBody>
              <CardTitle>{title}</CardTitle>
              <CardText>
                <small className="text-muted">{date_added}</small>
              </CardText>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </CardBody>
          </Col>
        </Row>
      </a>
    </Card>
  );
}
