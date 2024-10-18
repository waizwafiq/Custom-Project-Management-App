import React from 'react';
import { ProjectProvider } from './contexts/project-context';
import ProjectForm from './components/ProjectForm/ProjectForm';
import ProjectList from './components/ProjectList/ProjectList';
import './App.scss';

const App: React.FC = () => {
  return (
    <ProjectProvider>
      <div className="app-container">
        <h1>Weighted Scoring Model for Project Prioritization</h1>
        <ProjectForm />
        <ProjectList />
      </div>
    </ProjectProvider>
  );
};

export default App;
