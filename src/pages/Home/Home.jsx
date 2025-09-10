import { Link } from 'react-router-dom';

import './home.css'


const Home = () => (
  <>
    <h1>Welcome to James' Guide!</h1>

    <article>
      <h2>About</h2>
      <p>
        This website serves as a repository for <b>practical web resources</b>, mainly related to <b>woodworking tools and techniques</b>.
        <small>(There's also a <Link to="/j/">dumb blog</Link>!)</small>
        <br />
        If it's your first time here, take a look at the <Link to="/d">Directory</Link> to get started!
      </p>

      <p>
        James' Guide is built on <b>React and react-router</b> and is hosted on <b>GitHub Pages</b>.
        <br />
        Links are rendered from static JSON in <code>src/data/</code>.
        <br />
        Check out the <Link to="https://github.com/jamescourson/james.guide" target="_blank">source code</Link>!
      </p>
    </article>
  </>
);

export default Home;
