import "./css/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About URL Shortener</h1>
        <p>
          Welcome to <strong>Linkify</strong> — a simple and efficient URL shortener built to make your long, messy links clean and shareable.
        </p>
        <p>
          Enter your long URL, customize it if you wish, and get your short link instantly.  
          Each short link redirects visitors directly to your original URL.
        </p>
        <p>
          Created with ❤️ using <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
        </p>
      </div>
    </div>
  );
};

export default About;
