import { useParams, Link } from 'react-router-dom';
import { useMemo, useState } from 'react';

import resources from '../../data/resources.json';

import './resourceTable.css';


const alphabetize = (arr) => 
  arr.slice().sort((resourceA, resourceB) => {
    if (resourceA.name < resourceB.name) {
      return -1;
    }
    else if (resourceA.name > resourceB.name) {
      return 1;
    }
    return 0;
  }
);

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
  const alphabetizedResources = useMemo(() => alphabetize(filteredResources));

  const groupBy = (arr, property) =>
    arr.reduce((memo, x) => {
      if (!memo[x[property]]) {
        memo[x[property]] = [];
      }
      memo[x[property]].push(x);
      return memo;
  }, {});
  
  const categorizedResources = useMemo(() => groupBy(alphabetizedResources, 'category'));
  const alphabetizedCategories = Object.keys(categorizedResources).sort();

  return (
    <ul>
      {alphabetizedCategories.map((category, index) => (
        <li key={index}>
          <h2>{alphabetizedCategories[index].charAt(0).toUpperCase() + alphabetizedCategories[index].slice(1)}</h2>
          <ul id="resource-table">
            {categorizedResources[category].map((resource, key) => <Resource data={resource} key={key} />)}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default ResourceTable;
