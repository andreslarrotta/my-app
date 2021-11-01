import { useState } from 'react';
import './styles.scss';
/* import logo from '../assets/andres_larrotta_logo.png';*/

//components
import Menu from './Menu/index';
import TextSkills from './TextSkills/index';
import ItemSkills from './ItemSkills/index';

const Skills = () => {
    const [typeToView, setTypeToView] = useState('WEB DESIGN');

    // actions
    const eventTabButton = async (event) => {
        setTypeToView(event)
    } // eventTabButton
    console.log('click final', typeToView);
    return (
        <section className="skills">
            <div className="skills_container">
                <div className="skills_container_header">
                    <div className="menu">
                        <Menu visible={typeToView} eventTabButton={eventTabButton} />
                    </div>
                    <div className="text_skills">
                        <TextSkills text={typeToView} />
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
