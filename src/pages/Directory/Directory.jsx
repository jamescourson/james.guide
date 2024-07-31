import { Link } from 'react-router-dom';
import './directory.css';


const DirectoryListing = ({ name, abbr }) => {
  const resourceCount = 'X'; // fetch from api

  return (
    <li style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: '1em'
    }}>
      <Link to={`/g/${abbr}`}>{name}</Link>
      <small>{resourceCount} resources</small>
    </li>
  );
}

const Directory = () => {
  const directories = [
    {
      name: 'Calisthenics',
      abbr: 'ca'
    },
    {
      name: 'Chess',
      abbr: 'ch'
    },
    {
      name: 'Disc Golf',
      abbr: 'dg'
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
      <ul>
        {directories.map(({ name, abbr }, i) => (<DirectoryListing name={name} abbr={abbr} key={i}></DirectoryListing>))}
      </ul>
      <small>{directories.length} directories | {totalResources} total resources</small>
    </>
  );
}

export default Directory;
