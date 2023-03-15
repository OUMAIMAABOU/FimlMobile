import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/image/picfilm.png')}
      />
      <Text style={styles.paragraph}>Watch movies in Virtual Reality </Text>
      <Text style={styles.TitleG}>
        Download and watch offline wherever you are
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('tab')}>
        <View style={styles.save}>
          <Text
            style={{
              // backgroundColor: '#fe35b',
              color: 'white',
              textAlign: 'center',
            }}>
            Show more
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#171717',
    opacity: 0.9,
    alignItems: 'center',
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
  paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    width: 308,
    marginVertical: 30,
  },

  TitleG: {
    color: '#DCDCDC',
    fontSize: 20,
    textAlign: 'center',
    width: 290,
    marginBottom: 40,
  },
  image: {
    width: 360,
    height: 360,
  },

  icon: {
    width: 60,
    height: 60,
    tintColor: '#fff',
  },
});
