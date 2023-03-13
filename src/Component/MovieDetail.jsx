import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import YouTube from 'react-native-youtube';

import Axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

export const MovieDetail = ({navigation, route}) => {
  const pathImage = 'https://image.tmdb.org/t/p/w1280';

  const {id, title, poster_path, backdrop_path, overview = ''} = route.params;

  // states
  const [trailerId, setTrailerId] = useState('');

  // get video
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e6f0a580cb12c89a64f3d9deb6e801f8`;

    Axios.get(url)
      .then(response => {
        if (response.data.results.length > 0) {
          const trailerId = response.data.results[0].key;
          console.log(response.data.results[0]);

          setTrailerId(trailerId);
        }
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <View>
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
          style={{alignSelf: 'stretch', height: 300}}
        />
      </View>

      <View
        style={{
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 25,
          }}>
          {overview}
        </Text>
      </View>
    </View>
  );
};
