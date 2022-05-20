import "../App.css";
import headshot from "../assets/images/headshot.jpeg";

function StickyBio() {
  return (
    <div className="left">
      <div className="img__Container">
        <img src={headshot} alt="profile" />
      </div>
      <div>
          <h1>About Me</h1>
          <div className="horizontal__Line">
              <hr />
          </div>
           <p className="about__Me__Text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>

      <div>
          <h1>Skills</h1>
          <hr />
          <h4>HTML</h4>
          <h4>CSS</h4>
          <h4>JAVASCRIPT</h4>
          <h4>REACT</h4>
          <h4>SVELTE</h4>
           
      </div>

      <div>
          <h1>Hobbies</h1>
          <hr />
          <p>swimming</p>
          <p>gaming</p>
          <p>cooking</p>
           
      </div>
    </div>
  );
}

export default StickyBio;
