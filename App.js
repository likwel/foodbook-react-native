import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/Index';
import Index from './src/navigation/Index';

function App() {
  return (
    <NavigationContainer>
      {/* <Index /> */}
      <AuthStack />
    </NavigationContainer>
  );
}

export default App;
