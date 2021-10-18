import { useState } from 'react';
import './styles.scss';
import Header from '../Header/index';

const App = () => {
    const [titulo, setTitulo] = useState('Antes del SteTime')
    const buttonSend = document.querySelector('.button_send')

    buttonSend.addEventListener('click', () => {
        let headerContainer = document.querySelector('.Header_container')
        headerContainer.setAttribute('style', 'background:red')
        console.log('CONSOLE LOG');
    })

    setTimeout(() => {
        setTitulo('despues del SteTime')
    }, 3000)

    return (
        <>
            <Header texto={titulo} />
            <button type="button" className="button_send">Click Me!</button>
        </>
    );
}

export default App;
