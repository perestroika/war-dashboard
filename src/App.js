import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import CountryContent from "./components/CountryContent";
import Race from "./components/Race";

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <div className="flex bg-white">
                <Sidebar />
                <Router>
                    <Route path="/" exact component={MainContent}/>
                    <Route path="/country" exact component={CountryContent}/>
                    <Route path="/race" exact component={Race}/>
                </Router>
            </div>
        </>
    );
}

export default App;
