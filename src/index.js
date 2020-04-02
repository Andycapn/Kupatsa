import React from 'react';
import ReactDOM from 'react-dom';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Nav from "./components/Nav/nav";
import Services from "./components/services_page/Services";

ReactDOM.render(
  <React.StrictMode>
        <Fabric>
            <Router>
                  <Nav />

                  <Route exact path='/' component={App} />
                  <Route exact path='/services' component={Services} />
            </Router>
        </Fabric>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
