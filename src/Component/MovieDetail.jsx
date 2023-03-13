import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';
import {Detail, pathImage} from '../tools/getMovies';
import Icon from 'react-native-vector-icons/Ionicons';
export const MovieDetail = ({navigation, route}) => {
  const {
    id,
    title,
    poster_path,
    backdrop_path,
    overview = '',
    ...rest
  } = route.params;
  const [trailerId, setTrailerId] = useState('');
  const getDetail = async () => {
    setTrailerId(await Detail(id));
  };
  useEffect(() => {
    try {
      getDetail();
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <View
        style={{
          marginBottom: 20,
        }}>
        <YouTube
          apiKey="YOUR_API_KEY"
          videoId={trailerId}
          play={true}
          loop={false}
          controls={1}
          style={{height: 300}}
        />
      </View>

      <View style={styles.card}>
        <Image
          source={{uri: `${pathImage}${poster_path}`}}
          style={styles.Image}
        />
        <View
          style={{
            margin: 5,
          }}>
          <Text style={styles.text}>title : {title}</Text>
          <Text style={styles.text}>language : {rest.original_language}</Text>
          <Text style={styles.text}>DATE : {rest.release_date}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text}>Average : </Text>
            <Text style={styles.text}>{rest.vote_average}</Text>
            <Icon name="star-sharp" size={30} color="#FFFF00" />
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text style={styles.text}>Story:</Text>
          <Text style={[styles.text, styles.overview]}>{overview}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    opacity: 0.9,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    margin: 5,
  },
  Image: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  overview: {
    color: '#fff',
    backgroundColor: '#171717',
    margin: 5,
    padding: 5,
    borderColor: '#171717',
    borderRadius: 3,
  },
});
