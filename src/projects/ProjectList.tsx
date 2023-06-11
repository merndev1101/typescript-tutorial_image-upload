import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectFrom';

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    const [projectBeingEdited, setProjecBeingEdited] =useState({});

    const handleEdit = (projects: Project) => {
        setProjecBeingEdited(projects)
    }

    const cancelEditing = () => {
        setProjecBeingEdited({});
    };
  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
            {project === projectBeingEdited? (
                <ProjectForm 
                    project={project}
                    onCancel={cancelEditing}
                /> 
            ) : (
                <ProjectCard
                    project={project} 
                    onEdit={handleEdit} 
                />
            )}
        </div>
      ))}
    </div>
  )
}

export default ProjectList;