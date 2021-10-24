import './styles.scss';
/* import logo from '../assets/andres_larrotta_logo.png';*/

//components
import Menu from '../Skills/Menu/index';
import TextSkills from '../Skills/TextSkills/index';

const Skills = () => {
    return (
        <section className="skills">
            <div className="skills_container">
                <div className="skills_container_header">
                    <div className="menu">
                        <Menu />
                    </div>
                    <div className="text_skills">
                        <TextSkills />
                    </div>
                </div>
                <div className="skills_container_content">
                    <div className="skills_container_content_item">
                        <div className="skill_image">
                            <img src="/" alt="" />
                            <div className="percent">85%</div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className="skills_container_content_item">
                        <div className="skill_image">
                            <img src="/" alt="" />
                            <div className="percent">85%</div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
