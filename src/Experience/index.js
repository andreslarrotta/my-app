import './styles.scss';
import ItemExperience from './ItemExperience/index';
//components
/* import Menu from '../Skills/Menu/index';
import TextSkills from '../Skills/TextSkills/index';
 */

const Experience = () => {
    return (
        <section className="experience">
            <div className="experience_container">
                <div className="experience_container_title">
                    <h2>Experience</h2>
                </div>
                <div className="experience_container_line_time">
                    <span className="draw_line"></span>
                    <ul>
                        <li>2021</li>
                        <li>2019</li>
                        <li>2017</li>
                    </ul>
                </div>
                <div className="experience_container_items_experience">
                    <ItemExperience />
                    <ItemExperience />
                    <ItemExperience />
                </div>
                <div className="experience_container_margen"></div>
            </div>
        </section>
    );
}

export default Experience;
