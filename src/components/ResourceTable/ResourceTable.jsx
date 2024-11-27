import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';

import resources from '../../data/resources.json';

import './resourceTable.css';


const alphabetize = (arr) => 
  arr.slice().sort((resourceA, resourceB) => 
    (resourceA.name < resourceB.name ? -1 :
      (resourceA.name > resourceB.name ? 1 : 0))
  );

const Resource = ({ data }) => {
  const { name, description, url } = data;

  return (
    <li className="list-row">
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
    <ul id="guide-resources-list">
      {alphabetizedCategories.map((category, index) => {
        const formattedCategoryName = alphabetizedCategories[index].charAt(0).toUpperCase() + alphabetizedCategories[index].slice(1);
        return (
          <li key={index}>
            <span className="resource-list-header">
              <h2>&gt; {formattedCategoryName}</h2>
              <small>{categorizedResources[category].length} {categorizedResources[category].length === 1 ? 'resource' : 'resources'}</small>
            </span>
            <ul id="resource-list">
              {categorizedResources[category].map((resource, key) => <Resource data={resource} key={key} />)}
            </ul>
          </li>
        );
      }
      )}
    </ul>
  );
}

export default ResourceTable;
