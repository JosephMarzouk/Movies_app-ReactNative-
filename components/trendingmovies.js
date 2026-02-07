import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export default function rendingMovies( {data} ) {
  const navigation = useNavigation();
  const handleClick = (item) => {
    console.log("Navigate to movie:", item.title);
    navigation.navigate("MovieDetails", { item });
  }
  return (
    <View>
      <Text style={styles.text}>Trending Movies</Text>

      <Carousel
        width={width}
        height={260}
        data={data}
        loop
        mode="parallax"
        style={{ alignSelf: "center" ,alignItems: "center" , display: "flex"}}
        modeConfig={{
          parallaxScrollingOffset: 90,
          parallaxAdjacentItemScale: 0.95,
        }}
        renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
      />
    </View>
  );  
}

const MovieCard = ( {item , handleClick}) => {
  return (
    <View style={[styles.cardWrapper, { width: width * 0.4  }]}>
      <TouchableOpacity onPress={() => handleClick(item)}>
        <Image source={ item.poster_path } style={styles.image} />
        
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
    paddingHorizontal: 0,
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
