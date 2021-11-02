import { useState, useEffect } from 'react';
import './styles.scss';
import logo from '../assets/andres_larrotta_logo.png';
import Mobile from './Mobile/index';

const Header = () => {
    const [mobile, setMobile] = useState(true)
    const widthScreen = document.querySelector('body').innerWidth

    useEffect(() => {
        if (widthScreen < 650) {
            setMobile(true)
        }
        else {
            setMobile(false)
        }
        window.addEventListener('resize', (e) => {
            if (e.target.innerWidth < 650) {
                setMobile(true)
            }
            else {
                setMobile(false)
            }
        });
    })
    return (
        <>
            {mobile
                ? <Mobile />
                : <header>
                    <div className="header">
                        <div className="header_container">
                            <div className="header_column">
                                <img src={logo} alt="Andres Felipe Larrotta Pino Logo" />
                            </div>
                            <div className="header_column">
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="/users">
                                                About me
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
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
                </header>}
        </>
    );
}

export default Header;
