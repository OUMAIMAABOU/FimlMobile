import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ListFilm() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.paragraph}>What would you like to watch?</Text>
      <TextInput
        // onChangeText={value => handleTitle(value)}
        // value={titleSong}
        placeholder="Search"
        style={styles.input}
      />
      <View>
        <View style={styles.Card}>
          <View style={styles.image}>
            <Image
              style={{width: '100%', height: '99%', borderRadius: 30}}
              source={require('../assets/image/thewitch.jpg')}
            />
          </View>

          <View style={styles.image}>
            <Image
              style={{width: '100%', height: '99%', borderRadius: 30}}
              source={require('../assets/image/thewitch.jpg')}
            />
          </View>

          <View style={styles.image}>
            <Image
              style={{width: '100%', height: '99%', borderRadius: 30}}
              source={require('../assets/image/thewitch.jpg')}
            />
          </View>
          <View style={styles.image}>
            <Image
              style={{width: '100%', height: '99%', borderRadius: 30}}
              source={require('../assets/image/thewitch.jpg')}
            />
          </View>
        </View>
      </View>
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
  Card: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    marginBottom: 5,
    flexWrap: 'wrap',
  },

  paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    width: 308,
    marginVertical: 30,
  },
  Title: {
    color: '#DCDCDC',
    fontSize: 20,
    width: 290,
    marginBottom: 40,
  },
  image: {
    width: 110,
    height: 160,
    borderRadius: 30,
    marginRight: 10,
    marginBottom: 10,
  },
  input: {
    marginBottom: 20,
    backgroundColor: '#808080',
    color: '#fff',
    marginHorizontal: 10,
    borderRadius: 13,
    padding: 10,
    paddingLeft: 18,
    fontSize: 18,
  },
});
