import React, { createContext, useState, useEffect } from 'react';

interface Project {
    id: number;
    name: string;
    nextMeeting: number;
    moneyInvolved: number;
    clientPriority: number;
    currentProgress: number;
    complexity: number;
    score: number;
}

interface ProjectContextType {
    projects: Project[];
    addProject: (project: Project) => void;
    calculateScore: (project: Project) => number;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const ProjectProvider: React.FC<React.PropsWithChildren<object>> = (props) => {
    const [projects, setProjects] = useState<Project[]>([]);

    // Load projects from localStorage
    useEffect(() => {
        const storedProjects = localStorage.getItem('projects');
        if (storedProjects) {
            setProjects(JSON.parse(storedProjects));
        }
    }, []);

    // Save projects to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const calculateScore = (project: Project): number => {
        const score = project.nextMeeting + project.moneyInvolved + project.clientPriority + project.currentProgress - project.complexity;
        return score;
    };

    const addProject = (project: Project) => {
        const newProject = {
            ...project,
            score: calculateScore(project),
        };
        setProjects([...projects, newProject]);
    };

    return (
        <ProjectContext.Provider value={{ projects, addProject, calculateScore }}>
            {props.children}
        </ProjectContext.Provider>
    );
};

export { ProjectContext, ProjectProvider };
