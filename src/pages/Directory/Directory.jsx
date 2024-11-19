import './directory.css';
import ResourceTable from '../../components/ResourceTable/ResourceTable';

import guides from '../../data/guides.json';
import resources from '../../data/resources.json';


const Directory = () => {
  const totalValidResources = resources.filter(resource => resource.id && resource.id > 0).length;
  const lastUpdated = () => {
    const newDate = new Date();
    return `${newDate.toLocaleDateString()}, ${newDate.toLocaleTimeString()}`;
  }

  return (
    <article>
      <h1>Directory</h1>
      <small>{guides.length} guides | {totalValidResources} resources | last updated {lastUpdated()}</small>
      <ResourceTable />
    </article>
  );
}

export default Directory;
