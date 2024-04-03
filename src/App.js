import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Store from "./components/Store";

const App = () => {
  return (
    <div className="App">


      
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />} />
        </Routes>
      </Container>

    </div>
  );
};

export default App;
