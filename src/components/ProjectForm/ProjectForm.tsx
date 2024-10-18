import React, { useContext, useState } from 'react';
import { ProjectContext } from '../../contexts/project-context';
import './ProjectForm.scss';

const ProjectForm: React.FC = () => {
    const { addProject } = useContext(ProjectContext)!;

    const [projectName, setProjectName] = useState('');
    const [nextMeeting, setNextMeeting] = useState<number | string>('');
    const [moneyInvolved, setMoneyInvolved] = useState<number | string>('');
    const [clientPriority, setClientPriority] = useState<number | string>('');
    const [currentProgress, setCurrentProgress] = useState<number | string>('');
    const [complexity, setComplexity] = useState<number | string>('');

    const handleAddProject = () => {
        const newProject = {
            id: Date.now(),
            name: projectName,
            nextMeeting: Number(nextMeeting),
            moneyInvolved: Number(moneyInvolved),
            clientPriority: Number(clientPriority),
            currentProgress: Number(currentProgress),
            complexity: Number(complexity),
            score: 0, // Calculated in the context
        };

        addProject(newProject);
        // Reset form
        setProjectName('');
        setNextMeeting('');
        setMoneyInvolved('');
        setClientPriority('');
        setCurrentProgress('');
        setComplexity('');
    };

    return (
        <div className="project-form">
            <h2>Add New Project</h2>

            <div className="form-group">
                <label htmlFor="projectName">Project Name</label>
                <input
                    type="text"
                    id="projectName"
                    placeholder="Project Name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="nextMeeting">Next Meeting (days)</label>
                <span className="info-text">How soon is the next progress meeting?</span>
                <select
                    id="nextMeeting"
                    value={nextMeeting}
                    onChange={(e) => setNextMeeting(e.target.value)}
                >
                    <option value="">Select an option</option>
                    <option value="1">1 - Urgent (Tomorrow)</option>
                    <option value="3">3 - Soon (3 days)</option>
                    <option value="7">7 - Moderate (1 week)</option>
                    <option value="14">14 - Later (2 weeks)</option>
                    <option value="30">30 - Distant (1 month)</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="moneyInvolved">Money Involved</label>
                <span className="info-text">How much money is involved in this project?</span>
                <select
                    id="moneyInvolved"
                    value={moneyInvolved}
                    onChange={(e) => setMoneyInvolved(e.target.value)}
                >
                    <option value="">Select an option</option>
                    <option value="1000">Low (Up to $1,000)</option>
                    <option value="5000">Moderate ($1,000 - $5,000)</option>
                    <option value="10000">High ($5,000 - $10,000)</option>
                    <option value="50000">Very High ($10,000 - $50,000)</option>
                    <option value="100000">Critical (Above $50,000)</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="clientPriority">Client Priority</label>
                <span className="info-text">How important is this project to the client?</span>
                <select
                    id="clientPriority"
                    value={clientPriority}
                    onChange={(e) => setClientPriority(e.target.value)}
                >
                    <option value="">Select an option</option>
                    <option value="1">Low</option>
                    <option value="2">Moderate</option>
                    <option value="3">High</option>
                    <option value="4">Very High</option>
                    <option value="5">Critical</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="currentProgress">Current Progress</label>
                <span className="info-text">What is the current progress of the project?</span>
                <select
                    id="currentProgress"
                    value={currentProgress}
                    onChange={(e) => setCurrentProgress(e.target.value)}
                >
                    <option value="">Select an option</option>
                    <option value="0">0% - Just started</option>
                    <option value="25">25% - Early stages</option>
                    <option value="50">50% - Midway</option>
                    <option value="75">75% - Near completion</option>
                    <option value="100">100% - Completed</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="complexity">Complexity</label>
                <span className="info-text">How complex is this project?</span>
                <select
                    id="complexity"
                    value={complexity}
                    onChange={(e) => setComplexity(e.target.value)}
                >
                    <option value="">Select an option</option>
                    <option value="1">Simple</option>
                    <option value="2">Moderate</option>
                    <option value="3">Challenging</option>
                    <option value="4">Complex</option>
                    <option value="5">Very Complex</option>
                </select>
            </div>

            <button onClick={handleAddProject}>Add Project</button>
        </div>
    );
};

export default ProjectForm;