import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();
  const handleClick = (item) => {
    console.log("Navigate to movie:", item.title);
    navigation.navigate("MovieDetails", { item });
  };
  return (
    <View>
      <Text style={styles.text}>Trending Movies</Text>

      <Carousel
        width={width * 0.62}
        height={400}
        data={data}
        loop
        mode="parallax"
        style={{
          width: width,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          overflow: "visible",
        }}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 40,
          parallaxAdjacentItemScale: 0.75,
        }}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity onPress={() => handleClick(item)}>
        <Image source={item.poster_path} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },

  cardWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: width * 0.6,
    height: height * 0.4,
    borderRadius: 16,
  },

  title: {
    color: "white",
    marginTop: 10,
    textAlign: "center",
  },
});
