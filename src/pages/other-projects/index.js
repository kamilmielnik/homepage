import React from 'react';
import { otherProjects } from 'data';
import DocumentTitle from 'react-document-title';
import Projects from 'components/projects';

const OtherProjects = () => (
  <DocumentTitle title="Kamil Mielnik - Other Projects">
    <Projects projects={otherProjects} />
  </DocumentTitle>
);

export default OtherProjects;
