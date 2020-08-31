import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

export default function List({ title, list }) {
  return (
    <ListGroup className="my-3">
      <ListGroupItem active>
        <ListGroupItemHeading>{title}</ListGroupItemHeading>
      </ListGroupItem>
      {list.map((item) => (
        <ListGroupItem key={item.id}>
          <ListGroupItemText>{item.name}</ListGroupItemText>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
