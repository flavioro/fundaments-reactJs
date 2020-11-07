import React from 'react';
import ReactDOM from 'react-dom';
import First from './components/First'
import WithParameters from './components/WithParameters'

import './index.css'

ReactDOM.render(
  <div>
    <First/>
    <WithParameters title='This is title'
      subtitle='This is subtitle'/>
  </div>,
  document.getElementById('root')
);
