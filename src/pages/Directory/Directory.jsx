import './directory.css';
import GuideTable from '../../components/GuideTable/guideTable';

import guides from '../../data/guides.json';
import resources from '../../data/resources.json';


const Directory = () => {
  const totalValidResources = resources.filter(resource => resource.id && resource.id > 0).length;
  const lastUpdated = () => {
    const newDate = new Date();
    return `${newDate.toLocaleDateString()}, ${newDate.toLocaleTimeString()}`;
  }

  return (
    <article id="directory">
      <h1>Directory</h1>
      <small>{guides.length} guides | {totalValidResources} resources | last updated {lastUpdated()}</small>
      <GuideTable />
    </article>
  );
}

export default Directory;
