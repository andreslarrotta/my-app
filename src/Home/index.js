import './styles.scss';
import linkedin from '../assets/linkedin-social-network.png';
import instagram from '../assets/instagram-social-network.png';
import github from '../assets/github-social-network.png';
import email from '../assets/email-social-network.png';

const Home = () => {
    return (
        <section className="home">
            <div className="home_container">
                <div className="home_container_column">
                    <h3>Hello I’m</h3>
                    <h1>Andres Larrotta Pino</h1>
                    <h2>Developer and Designer Web</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <ul>
                        <li>
                            <a href="/">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={instagram} alt="instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={github} alt="github" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <img src={email} alt="email" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Home;
