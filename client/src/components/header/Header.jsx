import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

//COMPONENTS
const Component = styled(AppBar)`
  background: #ffff;
  color: black;
`;

const Container = styled(Toolbar)`
  justify-content: center;
  & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
  }
`;
const Header = () => {
  return (
    <Component>
      <Container>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/login">Logout</Link>
      </Container>
    </Component>
  );
};

export default Header;
