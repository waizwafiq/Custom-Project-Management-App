import React, { useContext } from 'react';
import { ProjectContext } from '../../contexts/project-context';
import './ProjectList.scss';

const ProjectList: React.FC = () => {
    const { projects } = useContext(ProjectContext)!;

    return (
        <div className="project-list">
            <h2>Project List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Next Meeting</th>
                        <th>Money Involved</th>
                        <th>Client Priority</th>
                        <th>Current Progress</th>
                        <th>Complexity</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td>{project.name}</td>
                            <td>{project.nextMeeting}</td>
                            <td>{project.moneyInvolved}</td>
                            <td>{project.clientPriority}</td>
                            <td>{project.currentProgress}</td>
                            <td>{project.complexity}</td>
                            <td>{project.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectList;
