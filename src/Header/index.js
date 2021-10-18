import './styles.scss';
import logo from '../assets/andres_larrotta_logo.png';

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="header_container">
                    <div className="header_column">
                        <img src={logo} alt="Andres Felipe Larrotta Pino Logo" />
                    </div>
                    <div className="header_column">
                        <nav>
                            <ul>
                                <li>
                                    <a href="/about-me">
                                        About me
                                    </a>
                                </li>
                                <li>
                                    <a href="/about-me">
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a href="/about-me">
                                        Experience
                                    </a>
                                </li>
                                <li>
                                    <a href="/about-me">
                                        Portfolio
                                    </a>
                                </li>
                                <li className="download">
                                    <a href="/about-me">
                                        Download CV
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
