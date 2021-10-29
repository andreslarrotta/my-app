import './styles.scss';
/* import logo from '../assets/andres_larrotta_logo.png';*/


const ItemExperience = () => {
    return (
        <div className="item_experience">
            <div className="item_experience_company">
                <img src="/images/001-photoshop.png" alt="" />
                <h3>Company</h3>
            </div>
            <h4>Front-end developer</h4>
            <div className="item_experience_date">
                <span className="item_experience_date_before">2017</span>
                -
                <span className="item_experience_date_after">2021</span>
            </div>
            <div className="item_experience_description">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="item_experience_see_more">
                <a href="/">See more</a>
            </div>
        </div>
    );
}

export default ItemExperience;
