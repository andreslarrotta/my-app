import './styles.scss';

const Header = (props) => {
    return (
        <div className="Header">
            <div className="Header_container">
                <h1>{props.texto}</h1>
                <div className="Header_column">
                    Hola soy un div # 1
                </div>
                <div className="Header_column">
                    Hola soy un div # 2
                </div>
            </div>
        </div>
    );
}

export default Header;
