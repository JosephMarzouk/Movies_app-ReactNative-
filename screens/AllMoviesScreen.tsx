import { fallbackImage, image500 } from '@/constants/constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { RootStackParamList } from '../navigation/appnavigations';
import { Movie } from '../types/movie';

const { width, height } = Dimensions.get('window');

type AllMoviesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AllMovies'>;

interface AllMoviesScreenProps {
  movies: Movie[];
  title: string;
}

export default function AllMoviesScreen({ route }: { route: { params: AllMoviesScreenProps } }) {
  const navigation = useNavigation<AllMoviesScreenNavigationProp>();
  const { movies, title } = route.params;

  const renderMovieItem = ({ item }: { item: Movie }) => {
    const handlePress = () => {
      navigation.navigate('MovieDetails', { movieId: item.id });
    };

    return (
      <TouchableOpacity style={styles.movieItem} onPress={handlePress}>
        <Image 
          source={item.poster_path ? image500(item.poster_path) : fallbackImage} 
          style={styles.movieImage}
        />
        <View style={styles.movieInfo}>
          <Text style={styles.movieTitle} numberOfLines={2}>
            {item.title || item.original_title || 'Unknown Title'}
          </Text>
          <Text style={styles.movieDate}>
            {item.release_date ? new Date(item.release_date).getFullYear() : ''}
          </Text>
          <Text style={styles.movieRating}>
            ⭐ {item.vote_average ? item.vote_average.toFixed(1) : 'N/A'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 40,
  },
  backButton: {
    padding: 10,
    backgroundColor: 'rgba(234,179,8,0.9)',
    borderRadius: 12,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 20,
    width : width ,
    borderRadius: 12,
    overflow: 'hidden',
  },
  movieImage: {
    width: 100,
    height: 150,
  },
  movieInfo: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  movieDate: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 5,
  },
  movieRating: {
    fontSize: 14,
    color: '#eab308',
    fontWeight: 'bold',
  },
});
