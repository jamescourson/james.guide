import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';

import resources from '../../data/resources.json';

import './resourceTable.css';


const Resource = ({ data }) => {
  const { name, description, url } = data;

  return (
    <li className="table-row">
      <Link to={url} target="_blank">
        <h3>{name}:</h3>
        <p>{description}</p>
      </Link>
    </li>
  );
}

const ResourceTable = () => {  
  const { abbr } = useParams();
  const filteredResources = useMemo(() => resources.filter(resource => resource.guide === abbr));

  const alphabetizedResources = filteredResources.sort((resourceA, resourceB) => {
    if (resourceA.name < resourceB.name) {
      return -1;
    }
    else if (resourceA.name > resourceB.name) {
      return 1;
    }
    return 0;
  });
  
  console.log(alphabetizedResources);

  return (
    <ul id="resource-table">
      {filteredResources.map((resource, key) => <Resource data={resource} key={key} />)}
    </ul>
  );
}

export default ResourceTable;
