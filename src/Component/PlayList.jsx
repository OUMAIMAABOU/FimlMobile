import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function PlayList() {
 
  return (
    <ScrollView style={styles.container}>
      <Text>playlist</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#171717',
    opacity: 0.9,
  },
  Card: {
    backgroundColor: '#ffffff',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 100,
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    width: 285,
  },
  Title: {
    color: '#34495e',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
