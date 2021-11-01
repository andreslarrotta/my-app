import { useState } from 'react';
import './styles.scss';
import logo from '../../assets/andres_larrotta_logo.png';

const Mobile = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleMenuMobile = () => {
        if (openMenu == false) {
            setOpenMenu(true)
        }
        else {
            setOpenMenu(false)
        }
    }
    return (
        <><header className={`${openMenu ? 'active' : ''}`}>
            <div className="header">
                <div className="header_container">
                    <div className="header_column_mobile">
                        <div className="header_column_mobile_mobile_menu" onClick={handleMenuMobile}>
                            <img src="/images/menu.png" alt="Andres Felipe Larrotta Pino Logo" />
                        </div>
                        <img src={logo} alt="Andres Felipe Larrotta Pino Logo" />
                    </div>
                    <div className="header_column_mobile">
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
        </>
    );
}

export default Mobile;
