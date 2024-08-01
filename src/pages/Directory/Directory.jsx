import { Link } from 'react-router-dom';
import './directory.css';


const GuideListing = ({ name, abbr }) => {
  const resourceCount = 'X'; // fetch from api

  return (
    <li>
      <Link to={`/g/${abbr}`}>{name}</Link>
      <small>{resourceCount} resources</small>
    </li>
  );
}

const Directory = () => {
  const guides = [
    {
      name: 'Calisthenics',
      abbr: 'ca'
    },
    {
      name: 'Chess',
      abbr: 'ch'
    },
    {
      name: 'Cooking',
      abbr: 'ck'
    },
    {
      name: 'Disc Golf',
      abbr: 'dg'
    },
    {
      name: 'Home Improvement',
      abbr: 'hi'
    },
    {
      name: 'Houseplants',
      abbr: 'hp'
    },
    {
      name: 'Music',
      abbr: 'mu'
    },
    {
      name: 'Origami',
      abbr: 'or'
    },
    {
      name: 'Software Development',
      abbr: 'sd'
    },
    {
      name: 'Web Development',
      abbr: 'wd'
    },
    {
      name: 'Woodworking',
      abbr: 'ww'
    },
  ]
  const totalResources = 'X'; // fetch from api

  return (
    <>
      <h1>Directory</h1>
      <small>{guides.length} guides | {totalResources} total resources</small>
      <ul>
        {guides.map(({ name, abbr }, i) => (<GuideListing name={name} abbr={abbr} key={i} />))}
      </ul>
    </>
  );
}

export default Directory;
