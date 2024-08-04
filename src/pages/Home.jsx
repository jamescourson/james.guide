import { Link } from 'react-router-dom';


const Home = () => (
  <>
    <h1>Welcome to James' Guide!</h1>
    <article>
      <p>
        If it's your first time here, check out the <Link to="/d">Directory</Link>!
      </p>

      <h1>About</h1>
      <p>
        I've always been a bit of a collector - so it's no surprise that I collect webpages too, right?
        <br />
        This website serves as a repository for <b>practical and high-quality internet resources</b> that I've found for my hobbies and interests. <small>(There's also a <Link to="/j/">dumb blog</Link>!)</small>
        <br />
        My goal is to make these resources available for other like-minded people that wish to further improve their knowledge and skills.
      </p>

      <p>
        James' Guide is built on <b>React</b> and runs on <b>GitHub Pages</b>.
        <br />
        Data is stored statically in <code>src/data/</code> and rendered from JSON.
        <br />
        Check out the <Link to="https://github.com/jamescourson/james.guide" target="_blank">source code</Link>!
      </p>
    </article>
  </>
);

export default Home;
