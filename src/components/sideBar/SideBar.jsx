import React from "react";
import { Nav } from "react-bootstrap";
import './sideBar.css'; 
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector((state) => state.authReducer.user);
    const navigate = useNavigate();
    if (!user?.isAdmin) return null;
  return (
    <div className="sidebar">  

<Nav className="flex-column align-items-center">
  <Nav.Item>
    <Nav.Link onClick={() => navigate("/admin")}>Utilisateurs</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link onClick={() => navigate("/allProfessionals")}>Professionnels</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link onClick={() => navigate("/toBePro")}>Demandes Pro</Nav.Link>
  </Nav.Item>
</Nav>

      
    </div>
  );
};

export default Sidebar;

  