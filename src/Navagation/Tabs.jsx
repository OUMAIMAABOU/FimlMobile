import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Component/Home';
import ListFilm from '../Component/ListFilm';
import Favorite from '../Component/Favorite';
import PopularFilm from '../Component/popularFilm';
import Last from '../Component/upCaming';

import {StyleSheet, Image, View} from 'react-native';
const tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <tab.Navigator
      screenOptions={{
        tabBarStyle: [
          {
            backgroundColor: '#171717',
            opacity: 0.8,
            height: 70,
          },
        ],
      }}>
      <tab.Screen
        name="listFilm"
        component={ListFilm}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.image}
              source={require('../assets/Icon/HomeFilm.png')}
            />
          ),
        }}
      />
      <tab.Screen
        name="popularFilm"
        component={PopularFilm}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.image2}
              source={require('../assets/Icon/trending.png')}
            />
          ),
        }}
      />
      <tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.image}
              source={require('../assets/Icon/Plus.png')}
            />
          ),
        }}
      />
      <tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.image}
              source={require('../assets/Icon/fav.png')}
            />
          ),
        }}
      />

      <tab.Screen
        name="Last"
        component={Last}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={styles.image}
              source={require('../assets/Icon/downlaod.png')}
            />
          ),
        }}
      />
    </tab.Navigator>
  );
}
const styles = StyleSheet.create({
  image: {
    // tintColor: 'white',
    width: 170,
    height: 170,
  },
  image2: {
    tintColor: 'white',
    width: 35,
    height: 35,
  },
});
