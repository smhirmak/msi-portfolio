import React from 'react';

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  return <div>{project.title}</div>;
};

export default ProjectCard;
