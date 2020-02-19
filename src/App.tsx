import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyClass from './Components/MyClass';
import MyCorp from './Components/MyCorp';

const App: React.FC = () => {
  return (
    <div className="App">
      <MyClass name={'Fist Prop'}  isMarried={true}/>
      <MyCorp name1={'Fist Prop from Functonal Comp'} />
    </div>
  );
}

export default App;
