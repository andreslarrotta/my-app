import './styles.scss';
/* import logo from '../assets/andres_larrotta_logo.png';*/

//components
import ItemMenu from './ItemMenu/index';

const Menu = () => {
    return (
        <ul>
            <ItemMenu text="WEB DESIGN" />
            <ItemMenu text="WEB DEVELOP" />
            <ItemMenu text="E-COMMERCE" />
        </ul>

    );
}

export default Menu;
