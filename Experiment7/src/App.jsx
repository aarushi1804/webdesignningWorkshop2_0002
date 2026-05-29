import React from 'react';
import Student from "./components/Student";
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Student Details</h1>
      <Student name="Darsh Jaiswal" course="ECE" marks={85} />
      <Student name="Aarushi Agarwal" course="CSE" marks={92} />
      <Student name="Bharat Kumar" course="ME" marks={78} />
    </div>
  );
}

export default App;