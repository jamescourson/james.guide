import { Link } from 'react-router-dom';

import guides from '../../data/guides.json';
import resources from '../../data/resources.json';

import './guideTable.css';


const GuideListing = ({ name, abbr }) => {
  const resourceCount = resources.filter(resource => resource.guide === abbr).length;

  return (
    <li className="table-row">
      <Link to={`/g/${abbr}`}>
        <span>{name}</span>
        <small>{resourceCount} resources</small>
      </Link>
    </li>
  );
}

const GuideTable = () => {
  return (
    <ul id="guide-table">
      {guides.map(({ name, abbr }, i) => (<GuideListing name={name} abbr={abbr} key={i} />))}
    </ul>
  );
}

export default GuideTable;
