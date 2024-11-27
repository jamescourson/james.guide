import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import guides from '../../data/guides.json';

import ResourceTable from '../../components/ResourceTable/ResourceTable';

import './guide.css';


const ReturnButton = () => (
  <Link to="/d/" id="return"><span>&#8629;</span>&nbsp;Return</Link>
);

const Guide = () => {
  const { abbr } = useParams();
  const guideData = useMemo(() => guides.find(guide => guide.abbr === abbr));

  return (
    <article>
      <h1>{guideData.name}</h1>
      <ReturnButton />
      <ResourceTable />
    </article>
  );
}

export default Guide;
