import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row, Button, Form } from "react-bootstrap";
import Select from "react-select";
import { cities } from "../form/cities";
import './updateProfessional.css'
import { updateProfilePro } from "../../JS/actions/bPro.action";

const UpdateProfessional = () => {
  // 👇 Récupérer l'utilisateur connecté depuis Redux
const user = useSelector((state) => state.authReducer.user);
  const [newPro, setNewPro] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    governorat: "",
    delegation: "",
    cite: "",
    speciality: "",
    zoneDeplacement: "",
    description: "",
  });
  

  const speciality = [
    "Plombier",
    "Électricien",
    "Menuisier",
    "Peintre en bâtiment",
    "Jardinier",
    "Mécanicien",
    "Technicien en climatisation",
    "Maçon",
    "Carreleur",
    "Ferronnier",
  ];
const { id } = useParams();




  const specialiteOptions = speciality.map((metier) => ({
    value: metier,
    label: metier,
  }));

  const selectedGovernorat = cities["Tunisie"].governorates.find(
    (g) => g.nom === newPro.governorat
  );
  const selectedDelegation = selectedGovernorat?.delegations.find(
    (d) => d.nom === newPro.delegation
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewPro({ ...newPro, [e.target.name]: e.target.value });
  };
// const handlePhotoUpload = (e) => {
//   const file = e.target.files[0];
//   if (file) {
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setNewPro((prevData) => ({
//         ...prevData,
//         photoFile: file, //  à utiliser pour FormData et Cloudinary
//         photoPreview: reader.result, //  à utiliser pour afficher l'image dans le navigateur
//       }));
//     };

//     reader.readAsDataURL(file); // transforme le fichier en base64 pour aperçu uniquement
//   }
// };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfilePro(id, newPro, navigate));
  };

  return (
    <div className="register">
      <h2 className="form-title">Mettre à jour mon profile</h2>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder={user.name}
              name="name"
              value={newPro.name}
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder={user.lastName}
              name="lastName"
              value={newPro.lastName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder={user.email}
              name="email"
              value={newPro.email}
              required
              onChange={handleChange}
            />
          </Form.Group> */}

          <Form.Group className="mb-3">
            <Form.Control
              type="tel"
              placeholder={user.phone}
              name="phone"
              value={newPro.phone}
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Card className="pro-form-container mb-3">
            <Card.Body>
              {/* Localisation */}
              <Form.Group className="pro-form-group mb-4">
                <Form.Label>Localisation</Form.Label>
                <Row className="justify-content-center mb-3">
                  <Col xs={10} md={6}>
                    <Form.Select
                      name="governorat"
                      value={newPro.governorat}
                      required
                      onChange={handleChange}
                      
                    >
                      <option value="">Choisir un gouvernorat</option>
                      {cities["Tunisie"].governorates.map((gov) => (
                        <option key={gov.nom} value={gov.nom}>
                          {gov.nom}
                        </option>
                        
                      ))}
                    </Form.Select>
                  </Col>
                  <Col xs={10} md={6}>
                    <Form.Select
                      name="delegation"
                      value={newPro.delegation}
                      onChange={handleChange}
                      required
                      disabled={!newPro.governorat}
                    >
                      <option value="">Choisir une délégation</option>
                      {selectedGovernorat?.delegations.map((del) => (
                        <option key={del.nom} value={del.nom}>
                          {del.nom}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="justify-content-center">
                  <Col md={8} xs={10}>
                    <Form.Select
                      name="cite"
                      value={newPro.cite}
                      onChange={handleChange}
                      required
                      disabled={!newPro.delegation}
                    >
                      <option value="">Choisir une cité</option>
                      {selectedDelegation?.cites.map((cite) => (
                        <option key={cite} value={cite}>
                          {cite}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>

              {/* Spécialité */}
              <Form.Group className="pro-form-group mb-4">
                <Form.Label>Spécialité</Form.Label>
                <Select
                  name="speciality"
                  options={specialiteOptions}
                  value={specialiteOptions.find(
                    (option) => option.value === newPro.speciality
                  )}
                  onChange={(selected) => {
                    setNewPro({ ...newPro, speciality: selected.value });
                  }}
                  placeholder="Choisissez un métier"
                  classNamePrefix="react-select"
                />
              </Form.Group>


              {/* Zone de déplacement */}
              <Form.Group className="pro-form-group mb-4">
                <Form.Label>Zone de déplacement</Form.Label>
                <Form.Control
                  type="text"
                  name="zoneDeplacement"
                  value={newPro.zoneDeplacement}
                  onChange={handleChange}
                  placeholder="Ex: Tunis, Ariana, Ben Arous"
                />
              </Form.Group>

              {/* Photo de profil */}

          {/* <Form.Group className="pro-form-group mb-4">
            <Form.Label>Photo de profil</Form.Label>
            <Form.Control
              type="file"
              name="photo"
              accept=".png, .jpg, .jpeg"
              onChange={handlePhotoUpload}
              className="pro-file-input"
              
            />
            {newPro.photoPreview && (
  <div className="pro-photo-preview mt-3">
    <Image src={newPro.photoPreview} thumbnail rounded />
  </div>
)}
          </Form.Group> */}

              {/* Description */}
              <Form.Group className="pro-form-group mb-4">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={newPro.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Décrivez vos compétences et expériences..."
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="pro-submit-btn">
                Enregistrer
              </Button>
            </Card.Body>
          </Card>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProfessional;
