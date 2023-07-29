import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGamepad, faFolder, faBriefcase, faAddressBook } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {


    return (
        < div className="main-container" >

            < nav className="navbar" >
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <FontAwesomeIcon icon={faHouse} size="lg" />
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <FontAwesomeIcon icon={faGamepad} size="lg" />
                            <span>Game</span>
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <FontAwesomeIcon icon={faFolder} size="lg" />
                            <span>Projects</span>
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <FontAwesomeIcon icon={faBriefcase} size="lg" />
                            <span>Experiences</span>
                        </a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <FontAwesomeIcon icon={faAddressBook} size="lg" />
                            <span>Contact Me</span>
                        </a>
                    </li>
                </ul>
            </nav >
        </div >
    )
}

export default NavBar; 