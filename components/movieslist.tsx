import { fallbackImage, image185 } from "@/constants/constants";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../navigation/appnavigations";

interface Movie {
  id: number;
  title: string;
  poster_path: any;
}

interface MoviesListProps {
  title: string;
  data: Movie[];
  hasSeeAll?: boolean;
  loading?: boolean;
  transparent?: boolean;
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function MoviesList({ title, data, hasSeeAll = true, loading = false, transparent = false }: MoviesListProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleClick = (item: Movie) => {
    navigation.navigate("MovieDetails", { movieId: item.id });
  };

  const handleSeeAll = () => {
    navigation.navigate("AllMovies", { movies: data, title: title });
  };

  return (
    <View style={[styles.container, transparent && styles.transparentContainer]}>
      <View style={styles.headerView}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {hasSeeAll && (
          <TouchableOpacity style={styles.seeAllContainer} onPress={handleSeeAll}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        )}
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#eab308" />
        </View>
      ) : (
        <ScrollView
          style={{ height: height * 0.3 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 5 }}
        >
          {data?.map((item) => (
            <MovieCard
              key={item.id}
              item={item}
              handleClick={handleClick}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const MovieCard = ({ item, handleClick }: { item: Movie; handleClick: (item: Movie) => void }) => {
  const tmdbImage = image185(item.poster_path);

  const imageSource = tmdbImage || fallbackImage;
  
  return (
    <View style={[styles.cardWrapper, { width: width * 0.3, height: height * 0.33 }]}>
      <TouchableOpacity onPress={() => handleClick(item)}>
         <Image 
           source={imageSource} 
           style={styles.image}
           onError={(error) => console.log('MovieList Image load error:', error)}
           onLoad={() => console.log('MovieList Image loaded successfully')}
         />
        <Text style={styles.title}>{item.title.length > 10 ? item.title.slice(0, 10) + "..." : item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b365c5f',
    paddingVertical: 10,
    paddingRight:5,
    borderRadius:15
  },
  transparentContainer: {
    backgroundColor: 'transparent',
  },
  loadingContainer: {
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    fontFamily: 'Poppins-Bold',
  },
  title :{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    
  },
  seeAllContainer: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: 'rgba(234, 179, 8, 0.2)',
    borderRadius: 20,
  },
  seeAll: {
    color: '#eab308',
    fontSize: 14,
    fontWeight: 'bold',
  },
    image: {
    width: width * 0.3,
    height: height * 0.25,
    borderRadius: 16,
  },
  cardWrapper: {
    marginHorizontal: 5,
  },

})
