import { fetchSearchMovies } from "@/API/MoviesDB";
import { fallbackImage, image500 } from "@/constants/constants";
import { RootStackParamList } from "@/navigation/appnavigations";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ChevronLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

const { width, height } = Dimensions.get("window");

type SearchScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SearchScreen'>;

export default function SearchScreen() {
  const navigation = useNavigation<SearchScreenNavigationProp>();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSearch = async () => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    
    try {
      setLoading(true);
      const data = await fetchSearchMovies(query);
      setResults(data?.results || []);
    } catch (error) {
      console.log("Search error:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const renderMovieItem = ({ item }: { item: any }) => {
    const handlePress = () => {
      navigation.navigate("MovieDetails", { movieId: item.id });
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
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Search movies..."
            placeholderTextColor="#666"
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={handleSearch}
          />
        </View>
      </View>
      
      <View style={styles.content}>
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#eab308" />
            <Text style={styles.loadingText}>Searching...</Text>
          </View>
        )}
        
        {!loading && query && results.length === 0 && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No movies found for "{query}"</Text>
          </View>
        )}
        
        {!loading && !query && (
          <View style={styles.placeholderContainer}>
            <View style={styles.imageContainer}>
              <Image 
                source={require("../assets/images/empty cinema chairs aesthetic vibe.jpg")} 
                style={styles.placeholderImage}
                resizeMode="cover"
              />
              <View style={styles.imageOverlay}>
                <MagnifyingGlassIcon size={40} color="#eab308" />
                <Text style={styles.placeholderTitle}>Discover Your Next Movie</Text>
               
              </View>
            </View>
          </View>
        )}
        
        <FlatList
          data={results}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2937',
    paddingTop: 40,
    alignItems: 'center',
  },

 
  placeholderText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  backButton: {
    padding: 10,
  },
  searchContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  input: {
    borderRadius: 30,
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    fontSize: 18,
    color: 'white',
  },
  content: {
    flex: 1,
    width: '100%',
    padding: 10,
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 18,
    color: 'white',
  },
  placeholderContainer: {
    paddingTop: height * 0.1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: width * 0.9,
    height: height * 0.5,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  placeholderImage: {
    
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  placeholderTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  placeholderSubtitle: {
    fontSize: 16,
    color: '#e5e5e5',
    textAlign: 'center',
    lineHeight: 24,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  listContainer: {
    padding: 10,
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: 'rgba(255,255,255,0.05)',
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