import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';

import resources from '../../data/resources.json';

import './resourceTable.css';


const Resource = ({ data }) => {
  const { title, description, url } = data;

  return (
    <li className="table-row">
      <Link to={url} target="_blank">
        <h3>{title}:</h3>
        <p>{description}</p>
      </Link>
    </li>
  );
}

const ResourceTable = () => {
  const { abbr } = useParams();
  const filteredResources = useMemo(() => resources.filter(resource => resource.guide === abbr));

  return (
    <ul id="resource-table">
      {filteredResources.map((resource, key) => <Resource data={resource} key={key} />)}
    </ul>
  );
}

export default ResourceTable;
