import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useState} from 'react';
import {popularMovies, pathImage} from '../tools/getMovies';
const {width, height} = Dimensions.get('window');
export default function PopularFilm({navigation}) {
  const [popularMovie, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let [page, setPage] = useState(1);
  const getPopularMovies = async () => {
    setPopularMovies(await popularMovies(page));
  };
  useEffect(() => {
    getPopularMovies();
  },[]);

  const renderItem = ({item}) => {
    return (
      <>
        <View style={styles.image}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MovieDetail', {...item})}>
            <Image
              style={{width: '100%', height: '99%', borderRadius: 13}}
              source={{
                uri: `${pathImage}${item.poster_path}`,
              }}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const onEndReached = async () => {
    page += 1;
    setIsLoading(true);
    setPopularMovies(movies.concat(await popularMovies(page)));
    setPage(page);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Parentparagraph}>
        <Text style={styles.paragraph}>popular movies</Text>
      </View>

      <Text style={styles.Title}></Text>
      <View style={styles.Card}>
        <FlatList
          data={popularMovie}
          keyExtractor={item => item.id}
          numColumns={3}
          key={'_'}
          renderItem={renderItem}
          onEndReached={onEndReached}
        />
      </View>
    </SafeAreaView>
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
    padding: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    width: 308,
    // marginVertical: 20,
  },
  Parentparagraph: {
    alignItems: 'center',
  },
  Title: {
    color: '#DCDCDC',
    fontSize: 20,
    width: 290,
    marginBottom: 5,
    marginTop: 5,
  },
  image: {
    width: width * 0.3,
    height: height * 0.2,
    padding: 3,
  },
  input: {
    backgroundColor: '#808080',
    color: '#fff',
    marginHorizontal: 24,
    borderRadius: 7,
    padding: 10,
    paddingLeft: 18,
    fontSize: 18,
  },
});
