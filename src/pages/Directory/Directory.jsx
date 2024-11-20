import './directory.css';
import GuideTable from '../../components/GuideTable/guideTable';

import guides from '../../data/guides.json';
import resources from '../../data/resources.json';


const Directory = () => {
  const formatDate = date => `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
  const getLastUpdated = () => new Date();

  return (
    <article id="directory">
      <h1>Directory</h1>
      <span>
        <small>{guides.length} guides, {resources.length} resources.</small>
        <small>Last updated {formatDate(getLastUpdated())}</small>
      </span>

      <GuideTable />
    </article>
  );
}

export default Directory;
