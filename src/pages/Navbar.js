import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.png'
import week from '../assets/icons/week.png'
function Navbar() {
    return (

        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <img src={logo} alt="FunFox" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#">
                                <img src={week} alt="week" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;