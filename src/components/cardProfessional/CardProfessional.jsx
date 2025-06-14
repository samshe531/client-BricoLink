import React from "react";
import { Card, Badge, Row, Col } from "react-bootstrap";
import "./cardProffessional.css";
import ValidationControl from "./ValidationControl";
import { useSelector } from "react-redux";
 
const CardProfessional = ({ ouvrier }) => {
// console.log("Ouvrier reçu dans CardProfessional:", ouvrier);
  const user = useSelector((state) => state.authReducer.user);
  
  return (
    <Card className="m-3 shadow-sm cardPro" style={{  minWidth:"22rem" }}>
      <Card.Body>
        <Row className="align-items-center mb-3">
          {/* Image Placeholder */}
          <Col xs="auto">
            <img
              src={ouvrier.photo}
              alt="avatar"
              className="rounded-circle"
              width={64}
              height={64}
            />
          </Col>

          <Col>
            <Card.Title className="mb-0">
              {ouvrier.user.name} {ouvrier.user.lastName}
            </Card.Title>
            {/* <Card.Subtitle className="text-muted">
              {ouvrier.user.email}
            </Card.Subtitle> */}
            <Card.Text className="text-muted mb-0">
              Tél : {ouvrier.user.phone}
            </Card.Text>
          </Col>
        </Row>

        <Card.Text>
          <strong>Spécialité(s) :</strong>{" "}
          {Array.isArray(ouvrier.speciality) && ouvrier.speciality.length > 0
            ? ouvrier.speciality.map((spec, idx) => (
                <Badge bg="info" key={idx} className="me-1">
                  {spec}
                </Badge>
              ))
            : "Non spécifiées"}
        </Card.Text>

        <Card.Text>
          <strong>Zone de déplacement :</strong>{" "}
          {ouvrier.zoneDeplacement || "Non spécifiée"}
        </Card.Text>

        <Card.Text>
          <strong>Adresse :</strong>{" "}
          {[ouvrier.cite, ouvrier.delegation, ouvrier.governorat]
            .filter(Boolean)
            .join(", ")}
        </Card.Text>

        {/* Statut de validation - si besoin */}
        {user.isAdmin && (
          <Card.Text>
            <Badge
              bg={
                ouvrier.statutValidation === "validé"
                  ? "success"
                  : ouvrier.statutValidation === "refusé"
                  ? "danger"
                  : "warning"
              }
            >
              {ouvrier.statutValidation}
            </Badge>
          </Card.Text>
        )}
        <ValidationControl ouvrier={ouvrier} />
      </Card.Body>
    </Card>
  );
};

export default CardProfessional;
