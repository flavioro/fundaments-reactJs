import React from 'react'

import First from './components/First'
import WithParameters from './components/WithParameters'
import WithChildren from './components/WithChildren'
import Card from './components/layout/Card'

import './App.css'

export default (propos) => (
  <div className='App'>
    <Card title='#03 - Component with parameter'>
      <WithChildren>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </WithChildren>
    </Card>

    <Card title='#02 - Component with childrens'>
      <WithParameters title='This is title'
        subtitle='This is subtitle'/>
    </Card>    
  
    <Card title='#01 - First Component'>
      <First />
    </Card>

  </div>
);