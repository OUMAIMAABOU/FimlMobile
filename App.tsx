import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/Navagation/Tabs';
import Home from './src/Component/Home';
import {MovieDetail} from './src/Component/MovieDetail';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {Provider} from 'react-redux';
import { Store } from './Redux/store/Store';
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MovieDetail"
            component={MovieDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="tab"
            component={Tabs}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
