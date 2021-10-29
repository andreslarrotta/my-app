import './styles.scss';
/* import logo from '../assets/andres_larrotta_logo.png';*/

//components
import Menu from '../Skills/Menu/index';
import TextSkills from '../Skills/TextSkills/index';
import ItemSkills from '../Skills/ItemSkills/index';

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
                    <ItemSkills />
                    <ItemSkills />
                    <ItemSkills />
                    <ItemSkills />
                </div>
            </div>
        </section>
    );
}

export default Skills;
