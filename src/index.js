import React from 'react';
import ReactDOM from 'react-dom';
// import First from './components/First'
// import WithParameters from './components/WithParameters'
import WithChildren from './components/WithChildren'

import './index.css'

ReactDOM.render(
  <div>
    <WithChildren>
      <ul>
        <li>Ana</li>
        <li>Bia</li>
        <li>Carlos</li>
        <li>Daniel</li>
      </ul>
    </WithChildren>
    {/* <First/>
    <WithParameters title='This is title'
      subtitle='This is subtitle'/> */}
  </div>,
  document.getElementById('root')
);
