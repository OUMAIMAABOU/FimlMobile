import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default function InfoFilm() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>film</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#171717',
    alignItems: 'center',
    opacity: 0.9,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5,
    color: '#FFFFFF',
  },
  paragraph2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5,
    opacity: 0.9,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  Card: {
    backgroundColor: '#171717',
    position: 'absolute',
    bottom: -60,
    height: 340,
    width: Dimensions.get('window').width,
    borderRadius: 30,
    shadowOffset: {width: 4, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    paddingTop: 1,
    marginBottom: 30,
  },
  Play: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 60,
    width: 60,
    height: 60,
    tintColor: '#fff',
  },
  iconF: {
    marginLeft: 20,
    width: 40,
    height: 40,
    tintColor: '#fff',
  },
  favorite: {
    width: 25,
    height: 25,
    tintColor: '#fff',
    marginEnd: 20,
    marginTop: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  Next_pre: {
    width: 20,
    height: 20,
    marginTop: 19,
  },
});
