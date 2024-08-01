import { Link } from 'react-router-dom';

const aboutStyles = {
  maxWidth: '60vw'
}

const About = () => (
  <div style={aboutStyles}>
    <article>
      <h1>Thanks for visiting James' Guide!</h1>
      <p>
        I've always been a bit of a collector when it comes to the things I'm passionate about - so it's no surprise that I collect webpages too, right?
        <br />
        This website serves as a repository for <b>practical and high-quality resources</b> I've found for my hobbies and interests. <small>(There's also a <Link to="/j">dumb blog</Link>!)</small>
        <br />
        This website aims to make these resources available for other like-minded people that wish to further improve their knowledge and skills.
      </p>
    </article>

    <article>
      <p>James' Guide is <b>open source.</b> Check out the <Link to="https://github.com/jamescourson/james.guide">GitHub repo</Link>!</p>
    </article>
  </div>
);

export default About;
