import React from 'react';
import { frontendProjects } from 'data';
import DocumentTitle from 'react-document-title';
import Projects from 'components/projects';

const FrontendProjects = () => (
  <DocumentTitle title="Kamil Mielnik - Frontend Projects">
    <Projects projects={frontendProjects} />
  </DocumentTitle>
);

export default FrontendProjects;
