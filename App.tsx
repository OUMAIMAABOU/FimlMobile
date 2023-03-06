import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/Navagation/Tabs';
import Home from './src/Component/Home';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      <Home />
    </NavigationContainer>
  );
};

export default App;
