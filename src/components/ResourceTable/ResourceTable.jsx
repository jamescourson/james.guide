import { useParams, Link } from 'react-router-dom';
import { useMemo } from 'react';

import './resourceTable.css';

const groupBy = (arr, property) =>
  arr.reduce((memo, x) => {
    if (!memo[x[property]]) {
      memo[x[property]] = [];
    }
    memo[x[property]].push(x);
    return memo;
  }, {});

const TagChip = ({ tag }) => (
  <small>{tag}</small>
);

const Resource = ({ data }) => {
  const { name, description, url, tags = [] } = data;

  return (
    <li className="list-row">
      <Link to={url} target="_blank">
        <h3>{name}</h3>
        <p>{description}</p>
        <div>{tags.sort().map((_tag, i) =>
          <TagChip tag={_tag} key={i} />)}
        </div>
      </Link>
    </li>
  );
}

const ResourceTable = ({ resources }) => {
  const categorizedResources = useMemo(() => groupBy(resources, 'category'));
  const alphabetizedCategories = Object.keys(categorizedResources).sort();

  return (
    <ul id="guide-resources-list">
      {alphabetizedCategories.map((category, index) => {
        const formattedCategoryName = alphabetizedCategories[index].charAt(0).toUpperCase() + alphabetizedCategories[index].slice(1);
        return (
          <li key={index}>
            <span className="resource-list-header">
              <h2>&gt; {formattedCategoryName}</h2>
              <small>
                {categorizedResources[category].length} {categorizedResources[category].length === 1
                  ? 'resource'
                  : 'resources'
                }
              </small>
            </span>
            <ul id="resource-list">
              {categorizedResources[category]
                .map((resource, key) => 
                  <Resource data={resource} key={key} />)
              }
            </ul>
          </li>
        );
      }
      )}
    </ul>
  );
}

export default ResourceTable;
