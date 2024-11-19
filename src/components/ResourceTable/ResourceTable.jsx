import { Link } from 'react-router-dom';

import guides from '../../data/guides.json';
import resources from '../../data/resources.json';

import './resourceTable.css';


const GuideListing = ({ name, abbr }) => {
  const resourceCount = resources.filter(resource => resource.guide === abbr).length;

  return (
    <li>
      <Link to={`/g/${abbr}`} class="table-row">
        <span>{name}</span>
        <small>{resourceCount} resources</small>
      </Link>
    </li>
  );
}

const ResourceTable = () => {
  return (
    <ul>
      {guides.map(({ name, abbr }, i) => (<GuideListing name={name} abbr={abbr} key={i} />))}
    </ul>
  );
}

export default ResourceTable;
