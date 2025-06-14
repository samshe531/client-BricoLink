import React, { useState } from "react";
import "./form.css";
import { Form, Button, Card,  Row, Col, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { becomePro } from "../../JS/actions/bPro.action";
import { cities } from "./cities";
import Select from "react-select";

const ProfessionalForm = () => {
  const [formData, setFormData] = useState({
    governorat: "",
    delegation: "",
    cite: "",
    speciality: "",
    zoneDeplacement: "",
    photo: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const spécialité = [
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

  const selectedGovernorat = cities["Tunisie"].governorates.find(
    (g) => g.nom === formData.governorat
  );
  const selectedDelegation = selectedGovernorat?.delegations.find(
    (d) => d.nom === formData.delegation
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = {
      ...formData,
      [name]: value,
    };

    if (name === "governorat") {
      updatedForm.delegation = "";
      updatedForm.cite = "";
    } else if (name === "delegation") {
      updatedForm.cite = "";
    }

    setFormData(updatedForm);
  };

 const handlePhotoUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        photoFile: file, // 🔁 à utiliser pour FormData et Cloudinary
        photoPreview: reader.result, // 👀 à utiliser pour afficher l'image dans le navigateur
      }));
    };

    reader.readAsDataURL(file); // transforme le fichier en base64 pour aperçu uniquement
  }
};


  const specialiteOptions = spécialité.map((metier) => ({
    value: metier,
    label: metier,
  }));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(becomePro(formData, navigate));
  };
// console.log(formData)

  return (
    <Card className="pro-form-container">
      <Card.Body>
        <Card.Title className="pro-form-title mb-4">
          Formulaire Professionnel
        </Card.Title>

        <Form onSubmit={handleSubmit}>
          {/* Localisation */}
          <Form.Group className="pro-form-group mb-4">
            <Form.Label>Localisation</Form.Label>
            <div className="Localisation">
              <Row className="justify-content-center mb-3">
                <Col xs={10} md={6}>
                  <Form.Select
                    name="governorat"
                    value={formData.governorat}
                    onChange={handleChange}
                    required
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
                    value={formData.delegation}
                    onChange={handleChange}
                    required
                    disabled={!formData.governorat}
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
                    value={formData.cite}
                    onChange={handleChange}
                    required
                    disabled={!formData.delegation}
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
            </div>
          </Form.Group>

          {/* Métier */}

          <Form.Group className="pro-form-group mb-4">
  <Form.Label>Spécialité</Form.Label>

  <Select
    name="speciality"
    options={specialiteOptions}
    value={specialiteOptions.find(
      (option) => option.value === formData.speciality
    )}
    onChange={(selected) => {
      setFormData({ ...formData, speciality: selected.value });
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
              value={formData.zoneDeplacement}
              onChange={handleChange}
              placeholder="Ex: Tunis, Ariana, Ben Arous"
              
            />
          </Form.Group>

          {/* Photo de profil */}

          <Form.Group className="pro-form-group mb-4">
            <Form.Label>Photo de profil</Form.Label>
            <Form.Control
              type="file"
              name="photo"
              accept=".png, .jpg, .jpeg"
              onChange={handlePhotoUpload}
              className="pro-file-input"
              required
            />
            {formData.photoPreview && (
  <div className="pro-photo-preview mt-3">
    <Image src={formData.photoPreview} thumbnail rounded />
  </div>
)}
          </Form.Group>

          {/* Description */}
          <Form.Group className="pro-form-group mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="pro-description-textarea"
              placeholder="Décrivez vos compétences et expériences..."
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="pro-submit-btn">
            Enregistrer
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ProfessionalForm;
