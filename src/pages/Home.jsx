import { Link } from 'react-router-dom';


const Home = () => (
  <>
    <h1>Welcome to James' Guide!</h1>

    <article>
      <h2>About</h2>
      <p>
        This website serves as a repository for <b>practical and high-quality internet resources</b> that I've found and frequently use for my hobbies and interests. <small>(There's also a <Link to="/j/">dumb blog</Link>!)</small>
        <br />
        My goal is to make these resources available for other like-minded people that wish to further improve their knowledge and skills.
        <br />
        If it's your first time here, take a look at the <Link to="/d">Directory</Link> to get started!
      </p>

      <p>
        James' Guide is built on <b>React and react-router</b> and is hosted on <b>GitHub Pages</b>.
        <br />
        Data is stored statically in <code>src/data/</code> and rendered from JSON.
        <br />
        Check out the <Link to="https://github.com/jamescourson/james.guide" target="_blank">source code</Link>!
      </p>

      <h2>Coming Soon</h2>
      <p>Here's some features to look forward to:</p>
      <ul>
        <li>Suggesting & commending resources</li>
      </ul>
    </article>
  </>
);

export default Home;
