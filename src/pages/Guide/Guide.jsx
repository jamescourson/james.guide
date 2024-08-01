import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import guides from '../../data/guides.json';
import resources from '../../data/resources.json';

import './guide.css';


const Resource = ({ data }) => {
  const { title, description, url } = data;

  return (
    <article>
      <h2><Link to={url}>{title}</Link></h2>
      <p>{description}</p>
    </article>
  );
}

const Guide = () => {
  const { abbr } = useParams();
  const guideData = useMemo(() => guides.find(guide => guide.abbr === abbr));
  const filteredResources = useMemo(() => resources.filter(resource => resource.guide === abbr));

  return (
    <>
      <h1>{guideData.name}</h1>
      <Link to="/d/">&#10510;&nbsp;<small>Directory</small></Link>
      <ul>
        {filteredResources.map((resource, key) => <Resource data={resource} key={key} />)}
      </ul>
    </>
  );
}

export default Guide;
