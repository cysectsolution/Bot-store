import React from 'react';
import {Route, Router} from 'react-router';
import App from './components/App';

import Uploadform from './components/uploadpage/Uploadform'

export default (
  <div >
  <Router >
     <Route path="/" component={App} />
     <Route path="/upload" component={Uploadform} />
  </Router>
 </div>
)