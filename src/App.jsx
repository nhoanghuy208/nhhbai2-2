import React from 'react';
import './App.css'
import SubjectsList from "./SubjectsList";
function App() {
  const subjects =["ReactJs","NodeJS","Java","Database"]
  return (
      <div className="app-container">
        <h1>Ứng dụng ReactJS</h1>
        <SubjectsList subjects={subjects}/>
      </div>
  );
}

export default App;
