
import { Link } from "react-router-dom";
function Navbar({value,handleInput,val}) {
    return ( <nav className="Nav">
        <div className="heading">
            <h2><a href="#"> E-Commerce </a></h2>
        </div>
        <ul className="list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li data-value={value} id="v"><Link to='/cart'>MyCart</Link></li>
        </ul>
        <form action="">
            <div>
                <input type="search" placeholder="Search" id="search" / >
                <button type="submit">Search</button>
            </div>
        </form>
    </nav> );
}

export default Navbar;