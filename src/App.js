import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import CountryContent from "./components/CountryContent";
import Race from "./components/Race";

import {BrowserRouter, Switch as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <>
            <div className="flex bg-white">
                <Sidebar />
                <Router>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={MainContent}/>
                            <Route path="/country" exact component={CountryContent}/>
                            <Route path="/race" exact component={Race}/>
                        </Switch>
                    </BrowserRouter>
                </Router>
            </div>
        </>
    );
}

export default App;
