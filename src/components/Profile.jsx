import "../App.css";
import { Icon } from "@iconify/react";

function Profile() {
  return (
    <div className="right">
      <h1>Mafimisebi Adebayo</h1>
      <h4>Frontend Developer</h4>
      <hr />
      <div>
        {" "}
        <Icon icon="bi:telephone" /> +2348139119436
      </div>
      <div>
        {" "}
        <Icon icon="carbon:email" /> mafimisebiadebayo@gmail.com
      </div>
      <div>
        {" "}
        <Icon icon="akar-icons:location" /> Lagos, Nigeria.
      </div>

      <div>
        <h1>EDUCATION AND QUALIFICATION</h1>
        <hr />
        <div>
            <h4>2012 - 2019</h4>
            <h4>Bowen University, Iwo</h4>
            <p>Bsc Microbiology</p>

            <h4>2009 - 2012</h4>
            <h4>Albesta Academy, Lekki</h4>
            <p>SSCE</p>
        </div>

        <div>
            <h1>WORK EXPERIENCE</h1>
            <hr />
        </div>
      </div>
    </div>
  );
}

export default Profile;
