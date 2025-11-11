import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import guides from '../../data/guides.json';
import resources from '../../data/resources.json';

import ResourceTable from '../../components/ResourceTable/ResourceTable';

import './guide.css';


const alphabetizeResources = (arr) => 
  arr.slice().sort((resourceA, resourceB) => 
    (resourceA.name < resourceB.name ? -1 :
    (resourceA.name > resourceB.name ? 1 :
  0 ))
);

const ReturnButton = () => (
  <Link to="/d/" id="return"><span>&#8629;</span>&nbsp;Return</Link>
);

const FilterSelect = ({ tags, setFilter }) => (
  tags ? (
      <select
        onChange={e => setFilter(e.target.value)}
        id="guide-filter-select"
        defaultValue=''
      >
        <option value={''}></option>
        {tags.map((tag, i) =>
          <option value={tag} key={i}>{tag}</option>)}
      </select>
  ) : null
)


const Guide = () => {
  const { abbr } = useParams();
  
  const guideData = useMemo(() => guides.find(guide => guide.abbr === abbr));
  const guideResources = useMemo(() => resources.filter(resource => resource.guide === abbr));
  const tags = useMemo(() => guideResources
  .map(resource => resource.tags ? resource.tags : '') // reduce to tags
  .reduce((acc, { tags }) => { // reduce to unique tags
    for (tag in tags)
      if (!acc.includes(tag))
        acc.push(tag);
      return acc;
    })
    .sort() // alphabetize
  );
  
  const [filter, setFilter] = useState('');
  const filteredResources = useMemo(() =>
    alphabetizeResources(guideResources)
  .filter(resource => filter ? resource.tags.includes(filter) : true));
  

  return (
    <article>
      <div id='guide-header'>
        <h1>{guideData.name}</h1>
        <small>{filteredResources.length === 1
          ? '1 resource'
          : `${filteredResources.length} resources`}
        </small>
      </div>

      <div id='guide-actions'>
        <ReturnButton />
        <FilterSelect tags={tags} setFilter={setFilter} />
      </div>
      
      <ResourceTable resources={filteredResources} />
    </article>
  );
}

export default Guide;
