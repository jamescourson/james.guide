import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import guides from '../../data/guides.json';
import resources from '../../data/resources.json';

import ResourceTable from '../../components/ResourceTable/ResourceTable';

import './guide.css';


const ReturnButton = () => (
  <Link to="/d/" id="return"><span>&#8629;</span>&nbsp;Return</Link>
);

const Guide = () => {
  const { abbr } = useParams();
  const guideData = useMemo(() => guides.find(guide => guide.abbr === abbr));
  const resourceCount = useMemo(() => resources.filter(resource => resource.guide === abbr).length);

  return (
    <article>
      <div id='guide-header'>
        <h1>{guideData.name}</h1>
        <small>{resourceCount} {resourceCount === 1 ? 'resource' : 'resources'}</small>
      </div>

      <ReturnButton />
      <ResourceTable />
    </article>
  );
}

export default Guide;
