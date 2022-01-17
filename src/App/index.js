import './styles.scss';
import Header from '../Header/index';
import Home from '../Home/index';
import Skills from '../Skills/index';
import Experience from '../Experience/index';
import ExperienceAll from '../ExperienceAll/index';
import Portfolio from '../Portfolio/index';
import Footer from '../Footer/index';

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
                    <Route path="/experience/all">
                        <Header />
                        <ExperienceAll />
                        <Footer/>
                    </Route>
                    <Route path="/portfolio">
                        <Header />
                        <Portfolio />
                        <Footer/>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                        <Skills />
                        <Experience />
                        {/* <Portfolio /> */}
                        <Footer/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
