import { fallbackImage, image185 } from "@/constants/constants";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function MoviesList({ title, data, hasSeeAll = true }: MoviesListProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleClick = (item: Movie) => {
    navigation.navigate("MovieDetails", { movieId: item.id });
  };

  return (
    <View>
      <View style={styles.headerView}>
        <Text style={styles.title}>{title}</Text>
        {hasSeeAll && (
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
      style={{ height: height * 0.3 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {data?.map((item) => (
          <MovieCard
            key={item.id}
            item={item}
            handleClick={handleClick}
          />
        ))}
      </ScrollView>
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
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8
  },
  seeAll: {
    color: '#eab308',
    fontSize: 14,
  },
    image: {
    width: width * 0.3,
    height: height * 0.2,
    borderRadius: 16,
  },
  cardWrapper: {
    marginHorizontal: 5,
  },

})
