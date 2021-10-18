import { useState } from 'react';
import './styles.scss';
import Header from '../Header/index';

const App = () => {
    const [titulo, setTitulo] = useState('Antes del SteTime')

    setTimeout(() => {
        setTitulo('despues del SteTime')
    }, 3000)

    return (
        <>
            <Header texto={titulo} />
        </>
    );
}

export default App;
