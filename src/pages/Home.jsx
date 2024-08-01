import { Link } from 'react-router-dom';


const Home = () => (
  <div id="home">
    <h1>Welcome to James' Guide!</h1>
    <article>
      <p>
        If it's your first time here, check out the <Link to="/d">Directory</Link>!
      </p>

      <h1>About</h1>
      <p>
        I've always been a bit of a collector - so it's no surprise that I collect webpages too, right?
        <br />
        This website serves as a repository for <b>practical and high-quality internet resources</b> that I've found for my hobbies and interests. <small>(There's also a <Link to="/j">dumb blog</Link>!)</small>
        <br />
        My goal is to make these resources available for other like-minded people that wish to further improve their knowledge and skills.
      </p>

      <p>
        James' Guide is <Link to="https://github.com/jamescourson/james.guide" target="_blank"><b>open source</b></Link> and runs on <b>GitHub Pages</b>.
      </p>
    </article>
  </div>
);

export default Home;
