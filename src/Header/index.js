import { useState, useEffect } from 'react';
import './styles.scss';
import logo from '../assets/andres_larrotta_logo.png';
import Mobile from './Mobile/index';

const Header = () => {
    const [mobile, setMobile] = useState(true)
    const widthScreen = document.querySelector('body').offsetWidth

    useEffect(() => {
        if (widthScreen < 650) {
            setMobile(true)
        }
        else {
            setMobile(false)
        }
    }, [mobile])
    console.log('ancho de la pagina', widthScreen);
    window.addEventListener('resize', (e) => {
        if (e.target.innerWidth < 650) {
            setMobile(true)
        }
        else {
            setMobile(false)
        }
    });
    return (
        <>
            {mobile
                ? <Mobile />
                : <header>
                    <div className="header">
                        <div className="header_container">
                            <div className="header_column">
                                <a href="/">
                                    <img src={logo} alt="Andres Felipe Larrotta Pino Logo" />
                                </a>
                            </div>
                            <div className="header_column">
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="/">
                                                About me
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#skills">
                                                Skills
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/experience/all">
                                                Experience
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a href="/portfolio">
                                                Portfolio
                                            </a>
                                        </li> */}
                                        <li className="download">
                                            <a href="./docs/HV_Andres Larrotta_I.pdf" download> 
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
