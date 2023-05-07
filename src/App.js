import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import RAPPERSKAYA1 from 'components/RAPPERSKAYA1';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';

import 'aos/dist/aos.css';
import './fonts.css';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }

  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/">
            <div>
              pxCode Screen List: <br />
              <Link to="/RAPPERSKAYA1">RAPPERSKAYA1</Link>
            </div>
          </Route>

          <Route exact path="/RAPPERSKAYA1" component={RAPPERSKAYA1} />
        </Switch>
      </Router>
    );
  }
}

export default App;
