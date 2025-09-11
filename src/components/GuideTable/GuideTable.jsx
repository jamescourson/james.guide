import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import guides from '../../data/guides.json';
import resources from '../../data/resources.json';

import './guideTable.css';


const alphabetize = (arr) => 
  arr.slice().sort((resourceA, resourceB) => 
    (resourceA.name < resourceB.name ? -1 :
      (resourceA.name > resourceB.name ? 1 : 0))
  );

const GuideListing = ({ name, abbr, desc }) => {
  const resourceCount = resources.filter(resource => resource.guide === abbr).length;

  return (
    <li className="table-row">
      <Link to={`/g/${abbr}`}>
        <div>
          <h2>{name}</h2>
          <small>{resourceCount} {resourceCount === 1 ? "resource" : "resources"}</small>
        </div>
        <p>{desc}</p>
      </Link>
    </li>
  );
}

const GuideTable = () => {
  const alphabetizedGuides = useMemo(() => alphabetize(guides));

  return (
    <ul id="guide-table">
      {alphabetizedGuides.map(({ name, abbr, desc }, i) => (<GuideListing name={name} abbr={abbr} desc={desc} key={i} />))}
    </ul>
  );
}

export default GuideTable;
