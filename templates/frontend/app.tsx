import * as React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

class App extends React.Component {
    render = () => {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contacts</Link>
                            </li>
                            <li>
                                <a href="/test">Test outside react</a>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<div>Home</div>}/>
                        <Route path="/about" element={<div>About</div>}/>
                        <Route path="/contact" element={<div>Contacts</div>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}
export default App;