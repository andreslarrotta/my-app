import './styles.scss';
import Header from '../Header/index';
import Home from '../Home/index';
import Skills from '../Skills/index';
import Experience from '../Experience/index';
import Portfolio from '../Portfolio/index';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                {/*   <Header />
                <Home />
                <Skills />
                <Experience />
                <Portfolio /> */}

                <Switch>
                    <Route path="/about">
                        <Header />
                        <Skills />
                    </Route>
                    <Route path="/users">
                        <Header />
                        <Experience />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                        <Skills />
                        <Experience />
                        <Portfolio />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
