import React from 'react';
import { cvUrl, cvPdfUrl, email, githubUrl, linkedInUrl } from 'data';
import LabeledSection from 'components/labeled-section';
import Link from 'components/link';
import Panel from 'components/panel';

const sections = [
  { label: 'cv', url: cvUrl, content: cvUrl },
  { label: 'cv pdf', url: cvPdfUrl, content: cvPdfUrl },
  { label: 'github', url: githubUrl, content: githubUrl },
  { label: 'linkedin', url: linkedInUrl, content: linkedInUrl },
  { label: 'email', url: `mailto:${email}`, content: email }
];

const Links = (props) => (
  <Panel {...props}>
    {sections.map(({ label, url, content }) => (
      <LabeledSection key={label} ellipsis={true} label={label}>
        <Link href={url}>
          {content}
        </Link>
      </LabeledSection>
    ))}
  </Panel>
);

export default Links;
