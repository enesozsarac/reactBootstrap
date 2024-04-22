import React from "react";
import Card from "react-bootstrap/Card";

function CardComponent(props) {
  return (
    <div className="col-lg-6 col-xxl-4 mb-5">
      <Card className="bg-light border-0 h-100">
        <Card.Body className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
            <div style={{marginTop:"-15px" , fontSize:"1.5rem"}} className="feature d-inline-block bg-primary bg-gradient p-3 text-white rounded-3 mb-4">{props.icon}</div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
