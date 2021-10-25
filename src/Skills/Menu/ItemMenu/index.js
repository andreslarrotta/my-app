import './styles.scss';
/* import logo from '../assets/andres_larrotta_logo.png';*/

const ItemMenu = (props) => {
    return (
        <li className="skills_menu_item">{props.text}</li>
    );
}

export default ItemMenu;
