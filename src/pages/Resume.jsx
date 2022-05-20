import '../App.css';
import Profile from '../components/Profile/Profile';
import StickyBio from '../components/StickyContainer/StickyBio';

function Resume() {
    return (
      <div className="App">
       <StickyBio />
       <Profile />
      </div>
    );
  }
  
  export default Resume;
  