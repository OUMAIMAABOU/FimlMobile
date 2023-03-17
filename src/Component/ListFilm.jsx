import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useState} from 'react';
import {allMovies, pathImage, Search} from '../tools/getMovies';
import {useSelector, useDispatch} from 'react-redux';
import {getMovies} from '../../Redux/actions/MovieAction';
const {width, height} = Dimensions.get('window');

export default function ListFilm({navigation}) {
  const [movies, setMovies] = useState([]);
  const [titleMovies, setTitleMovies] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  let [page, setPage] = useState(1);
  const handleTitle = value => {
    setTitleMovies(value);
  };
  const SearchMovies = async () => {
    setMovies(await Search(titleMovies));
  };
  const selectMovies = useSelector(state => state.moviess);
  useEffect(() => {
    dispatch(getMovies(page));
  }, []);
  useEffect(() => {
    setMovies(selectMovies);
    setIsLoading(false);
  }, [selectMovies]);
  useEffect(() => {
    if (!titleMovies) {
      setMovies(selectMovies);
    } else {
      SearchMovies();
    }
  }, [titleMovies]);

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
    setMovies(movies.concat(await allMovies(page)));
    setPage(page);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Parentparagraph}>
        <Text style={styles.paragraph}>What would you like to watch?</Text>
      </View>
      <TextInput
        onChangeText={value => handleTitle(value)}
        value={titleMovies}
        placeholder="What would you like to watch?"
        style={styles.input}
      />
      <View style={styles.Card}>
        <FlatList
          data={movies}
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
