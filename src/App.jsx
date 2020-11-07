import React from 'react'

import First from './components/First'
import WithParameters from './components/WithParameters'
import WithChildren from './components/WithChildren'
import Card from './components/layout/Card'
import Repetition from './components/Repetition'
import Conditional from './components/Conditional'
import ConditionalWithIf from './components/ConditionalWithIf'

import './App.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div className='App'>
    <Card title='#06 - Conditional v2'>
      <ConditionalWithIf number={11} />
    </Card>
    <Card title='#05 - Conditional v1'>
      <Conditional number={10} />
    </Card>
    <Card title='#04 - Repetition'>
      <Repetition />
    </Card>
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