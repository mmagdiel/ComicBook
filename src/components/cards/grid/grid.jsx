import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default function cardGrid({ item }) {
  const { original_url } = item.image;
  const { date_added, name, issue_number, volume } = item;
  const title = `${name ? name + ": " : ""} ${volume.name} ${
    " # " + issue_number
  }`;
  return (
    <Card body className="border-0">
      <a href="#">
        <CardImg
          top
          width="100%"
          heigth="300px"
          src={original_url}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>
            <small className="text-muted">{date_added}</small>
          </CardText>
        </CardBody>
      </a>
    </Card>
  );
}
