import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import guides from '../../data/guides.json';
import resources from '../../data/resources.json';

import ResourceTable from '../../components/ResourceTable/ResourceTable';

import './guide.css';


const Guide = () => {
  const { abbr } = useParams();
  const guideData = useMemo(() => guides.find(guide => guide.abbr === abbr));
  const filteredResources = useMemo(() => resources.filter(resource => resource.guide === abbr));
  // todo: group resources by category, alphabetize

  return (
    <article>
      <h1>{guideData.name}</h1>
      <Link to="/d/">&#8629;&nbsp;<small>Return</small></Link>
      <ResourceTable />
    </article>
  );
}

export default Guide;
