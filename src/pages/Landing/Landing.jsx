import {Link} from 'react-router-dom';
import './landing.css';

const Landing = () => (
    <div className="landing">
        <h3 class="bigtext">Research et Al</h3>
        <a href="https://storyset.com/business">
        <img src={require("../../de.gif")} style={{ height: "60vh",float:"right"}} />
        </a>
    </div>
);

export default Landing;