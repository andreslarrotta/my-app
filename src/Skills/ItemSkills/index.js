import './styles.scss';
/* import logo from '../assets/andres_larrotta_logo.png';*/


const ItemSkills = () => {
    return (
        <div className="skills_container_content_item">
            <div className="skill_image">
                <img src="/images/001-photoshop.png" alt="" />
                <div className="percent">
                    <span className="percent_value"></span> 85%
                </div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
    );
}

export default ItemSkills;
