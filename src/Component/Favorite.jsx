import {useEffect, useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';


export default function Favorite() {
 

  return (
    <ScrollView style={styles.container}>
      <Text>FAV</Text>
      
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#171717',
    opacity: 0.9,
  },
  Play: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  PlayContainer: {
    flexDirection: 'row',
    margin: 90,
    justifyContent: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: '#fff',
  },

  input: {
    marginBottom: 20,
    marginLeft: 50,
    height: 48,
    width: 300,
    borderWidth: 1,
    borderRadius: 34,
    padding: 10,
    paddingLeft: 18,
    fontSize: 18,
    borderColor: '#FFC8D0',
  },
  save: {
    padding: 10,
    marginHorizontal: 90,
    borderRadius: 34,
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: '#FFC8D0',
    opacity: 0.8,
  },
});
